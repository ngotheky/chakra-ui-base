import { useCallback } from 'react';
import useAppState, { DEFAULT_ALERT_MODAL, IAlertModal } from './useAppState';

function useAlertModal() {
  const { alertModal, setAppState } = useAppState();

  const onOpen = (props: Omit<IAlertModal, 'isShowing'>) => setAppState({ alertModal: { ...props, isShowing: true } });

  const onClose = useCallback(() => setAppState({ alertModal: DEFAULT_ALERT_MODAL }), [setAppState]);

  return {
    alertModal,
    onOpen,
    onClose,
  };
}

export default useAlertModal;
