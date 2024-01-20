import { useRouter } from 'next/router';

export const useRouteData = (routeId: string) => {
  const router = useRouter();
  const { query } = router;

  const data = query?.[routeId];

  return data;
};