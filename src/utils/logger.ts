export const logger = {
  debug: (...args: any) => {
    if (__DEV__) {
      const textArg: string = args[0];
      console.log(`DEBUG ====> ${textArg}`);
      if (args[1]) {
        for (const arg of args) {
          if (arg !== textArg) {
            console.log('DEBUG DATA ====>', arg);
          }
        }
      }
    }
  },
  error: (error: any, text: string) => {
    if (__DEV__) {
      console.log(`ERROR ====> ${text}`, error);
    } else {
      console.log('send this to crashlitycs');
    }
  },
};
