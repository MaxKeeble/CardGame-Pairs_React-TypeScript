
export function addEventListenerWithDispose(element: any, eventName: string, handler: (e: React.SyntheticEvent<any>) => void) {
  element.addEventListener(eventName, handler);
  return () => element.removeEventListener(eventName, handler);
}