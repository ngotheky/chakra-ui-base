import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import theme from 'configs/theme';
import { createBrowserHistory } from 'history';
import { History } from '@remix-run/router';

export const history = createBrowserHistory();
export const queryClient = new QueryClient();

const Providers: FC<PropsWithChildren<{}>> = ({ children }) => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <HistoryRouter history={history as unknown as History}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </HistoryRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default Providers;
