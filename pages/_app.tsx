import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SideNavbarLayout from '@components/side-navbar-layout';

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="w-full p-0">
      <SideNavbarLayout>{props.children}</SideNavbarLayout>
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
