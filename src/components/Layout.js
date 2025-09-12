import React from 'react';
import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Layout = ({ children, title, description, socialImage }) => {
  // Convert relative image path to absolute URL for social media
  const absoluteImageUrl = socialImage && !socialImage.startsWith('http') 
    ? `https://wri2026rt.wheel-rail-seminars.com${socialImage}`
    : socialImage;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {socialImage && (
          <>
            <meta property="og:image" content={absoluteImageUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://wri2026rt.wheel-rail-seminars.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={absoluteImageUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
          </>
        )}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;