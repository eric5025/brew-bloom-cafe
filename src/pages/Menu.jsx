import { useState } from 'react'
import { useMenu } from '../hooks/useMenu'
import { useCart } from '../context/CartContext'
import MenuCard from '../components/MenuCard'

export default function Menu() {
  const { getCategories } = useMenu()
  const menuCategories = getCategories()
  const [active, setActive] = useState(menuCategories[0].id)
  const { addItem } = useCart()
  const current = menuCategories.find((c) => c.id === active)

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="section-label">Menu</p>
          <h1 className="page-title">메뉴</h1>
          <p className="page-subtitle">
            신선하게 로스팅한 원두와 매일 구운 디저트 · 옵션 선택 후 장바구니에 담아주세요
          </p>
        </div>
      </section>

      <section className="section menu-section">
        <div className="container">
          <div className="tabs">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`tab ${active === cat.id ? 'active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.name}
                <span className="tab-count">{cat.items.length}</span>
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {current.items.map((item) => (
              <MenuCard key={item.id} item={item} onAdd={addItem} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
