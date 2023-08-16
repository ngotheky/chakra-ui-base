import { useCallback } from 'react';
import { isHomePage } from 'utils/path';
import useAppState from './useAppState';

function useSidebar() {
  const { sidebarCollapsed, setAppState, toggleSidebar } = useAppState();
  const autoCheckHomePage = useCallback(() => setAppState({ sidebarCollapsed: !isHomePage() }), [setAppState]);

  return {
    collapsed: sidebarCollapsed,
    autoCheckHomePage,
    toggle: toggleSidebar,
  };
}

export default useSidebar;
