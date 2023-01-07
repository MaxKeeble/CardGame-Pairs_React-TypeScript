export function classNames(...args: any[]) {
  let result = '';
  
  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
      if (typeof args[i] !== 'object') {
        result += ' ' + args[i];
      }
      else {
        for (const key in args[i]) {
          if (args[i][key]) result += ' ' + key;
        }
      }
    }
  }
  return result.trim();
}