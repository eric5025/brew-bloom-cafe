import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const links = [
  { to: '/', label: '홈' },
  { to: '/menu', label: '메뉴' },
  { to: '/about', label: '소개' },
  { to: '/contact', label: '연락처' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { totalCount, setCartOpen } = useCart()

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-icon">☕</span>
          Brew & Bloom
        </NavLink>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="cart-btn"
            aria-label={`장바구니 ${totalCount}개`}
            onClick={() => setCartOpen(true)}
          >
            🛒
            {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
