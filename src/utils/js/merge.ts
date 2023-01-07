export function merge<O extends object>(obj: O) {
  return <K extends object>(obj2: K) => ({
    ...obj2,
    ...obj
  });
}