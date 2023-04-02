import type { AppProps } from 'next/app';

// Estilos del proyecto
import '@/view/scss/styles.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
