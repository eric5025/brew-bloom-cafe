import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="section-label">Contact</p>
          <h1 className="page-title">연락처</h1>
          <p className="page-subtitle">방문, 단체 예약, 협업 문의를 환영합니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="info-block">
              <h3>📍 주소</h3>
              <p>서울특별시 성동구 연무장길 45</p>
              <p>성수동 2가 (지하철 2호선 성수역 3번 출구 도보 5분)</p>
            </div>
            <div className="info-block">
              <h3>🕐 영업시간</h3>
              <p>월–금 08:00 – 21:00</p>
              <p>토–일 09:00 – 22:00</p>
              <p>공휴일 10:00 – 20:00</p>
            </div>
            <div className="info-block">
              <h3>📞 연락</h3>
              <p>02-1234-5678</p>
              <p>hello@brewandbloom.kr</p>
            </div>
            <div className="map-placeholder">
              <span>🗺️</span>
              <p>성수동 카페 거리</p>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-message">
                <span>✅</span>
                <h3>문의가 접수되었습니다!</h3>
                <p>빠른 시일 내에 답변 드리겠습니다.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>문의하기</h3>
                <label>
                  이름
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                  />
                </label>
                <label>
                  이메일
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                  />
                </label>
                <label>
                  메시지
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="문의 내용을 입력해 주세요"
                  />
                </label>
                <button type="submit" className="btn btn-primary btn-full">
                  보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
