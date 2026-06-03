import { createContext, useContext, useMemo, useState } from 'react'
import { buildCartKey, calcUnitPrice } from '../data/menuData'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useMenu } from '../hooks/useMenu'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('brew-bloom-cart', [])
  const { findItem, getDefaultOptions } = useMenu()
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  function addItem(itemId, options) {
    const menuItem = findItem(itemId)
    if (!menuItem) return

    const defaults = getDefaultOptions(menuItem)
    const size = options?.size ?? defaults.size
    const temperature = options?.temperature ?? defaults.temperature
    const cartKey = buildCartKey(itemId, size.id, temperature?.id)

    setItems((prev) => {
      const existing = prev.find((entry) => entry.cartKey === cartKey)
      if (existing) {
        return prev.map((entry) =>
          entry.cartKey === cartKey
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry,
        )
      }

      const unitPrice = calcUnitPrice(menuItem, size)
      return [
        ...prev,
        {
          cartKey,
          itemId,
          name: menuItem.name,
          image: menuItem.image,
          size,
          temperature,
          unitPrice,
          quantity: 1,
        },
      ]
    })
    setCartOpen(true)
  }

  function updateQuantity(cartKey, delta) {
    setItems((prev) =>
      prev
        .map((entry) =>
          entry.cartKey === cartKey
            ? { ...entry, quantity: entry.quantity + delta }
            : entry,
        )
        .filter((entry) => entry.quantity > 0),
    )
  }

  function removeItem(cartKey) {
    setItems((prev) => prev.filter((entry) => entry.cartKey !== cartKey))
  }

  function clearCart() {
    setItems([])
  }

  function openCheckout() {
    setCartOpen(false)
    setCheckoutOpen(true)
  }

  function closeCheckout() {
    setCheckoutOpen(false)
  }

  const totalCount = useMemo(
    () => items.reduce((sum, entry) => sum + entry.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((sum, entry) => sum + entry.unitPrice * entry.quantity, 0),
    [items],
  )

  const value = {
    items,
    cartOpen,
    checkoutOpen,
    totalCount,
    subtotal,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    setCartOpen,
    openCheckout,
    closeCheckout,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
