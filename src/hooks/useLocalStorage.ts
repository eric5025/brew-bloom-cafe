/**
 * useLocalStorage Hook
 * 
 * 주요 Hook 함수 #3: useLocalStorage
 * 
 * 필요성:
 * - 로컬 스토리지와 컴포넌트 상태 동기화
 * - useEffect로 자동 저장/불러오기 처리
 * - useCallback으로 메모이제이션된 setter 제공
 * - 새로운 페이지 방문 시에도 장바구니 데이터 유지 가능
 * 
 * 사용 예:
 * const [favorites, setFavorites] = useLocalStorage('favorites', []);
 */

import { useEffect, useState, useCallback } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // 초기값 설정 (로컬 스토리지 또는 기본값)
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // useEffect: 상태 변경 시 로컬 스토리지에 자동 저장
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  // useCallback: setter 메모이제이션 (불필요한 함수 재생성 방지)
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
      } catch (error) {
        console.warn(`Error in setValue for "${key}":`, error);
      }
    },
    [storedValue],
  );

  return [storedValue, setValue] as const;
}
