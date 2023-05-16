import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getAllPeminjaman,
  IPeminjamanData,
} from "../../../firebase/peminjaman";
import { peminjamanMonthly, peminjamanRecap } from "../../../lib/dashboard";
import VerticalBarChart from "../../charts/vertical-bar/VerticalBarChart";

export default function UKMDashboard(props: any) {
  const [peminjamanData, setPeminjamanData] = useState<IPeminjamanData[]>([]);
  const [suratData, setSuratData] = useState([]);

  const { diproses, ditolak, disetujui } = peminjamanRecap(peminjamanData);

  useEffect(() => {
    (async () => {
      setPeminjamanData(await getAllPeminjaman("UKM"));
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard UKM</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <Link href={"/ukm/peminjaman/create"} className="col-span-2">
          <div className="flex flex-col h-full shadow-sm bg-gray-100 rounded-lg p-5 hover:bg-gray-200 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>

            <h2 className="mt-2 text-lg font-semibold">Buat Peminjaman</h2>
            <p className="text-sm">
              Ajukan Peminjaman Tempat tempat baru untuk kegiatan kemahasiswaan
            </p>
          </div>
        </Link>

        <Link href={"/peminjaman/kalender"} className="col-span-2">
          <div className="flex flex-col h-full shadow-sm bg-gray-100 rounded-lg p-5 hover:bg-gray-200 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>

            <h2 className="mt-2 text-lg font-semibold">Kalender Peminjaman</h2>
            <p className="text-sm">
              Lihat jadwal kegiatan peminjaman tempat yang telah diajukan
            </p>
          </div>
        </Link>

        <Link href={"/ukm/peminjaman"} className="col-span-2 lg:col-span-1">
          <div className="flex flex-col shadow-sm bg-gray-100 rounded-lg p-5 hover:bg-gray-200 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
            <h2 className="mt-2 text-lg font-semibold">Peminjaman Tempat</h2>
            <div className="flex items-center justify-between">
              <p className="text-md">Diproses</p>
              <p className="text-md font-semibold">{diproses ?? 0}</p>
            </div>

            <div className="flex items-center justify-between ">
              <p className="text-md">Ditolak</p>
              <p className="text-md font-semibold">{ditolak ?? 0}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-md">Disetujui</p>
              <p className="text-md font-semibold">{disetujui ?? 0}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-md">Total</p>
              <p className="text-md font-semibold">
                {peminjamanData.length ?? 0}
              </p>
            </div>
          </div>
        </Link>

        <Link href="/" className="col-span-2 lg:col-span-1">
          <div className="flex flex-col shadow-sm bg-gray-100 rounded-lg p-5 hover:bg-gray-200 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <h2 className="mt-2 text-lg font-semibold">Surat Menyurat</h2>
            <div className="flex items-center justify-between">
              <p className="text-md">Diproses</p>
              <p className="text-md font-semibold">{suratData.length ?? 0}</p>
            </div>

            <div className="flex items-center justify-between ">
              <p className="text-md">Ditolak</p>
              <p className="text-md font-semibold">{suratData.length ?? 0}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-md">Disetujui</p>
              <p className="text-md font-semibold">{suratData.length ?? 0}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-md">Total</p>
              <p className="text-md font-semibold">{suratData.length ?? 0}</p>
            </div>
          </div>
        </Link>

        <div className="col-span-2 bg-gray-100 p-5">
          <VerticalBarChart
            title={"Data Permohonan dan Surat"}
            dataPermohonan={peminjamanMonthly(peminjamanData)}
            dataSurat={[]}
          />
          ``
        </div>
      </div>
    </>
  );
}
