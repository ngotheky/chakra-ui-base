import { useCallback } from 'react';
import useAppState from './useAppState';

function useDrawerMenu() {
  const { drawerMenuOpen, setAppState } = useAppState();

  const onOpen = useCallback(() => setAppState({ drawerMenuOpen: true }), [setAppState]);
  const onClose = useCallback(() => setAppState({ drawerMenuOpen: false }), [setAppState]);

  return {
    isOpen: drawerMenuOpen,
    onOpen,
    onClose,
  };
}

export default useDrawerMenu;
