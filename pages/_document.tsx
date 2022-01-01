import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="/images/favicon.png"
            type="image/x-icon"
          />
          <meta
            name="description"
            content="I am a 16 years old full stack Web Developer"
          />
          <meta
            property="og:description"
            content="I am a 16 years old full stack Web Developer"
          />
          <meta property="og:image" content="/images/favicon.png" />
          <meta property="theme-color" content="#000000" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
