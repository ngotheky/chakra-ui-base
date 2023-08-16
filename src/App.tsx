import Router from 'Router';
import { Suspense, useEffect } from 'react';
import { loadLocaleLanguage } from 'utils/i18next';

function App() {
  useEffect(() => {
    loadLocaleLanguage();
  }, []);

  return (
    <Suspense>
      <Router />
    </Suspense>
  );
}

export default App;
