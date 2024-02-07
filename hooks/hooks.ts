export const getTokenFromLocalStorage = (): string | null => {

  if (typeof window !== 'undefined') {

    const token = localStorage.getItem('token');
    return token;
  }
  return null;
};

export const useRouteData = (routeId: string): string | null => {

  const token = getTokenFromLocalStorage();

  return token;
};