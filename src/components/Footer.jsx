import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">☕ Brew & Bloom</p>
          <p className="footer-tagline">매일 아침, 한 잔의 꽃이 피듯</p>
        </div>
        <div>
          <p className="footer-heading">영업시간</p>
          <p>월–금 08:00 – 21:00</p>
          <p>토–일 09:00 – 22:00</p>
        </div>
        <div>
          <p className="footer-heading">바로가기</p>
          <Link to="/menu">메뉴</Link>
          <Link to="/about">소개</Link>
          <Link to="/contact">연락처</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Brew & Bloom. All rights reserved.</p>
      </div>
    </footer>
  )
}
