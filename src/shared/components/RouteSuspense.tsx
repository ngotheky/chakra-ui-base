import { PropsWithChildren, Suspense } from 'react';
import RouteLoading from './RouteLoading';

function RouteSuspense({ children }: PropsWithChildren<{}>) {
  return <Suspense fallback={<RouteLoading />}>{children}</Suspense>;
}
export default RouteSuspense;
