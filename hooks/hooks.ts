export const useRouteData = (routeId: string) => {

  if (typeof window != 'undefined') {
    const pathArray = window.location.pathname.split('/'); // Divide la URL por las barras
    const idIndex = pathArray.indexOf(routeId); // Busca la posición del routeId en la URL

    if (idIndex !== -1 && idIndex + 1 < pathArray.length) {
      // Si el routeId está presente y hay al menos un segmento después, devuelve ese segmento
      return pathArray[idIndex + 1];
    }
  }
  return undefined; // Si no se encuentra el routeId o no hay un segmento después, devuelve undefined
};