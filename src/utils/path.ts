import queryString from 'query-string';

/**
 *
 * @param route present for route path. Ex: /collections/:id/:address
 * @param params params to pass in route
 * @param qs query string add to route
 */
export function buildHref(
  route: string,
  params?: Record<string, string | number>,
  qs?: Record<string, string | number>,
) {
  if (params && qs) {
    const url = Object.keys(params).reduce((acc, key) => {
      acc = acc.replace(`:${key}`, params[key] as string);
      return acc;
    }, route);
    return `${url}?${queryString.stringify(qs)}`;
  }
  if (!params && qs) {
    return `${route}?${queryString.stringify(qs)}`;
  }
  if (!params) return route;
  return Object.keys(params).reduce((acc, key) => {
    acc = acc.replace(`:${key}`, params[key] as string);
    return acc;
  }, route);
}

export function isHomePage() {
  return window.location.pathname === '/';
}
