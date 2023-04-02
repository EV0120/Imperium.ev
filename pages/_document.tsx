import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='es'>
      <Head>
        <link rel='shortcut icon' href='/images/favicon.png' type='image/x-icon' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='author' content='Esteban Velez' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
