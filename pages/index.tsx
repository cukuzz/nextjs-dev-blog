import * as React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Sidebar + Navbar Tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* content goes here */}
      <div className="py-32 text-center">
        <div className="text-4xl font-extrabold">Sidebar + Navbar in Tailwind!</div>
      </div>
    </div>
  );
}
