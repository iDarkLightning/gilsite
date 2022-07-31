import type { AppProps } from "next/app";
import "@fontsource/roboto-mono";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
