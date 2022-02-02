import React from "react";
import Head from "next/head";

const OfflinePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Offline page</title>
      </Head>
      <h1>This is offline fallback page</h1>
      <h2>When offline, any page route will fallback to this page</h2>
    </>
  );
};

export default OfflinePage;
