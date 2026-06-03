import { paymentMethods } from '../data/menuData'
import { useCart } from '../context/CartContext'
import { useCheckout } from '../hooks/useCheckout'

function randomOrderNumber() {
  return `BB${Date.now().toString().slice(-8)}`
}

export default function CheckoutModal() {
  const { items, subtotal, checkoutOpen, closeCheckout, clearCart } = useCart()
  const {
    step,
    method,
    pin,
    processing,
    orderNumber,
    setStep,
    setMethod,
    setPin,
    setProcessing,
    setOrderNumber,
  } = useCheckout(checkoutOpen)

  if (!checkoutOpen) return null

  const selectedMethod = paymentMethods.find((m) => m.id === method)

  function handlePay() {
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      setOrderNumber(randomOrderNumber())
      setStep('success')
      clearCart()
    }, 1800)
  }

  function handleClose() {
    closeCheckout()
  }

  return (
    <>
      <button type="button" className="overlay overlay-dark" aria-label="결제 닫기" onClick={handleClose} />
      <div className="checkout-modal" role="dialog" aria-modal="true" aria-label="모바일 결제">
        <div className="checkout-sheet">
          {step === 'success' ? (
            <div className="checkout-success">
              <div className="success-icon">✓</div>
              <h2>결제 완료!</h2>
              <p className="demo-badge">데모 결제 · 실제 청구 없음</p>
              <p className="order-number">주문번호 {orderNumber}</p>
              <p className="success-desc">
                주문이 접수되었습니다.
                <br />
                카운터에서 주문번호를 불러주시면 준비해 드릴게요.
              </p>
              <button type="button" className="btn btn-primary btn-full" onClick={handleClose}>
                확인
              </button>
            </div>
          ) : (
            <>
              <header className="checkout-header">
                <button type="button" className="icon-btn" onClick={handleClose}>
                  ✕
                </button>
                <h2>모바일 결제</h2>
                <span className="checkout-amount">₩{subtotal.toLocaleString()}</span>
              </header>

              <div className="checkout-items">
                {items.map((entry) => (
                  <div key={entry.cartKey} className="checkout-item">
                    <span>
                      {entry.name} × {entry.quantity}
                    </span>
                    <span>₩{(entry.unitPrice * entry.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {step === 'method' && (
                <>
                  <p className="checkout-label">결제 수단 선택</p>
                  <div className="payment-methods">
                    {paymentMethods.map((pm) => (
                      <button
                        key={pm.id}
                        type="button"
                        className="payment-method"
                        style={{ background: pm.color, color: pm.textColor }}
                        onClick={() => {
                          setMethod(pm.id)
                          setStep('confirm')
                        }}
                      >
                        <span className="payment-icon">{pm.icon}</span>
                        {pm.name}
                      </button>
                    ))}
                  </div>
                  <p className="checkout-note">
                    간편결제 · 카드 · 계좌이체 모두 데모 UI입니다.
                  </p>
                </>
              )}

              {step === 'confirm' && selectedMethod && (
                <div className="payment-confirm">
                  <div
                    className="payment-brand"
                    style={{ background: selectedMethod.color, color: selectedMethod.textColor }}
                  >
                    <span>{selectedMethod.icon}</span>
                    <strong>{selectedMethod.name}</strong>
                  </div>

                  <div className="payment-summary">
                    <div>
                      <span>주문 금액</span>
                      <strong>₩{subtotal.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span>결제 금액</span>
                      <strong className="pay-total">₩{subtotal.toLocaleString()}</strong>
                    </div>
                  </div>

                  <label className="pin-label">
                    결제 비밀번호 (데모)
                    <input
                      type="password"
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="●●●●●●"
                      value={pin}
                      onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                    />
                  </label>

                  <p className="checkout-note">
                    실제 결제가 진행되지 않습니다. 아무 번호나 입력 후 결제하기를 눌러주세요.
                  </p>

                  <div className="checkout-actions">
                    <button type="button" className="btn btn-outline" onClick={() => setStep('method')}>
                      이전
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={pin.length < 4 || processing}
                      onClick={handlePay}
                    >
                      {processing ? '결제 처리 중…' : '결제하기'}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
