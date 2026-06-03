/**
 * useMenu Hook
 * 
 * 주요 Hook 함수 #1: useMenu
 * 
 * 필요성:
 * - 메뉴 데이터 검색 및 필터링 로직 중앙화
 * - 여러 컴포넌트에서 메뉴 조회 시 코드 중복 제거
 * - 성능 최적화 (useMemo로 메모이제이션)
 * 
 * 사용 예:
 * const { findItem, getDefault } = useMenu();
 * const item = findItem('bloom-latte');
 */

import { useMemo } from 'react';
import { menuCategories } from '../data/menuData';
import type { MenuItem, MenuOptions } from '../types/index';

export function useMenu() {
  // useMemo: 메뉴 데이터가 변경될 때만 함수 생성 (불필요한 재계산 방지)
  const menuMap = useMemo(() => {
    const map = new Map<string, MenuItem>();
    for (const category of menuCategories) {
      for (const item of category.items) {
        map.set(item.id, item);
      }
    }
    return map;
  }, []);

  return {
    /**
     * 메뉴 항목 ID로 메뉴 아이템 검색
     */
    findItem: (itemId: string): MenuItem | undefined => {
      return menuMap.get(itemId);
    },

    /**
     * 메뉴의 기본 옵션 반환 (사이즈 첫 번째, 온도 첫 번째)
     */
    getDefaultOptions: (item: MenuItem | undefined): Partial<MenuOptions> => {
      if (!item) return {};
      return {
        size: item.options.size[0],
        temperature: item.options.temperature?.[0] ?? null,
      };
    },

    /**
     * 모든 메뉴 카테고리 반환
     */
    getCategories: () => menuCategories,
  };
}
