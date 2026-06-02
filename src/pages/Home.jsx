import { Link } from 'react-router-dom'
import { featuredItems, findMenuItem, getDefaultOptions } from '../data/menuData'
import { useCart } from '../context/CartContext'

export default function Home() {
  const { addItem } = useCart()

  function handleQuickAdd(itemId) {
    const menuItem = findMenuItem(itemId)
    if (!menuItem) return
    const defaults = getDefaultOptions(menuItem)
    addItem(itemId, defaults)
  }

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-eyebrow">Seongsu-dong, Seoul</p>
            <h1>
              매일 아침,
              <br />
              <em>한 잔의 꽃</em>이 피듯
            </h1>
            <p className="hero-desc">
              직접 로스팅한 스페셜티 원두와 매일 구운 디저트.
              Brew & Bloom에서 여유로운 한 잔을 만나보세요.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                메뉴 보기
              </Link>
              <Link to="/about" className="btn btn-outline">
                우리 이야기
              </Link>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>12+</dt>
                <dd>원두 종류</dd>
              </div>
              <div>
                <dt>4.9</dt>
                <dd>방문자 평점</dd>
              </div>
              <div>
                <dt>2019</dt>
                <dd>오픈</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                className="hero-image"
                src="/images/hero.png"
                alt="Brew & Bloom 카페 라떼"
              />
            </div>
            <aside className="hero-note">
              <span className="hero-note-label">Today's Pick</span>
              <strong>블룸 라떼</strong>
              <span>₩6,500</span>
            </aside>
          </div>
        </div>

        <div className="hero-strip">
          <div className="container hero-strip-inner">
            <span>월–금 08:00 – 21:00</span>
            <span className="hero-strip-dot" aria-hidden="true" />
            <span>성수동 2가</span>
            <span className="hero-strip-dot" aria-hidden="true" />
            <span>모바일 주문 · 간편결제</span>
          </div>
        </div>
      </section>

      <section className="section home-featured">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">Featured</p>
              <h2 className="section-title">오늘의 추천</h2>
            </div>
            <Link to="/menu" className="section-link">
              전체 메뉴 →
            </Link>
          </div>
          <div className="featured-grid">
            {featuredItems.map((item) => (
              <article key={item.id} className="featured-card">
                <div className="featured-image-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="card-tag">{item.tag}</span>
                </div>
                <div className="featured-card-body">
                  <h3>{item.name}</h3>
                  <p className="featured-price">₩{item.price.toLocaleString()}</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-full"
                    onClick={() => handleQuickAdd(item.id)}
                  >
                    장바구니 담기
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt home-experience">
        <div className="container experience-layout">
          <div className="experience-image">
            <img
              src="/images/cafe-interior.png"
              alt="카페 내부 분위기"
              loading="lazy"
            />
          </div>
          <div className="experience-copy">
            <p className="section-label">Experience</p>
            <h2 className="section-title">공간 & 분위기</h2>
            <p className="body-text">
              원목 가구와 부드러운 자연광이 어우러진 공간에서
              커피 한 잔의 여유를 즐겨보세요.
              작업하기 좋은 좌석과 테라스도 준비되어 있습니다.
            </p>
            <ul className="feature-chips">
              <li>고속 Wi-Fi</li>
              <li>콘센트 구비</li>
              <li>테라스 좌석</li>
              <li>모바일 주문</li>
            </ul>
            <Link to="/contact" className="btn btn-outline">
              오시는 길
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
