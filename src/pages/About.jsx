export default function About() {
  const timeline = [
    { year: '2019', title: '성수동 첫 매장 오픈', desc: '작은 로스팅 룸에서 시작' },
    { year: '2021', title: '자체 블렌드 출시', desc: 'Bloom Blend 시리즈 런칭' },
    { year: '2024', title: '베이커리 확장', desc: '매일 아침 갓 구운 빵 & 디저트' },
    { year: '2026', title: '온라인 예약', desc: '웹사이트를 통한 좌석 예약 시작' },
  ]

  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="section-label">About Us</p>
          <h1 className="page-title">우리의 이야기</h1>
          <p className="page-subtitle">
            좋은 커피는 좋은 사람과 좋은 공간에서 완성됩니다
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="about-visual">🌱</div>
          <div>
            <h2 className="section-title">From Bean to Bloom</h2>
            <p className="body-text">
              Brew & Bloom은 2019년 서울 성수동에서 시작된 스페셜티 커피 카페입니다.
              우리는 산지와 직접 거래하는 윤리적 원두를 사용하며,
              매주 소량 로스팅하여 최상의 신선함을 유지합니다.
            </p>
            <p className="body-text">
              커피 한 잔이 하루를 바꿀 수 있다고 믿습니다.
              그래서 바리스타 한 분, 한 분이 매 컵에 정성을 담습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title text-center">연혁</h2>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.year}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">팀</h2>
          <div className="card-grid">
            {[
              { name: '김민준', role: 'Head Barista', emoji: '👨‍🍳' },
              { name: '이서연', role: 'Roaster', emoji: '🔥' },
              { name: '박지호', role: 'Pastry Chef', emoji: '🧁' },
            ].map((member) => (
              <article key={member.name} className="card team-card">
                <span className="card-emoji">{member.emoji}</span>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
