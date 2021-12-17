import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="fr">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                    <link rel="icon" type="image/png" href="/code.png" />
                </Head>

                <body className="bg-[#0e0c0b]">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
