import { useCallback } from 'react';
import { createGlobalState } from 'react-use';
import { I18Key } from 'utils/i18next';

export interface IAlertModal {
  isShowing: boolean;
  title: string;
  message: string;
  close?(): void;
  confirm?(): void;
  closeButton?: I18Key;
  confirmButton?: I18Key;
}

interface AppState {
  windowWidth: number;
  sidebarCollapsed: boolean;
  drawerMenuOpen: boolean;
  searchPanel: boolean;
  alertModal: IAlertModal;
}

interface AppStateWithMethods extends AppState {
  setAppState: (state: Partial<AppState>) => void;
  toggleSidebar: () => void;
}

export const DEFAULT_ALERT_MODAL = {
  isShowing: false,
  title: '',
  message: '',
};

const appState = createGlobalState<AppState>({
  windowWidth: window.innerWidth || window.outerWidth,
  sidebarCollapsed: true,
  drawerMenuOpen: false,
  searchPanel: false,
  alertModal: DEFAULT_ALERT_MODAL,
});

function useAppState(): AppStateWithMethods {
  const [state, setState] = appState();

  const setAppState = useCallback(
    (args: Partial<AppState>) => {
      setState((prev) => ({ ...prev, ...args }));
    },
    [setState],
  );

  const toggleSidebar = useCallback(() => {
    setState((prev) => ({ ...prev, sidebarCollapsed: !prev.sidebarCollapsed }));
  }, [setState]);

  return {
    ...state,
    setAppState,
    toggleSidebar,
  };
}

export default useAppState;
