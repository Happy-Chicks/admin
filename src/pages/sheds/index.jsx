import React from "react";
import Head from "next/head";
import TopBar from "../../components/topbar";
import SortTable from "../../components/table/sort-table";
import { shedHeadings } from "../../constants/tableHeadings";
import { tableHeadings } from "./../../constants/tableHeadings";
import { useMemo, useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { ENDPOINTS } from "../../constants/endpoints";
import { shedAxios } from "../../tools/libraries/axios";

function Sheds() {
  const { data: session } = useSession();

  const [sheds, setSheds] = useState([]);

  const token = session?.user?.accessToken;
  console.log(token);
  useEffect(() => {
    // if (!session) {
    //   signIn();
    // }
    if (session) getSheds();
  }, [session]);

  const getSheds = () => {
    shedAxios
      .get(ENDPOINTS.GET_ALL_SHEDS, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        console.log(result.data);
        setSheds(result.data);
      })
      .catch((err) => console.log(err));
  };

  const information = [
    {
      farmerId: "#2333",
      numberOfBirds: 500,
      dailyFeedQuantity: 300,
    },
    {
      farmerId: "#2333",
      numberOfBirds: 500,
      dailyFeedQuantity: 300,
    },
  ];
  return (
    <>
      <Head>
        <title>Sheds</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen">
        <div className="w-full h-full ">
          <div className="w-full h-[10%] ">
            <TopBar />
          </div>
          <div className="w-full h-[87%] overflow-y-scroll mt-[1.5%] p-20">
            <div className="h-full">
              <SortTable
                headings={tableHeadings.shedHeadings}
                // body={shedBody.request}
                data={sheds}
                type={"shedBody"}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sheds;
