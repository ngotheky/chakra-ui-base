import { useCallback } from 'react';
import useAppState from './useAppState';

function useSearchPanel() {
  const { searchPanel, setAppState } = useAppState();

  const onOpen = useCallback(() => setAppState({ searchPanel: true }), [setAppState]);
  const onClose = useCallback(() => setAppState({ searchPanel: false }), [setAppState]);

  return {
    isOpen: searchPanel,
    onOpen,
    onClose,
  };
}

export default useSearchPanel;
