import App from 'next/app';
import Layout from '../app/layout';

function MyApp({ Component, pageProps }) {
    return <Layout><Component {...pageProps} /></Layout>;
}

export default App(MyApp);
