import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import PageTitle from "../../../components/layout/PageTitle";
import { ManajemenSurat } from "../../../components/pages/data/Surat";
import { useAuth } from "../../../lib/authContext";

const UKMSurat: NextPage = () => {
  const { user, loading } = useAuth();

  return (
    <>
      <Head>
        <title>Manajemen Surat</title>
      </Head>
      <PageTitle title="Manajemen Surat" />
      <ManajemenSurat />
    </>
  );
};

export default UKMSurat;
