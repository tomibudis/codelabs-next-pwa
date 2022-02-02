import "../src/styles/globals.scss";

import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  const isDevEnv = process.env.NEXT_PUBLIC_ENV === "development";
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      {isDevEnv && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default App;
