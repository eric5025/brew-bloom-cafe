import { useCart } from '../context/CartContext'

function formatOptions(entry) {
  const parts = [entry.size.label]
  if (entry.temperature) parts.push(entry.temperature.label)
  return parts.join(' · ')
}

export default function CartDrawer() {
  const {
    items,
    cartOpen,
    subtotal,
    setCartOpen,
    updateQuantity,
    removeItem,
    openCheckout,
  } = useCart()

  if (!cartOpen) return null

  return (
    <>
      <button
        type="button"
        className="overlay"
        aria-label="장바구니 닫기"
        onClick={() => setCartOpen(false)}
      />
      <aside className="cart-drawer" aria-label="장바구니">
        <header className="cart-header">
          <h2>장바구니</h2>
          <button type="button" className="icon-btn" onClick={() => setCartOpen(false)}>
            ✕
          </button>
        </header>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span>🛒</span>
            <p>장바구니가 비어 있습니다</p>
            <button type="button" className="btn btn-outline" onClick={() => setCartOpen(false)}>
              메뉴 보러가기
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((entry) => (
                <li key={entry.cartKey} className="cart-item">
                  <img src={entry.image} alt={entry.name} />
                  <div className="cart-item-info">
                    <h3>{entry.name}</h3>
                    <p>{formatOptions(entry)}</p>
                    <p className="cart-item-price">
                      ₩{(entry.unitPrice * entry.quantity).toLocaleString()}
                    </p>
                    <div className="qty-control">
                      <button
                        type="button"
                        aria-label="수량 줄이기"
                        onClick={() => updateQuantity(entry.cartKey, -1)}
                      >
                        −
                      </button>
                      <span>{entry.quantity}</span>
                      <button
                        type="button"
                        aria-label="수량 늘리기"
                        onClick={() => updateQuantity(entry.cartKey, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="cart-remove"
                    aria-label="삭제"
                    onClick={() => removeItem(entry.cartKey)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            <footer className="cart-footer">
              <div className="cart-summary">
                <span>합계</span>
                <strong>₩{subtotal.toLocaleString()}</strong>
              </div>
              <p className="cart-note">* 데모 결제입니다. 실제 결제는 진행되지 않습니다.</p>
              <button type="button" className="btn btn-primary btn-full" onClick={openCheckout}>
                주문하기
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  )
}
