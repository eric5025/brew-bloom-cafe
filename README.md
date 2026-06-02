# Brew & Bloom ☕

서울 성수동 스페셜티 커피 카페 **Brew & Bloom** 소개 및 모바일 주문 데모 웹사이트입니다.

**Live Demo:** [https://brew-bloom-cafe-one.vercel.app](https://brew-bloom-cafe-one.vercel.app)

## 주요 기능

- **4페이지 구성** — 홈, 메뉴, 소개, 연락처
- **메뉴 사진** — AI 생성 이미지 (로컬 에셋)
- **장바구니** — 옵션 선택 후 담기, 수량 조절
- **모바일 결제 UI (데모)** — 카카오페이 · 네이버페이 · 토스 · 카드 (실제 결제 없음)
- **반응형 디자인** — 모바일 · 태블릿 · 데스크톱

## 페이지 구성

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 홈 | `/` | 히어로, 오늘의 추천, 공간 소개 |
| 메뉴 | `/menu` | 커피 / 시그니처 / 디저트 탭, 옵션 선택 |
| 소개 | `/about` | 카페 스토리, 연혁, 팀 |
| 연락처 | `/contact` | 주소, 영업시간, 문의 폼 |

## 기술 스택

- React 19 + Vite
- React Router
- Context API (장바구니 상태)
- CSS (커스텀 디자인)

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173) 접속

## 빌드

```bash
npm run build
npm run preview
```

## Vercel 배포

### GitHub 연동 (권장)

1. GitHub 저장소 연결
2. [vercel.com](https://vercel.com) → **Add New Project**
3. Framework Preset: **Vite** (자동 감지)
4. **Deploy** 클릭

### Vercel CLI

```bash
npx vercel deploy --prod
```

`vercel.json`에 SPA 라우팅 설정이 포함되어 `/menu`, `/about` 등 직접 접속도 정상 동작합니다.

## 프로젝트 구조

```
src/
├── components/   # Navbar, Footer, MenuCard, CartDrawer, CheckoutModal
├── context/      # CartContext (장바구니 상태)
├── data/         # menuData.js (메뉴·결제 수단)
├── pages/        # Home, Menu, About, Contact
public/
└── images/       # 메뉴·히어로 이미지
```

## 라이선스

이 프로젝트는 학습·포트폴리오 목적으로 제작되었습니다.
