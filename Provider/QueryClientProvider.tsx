'use client';

import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

const ReactQueryProvider = ({ children }: ProviderProps) => {
  const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });
  return (
    <QueryClientProvider client={client}>
      {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
