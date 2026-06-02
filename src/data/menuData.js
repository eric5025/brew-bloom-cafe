function menuImage(id) {
  return `/images/menu/${id}.png`
}

export const menuCategories = [
  {
    id: 'coffee',
    name: '커피',
    items: [
      {
        id: 'espresso',
        name: '에스프레소',
        price: 4500,
        desc: '싱글 오리진 Ethiopia Yirgacheffe · 플로럴 & 시트러스',
        image: menuImage('espresso'),
        badge: 'Single Origin',
        options: {
          size: [
            { id: 'single', label: '싱글', priceAdd: 0 },
            { id: 'double', label: '더블', priceAdd: 500 },
          ],
          temperature: [
            { id: 'hot', label: 'HOT' },
          ],
        },
      },
      {
        id: 'americano',
        name: '아메리카노',
        price: 5000,
        desc: '깊고 깔끔한 클래식 · 18g 더블샷',
        image: menuImage('americano'),
        options: {
          size: [
            { id: 'regular', label: 'Regular', priceAdd: 0 },
            { id: 'large', label: 'Large', priceAdd: 500 },
          ],
          temperature: [
            { id: 'hot', label: 'HOT' },
            { id: 'ice', label: 'ICE' },
          ],
        },
      },
      {
        id: 'latte',
        name: '카페라떼',
        price: 5500,
        desc: '부드러운 스팀 밀크와의 조화 · 라떼 아트',
        image: menuImage('latte'),
        badge: 'Popular',
        options: {
          size: [
            { id: 'regular', label: 'Regular', priceAdd: 0 },
            { id: 'large', label: 'Large', priceAdd: 500 },
          ],
          temperature: [
            { id: 'hot', label: 'HOT' },
            { id: 'ice', label: 'ICE' },
          ],
        },
      },
      {
        id: 'flat-white',
        name: '플랫 화이트',
        price: 5800,
        desc: '벨벳 같은 텍스처 · ristretto 베이스',
        image: menuImage('flat-white'),
        options: {
          size: [
            { id: 'regular', label: 'Regular', priceAdd: 0 },
          ],
          temperature: [
            { id: 'hot', label: 'HOT' },
          ],
        },
      },
      {
        id: 'cold-brew',
        name: '콜드브루',
        price: 6000,
        desc: '18시간 저온 추출 · 초콜릿 & 견과류 노트',
        image: menuImage('cold-brew'),
        badge: 'Season Pick',
        options: {
          size: [
            { id: 'regular', label: 'Regular', priceAdd: 0 },
            { id: 'large', label: 'Large', priceAdd: 700 },
          ],
          temperature: [
            { id: 'ice', label: 'ICE' },
          ],
        },
      },
    ],
  },
  {
    id: 'signature',
    name: '시그니처',
    items: [
      {
        id: 'bloom-latte',
        name: '블룸 라떼',
        price: 6500,
        desc: '라벤더 시럽 & 로즈마리 · Brew & Bloom 시그니처',
        image: menuImage('bloom-latte'),
        badge: 'Best Seller',
        options: {
          size: [
            { id: 'regular', label: 'Regular', priceAdd: 0 },
            { id: 'large', label: 'Large', priceAdd: 500 },
          ],
          temperature: [
            { id: 'hot', label: 'HOT' },
            { id: 'ice', label: 'ICE' },
          ],
        },
      },
      {
        id: 'honey-oat-latte',
        name: '허니 오트 라떼',
        price: 6200,
        desc: '국내산 꿀 & 오트밀크 · 비건 친화',
        image: menuImage('honey-oat-latte'),
        options: {
          size: [
            { id: 'regular', label: 'Regular', priceAdd: 0 },
            { id: 'large', label: 'Large', priceAdd: 500 },
          ],
          temperature: [
            { id: 'hot', label: 'HOT' },
            { id: 'ice', label: 'ICE' },
          ],
        },
      },
      {
        id: 'season-drip',
        name: '시즌 드립',
        price: 7000,
        desc: '바리스타 추천 원두 · 이번 주 Colombia Huila',
        image: menuImage('season-drip'),
        badge: "Barista's Pick",
        options: {
          size: [
            { id: 'regular', label: 'Regular', priceAdd: 0 },
          ],
          temperature: [
            { id: 'hot', label: 'HOT' },
            { id: 'ice', label: 'ICE' },
          ],
        },
      },
    ],
  },
  {
    id: 'dessert',
    name: '디저트',
    items: [
      {
        id: 'croissant',
        name: '크로issant',
        price: 4500,
        desc: '버터 풍미 가득 · 매일 아침 갓 구움',
        image: menuImage('croissant'),
        options: {
          size: [
            { id: 'regular', label: '1개', priceAdd: 0 },
          ],
        },
      },
      {
        id: 'tiramisu',
        name: '티라미수',
        price: 6800,
        desc: '에스프레소 시트 & 마스카포네 · 2인 분량',
        image: menuImage('tiramisu'),
        badge: 'New',
        options: {
          size: [
            { id: 'regular', label: '1조각', priceAdd: 0 },
          ],
        },
      },
      {
        id: 'basque-cheesecake',
        name: '바스크 치즈케이크',
        price: 7200,
        desc: '겉은 태운, 속은 부드러운 · 크림치즈 100%',
        image: menuImage('basque-cheesecake'),
        badge: 'Best Seller',
        options: {
          size: [
            { id: 'regular', label: '1조각', priceAdd: 0 },
          ],
        },
      },
    ],
  },
]

export const featuredItems = [
  {
    id: 'bloom-latte',
    name: '블룸 라떼',
    tag: 'Best Seller',
    price: 6500,
    image: menuImage('bloom-latte'),
  },
  {
    id: 'cold-brew',
    name: '콜드브루',
    tag: 'Season Pick',
    price: 6000,
    image: menuImage('cold-brew'),
  },
  {
    id: 'basque-cheesecake',
    name: '바스크 치즈케이크',
    tag: 'New',
    price: 7200,
    image: menuImage('basque-cheesecake'),
  },
]

export const paymentMethods = [
  { id: 'kakao', name: '카카오페이', color: '#FEE500', textColor: '#191919', icon: '💛' },
  { id: 'naver', name: '네이버페이', color: '#03C75A', textColor: '#fff', icon: 'N' },
  { id: 'toss', name: '토스페이', color: '#0064FF', textColor: '#fff', icon: 'T' },
  { id: 'card', name: '신용/체크카드', color: '#6f4e37', textColor: '#fff', icon: '💳' },
]

export function findMenuItem(itemId) {
  for (const category of menuCategories) {
    const item = category.items.find((i) => i.id === itemId)
    if (item) return item
  }
  return null
}

export function getDefaultOptions(item) {
  const size = item.options.size[0]
  const temperature = item.options.temperature?.[0] ?? null
  return { size, temperature }
}

export function buildCartKey(itemId, sizeId, temperatureId) {
  return `${itemId}__${sizeId}__${temperatureId ?? 'none'}`
}

export function calcUnitPrice(item, size) {
  return item.price + (size?.priceAdd ?? 0)
}
