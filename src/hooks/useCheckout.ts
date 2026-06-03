/**
 * useCheckout Hook
 * 
 * 주요 Hook 함수 #2: useCheckout
 * 
 * 필요성:
 * - 결제 프로세스 상태 관리 (method, pin, processing)
 * - 결제 단계 전환 로직 캡슐화
 * - useEffect로 checkout 열림/닫힘 상태에 따른 리셋 처리
 * 
 * 사용 예:
 * const { step, method, handlePay } = useCheckout();
 */

import { useEffect, useState } from 'react';

interface CheckoutState {
  step: 'method' | 'confirm' | 'success';
  method: string | null;
  pin: string;
  processing: boolean;
  orderNumber: string;
}

export function useCheckout(isOpen: boolean) {
  const [state, setState] = useState<CheckoutState>({
    step: 'method',
    method: null,
    pin: '',
    processing: false,
    orderNumber: '',
  });

  // useEffect: checkout 모달이 닫혔을 때 상태 초기화
  useEffect(() => {
    if (!isOpen) {
      setState({
        step: 'method',
        method: null,
        pin: '',
        processing: false,
        orderNumber: '',
      });
    }
  }, [isOpen]);

  return {
    ...state,
    setStep: (step: CheckoutState['step']) =>
      setState((prev) => ({ ...prev, step })),
    setMethod: (method: string | null) =>
      setState((prev) => ({ ...prev, method })),
    setPin: (pin: string) =>
      setState((prev) => ({ ...prev, pin })),
    setProcessing: (processing: boolean) =>
      setState((prev) => ({ ...prev, processing })),
    setOrderNumber: (orderNumber: string) =>
      setState((prev) => ({ ...prev, orderNumber })),
    reset: () =>
      setState({
        step: 'method',
        method: null,
        pin: '',
        processing: false,
        orderNumber: '',
      }),
  };
}
