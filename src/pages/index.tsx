import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Homepage from "../src/views/Homepage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Boilerplate BTPN Aroa</title>
      </Head>
      <Homepage />
    </>
  );
};

export default Home;
