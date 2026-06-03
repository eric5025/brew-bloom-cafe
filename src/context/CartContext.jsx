import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import {
  buildCartKey,
  calcUnitPrice,
  findMenuItem,
  getDefaultOptions,
} from '../data/menuData'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  // localStorage에서 초기값 가져오기
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('brew-bloom-cart')
      return saved ? JSON.parse(saved) : []
    } catch (error) {
      console.warn('Failed to load cart from localStorage:', error)
      return []
    }
  })
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  // items 변경될 때마다 localStorage에 자동 저장
  useEffect(() => {
    try {
      localStorage.setItem('brew-bloom-cart', JSON.stringify(items))
    } catch (error) {
      console.warn('Failed to save cart to localStorage:', error)
    }
  }, [items])

  function addItem(itemId, options) {
    const menuItem = findMenuItem(itemId)
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
