export function compose<U>(...fns: Function[]) {
  return <E,>(initialArg: any): U =>
    fns.reduceRight((acc, fn) => fn(acc), initialArg);
}
