import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Jobcenter.mn</title>
        <meta name="description" content="Welcome to Jobcenter.mn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Your page content */}
      <main>
        {/* ... */}
      </main>
    </>
  )
}
