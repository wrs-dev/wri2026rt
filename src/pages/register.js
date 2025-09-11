import Head from 'next/head';
import Navigation from '@/components/navigation';
import Banner26RTNoButton from '@/components/banner/wri26RT-no-button'; 
import CventWidget from '@/components/CventWidget-prod';

export async function getStaticProps() {
  return {
    props: {
      title: 'WRI 2026 RT | WRI Rail Transit Conference – Boston, MA || Registration',
      description:
        'Welcome to the WRI 2026 Rail Transit Conference in Boston. Join us for an exciting event focusing on the unique challenges and advancements in the rail transit sector.',
      socialImage: '/wri2026-rt-social.png',
    },
  };
}

export default function Register() {
  return (
    <main className="bg-white">
      <Navigation />
      {/* Simple banner with no "Register" button included */}
      <Banner26RTNoButton />
      {/* Embedded Cvent widget */}
      <CventWidget className="cvt-embed" />
    </main>
  );
}