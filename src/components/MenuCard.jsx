import { useState } from 'react'
import { useMenu } from '../hooks/useMenu'

export default function MenuCard({ item, onAdd }) {
  const { getDefaultOptions } = useMenu()
  const defaults = getDefaultOptions(item)
  const [sizeId, setSizeId] = useState(defaults.size?.id ?? item.options.size[0].id)
  const [tempId, setTempId] = useState(
    defaults.temperature?.id ?? item.options.temperature?.[0]?.id ?? null,
  )

  const selectedSize = item.options.size.find((s) => s.id === sizeId)
  const selectedTemp = item.options.temperature?.find((t) => t.id === tempId) ?? null
  const unitPrice = item.price + (selectedSize?.priceAdd ?? 0)

  function handleAdd() {
    onAdd(item.id, { size: selectedSize, temperature: selectedTemp })
  }

  return (
    <article className="menu-card">
      <div className="menu-card-image-wrap">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.badge && <span className="menu-card-badge">{item.badge}</span>}
      </div>
      <div className="menu-card-body">
        <div className="menu-card-header">
          <h3>{item.name}</h3>
          <span className="menu-card-price">₩{unitPrice.toLocaleString()}</span>
        </div>
        <p className="menu-card-desc">{item.desc}</p>

        {item.options.size.length > 1 && (
          <div className="option-group">
            <span className="option-label">사이즈</span>
            <div className="option-pills">
              {item.options.size.map((size) => (
                <button
                  key={size.id}
                  type="button"
                  className={`option-pill ${sizeId === size.id ? 'active' : ''}`}
                  onClick={() => setSizeId(size.id)}
                >
                  {size.label}
                  {size.priceAdd > 0 && ` (+₩${size.priceAdd.toLocaleString()})`}
                </button>
              ))}
            </div>
          </div>
        )}

        {item.options.temperature && item.options.temperature.length > 1 && (
          <div className="option-group">
            <span className="option-label">온도</span>
            <div className="option-pills">
              {item.options.temperature.map((temp) => (
                <button
                  key={temp.id}
                  type="button"
                  className={`option-pill ${tempId === temp.id ? 'active' : ''}`}
                  onClick={() => setTempId(temp.id)}
                >
                  {temp.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <button type="button" className="btn btn-primary btn-full menu-add-btn" onClick={handleAdd}>
          장바구니 담기
        </button>
      </div>
    </article>
  )
}
