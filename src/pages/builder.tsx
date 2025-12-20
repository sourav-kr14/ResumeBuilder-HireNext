import type { NextPage } from 'next';
import Head from 'next/head';
import BuilderLayout from '@/modules/builder/BuilderLayout';

const BuilderPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HireNext Resume Builder</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" type="image/png" href="hero.jpg" />
      </Head>

      <BuilderLayout />
    </div>
  );
};

export default BuilderPage;
