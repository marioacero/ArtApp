import { QueryClient } from '@tanstack/react-query';
import { logger } from 'src/utils/logger';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: err => {
        if (__DEV__) {
          logger.error(err, 'Error with query');
        }
      },
    },
    mutations: {
      onError: err => {
        if (__DEV__) {
          logger.error(err, 'Error with mutation');
        }
      },
    },
  },
});
