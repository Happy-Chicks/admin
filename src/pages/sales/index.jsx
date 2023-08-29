import React from "react";
import Head from "next/head";
import TopBar from "../../components/topbar";
import SortTable from "../../components/table/sort-table";
import { tableHeadings } from "../../constants/tableHeadings";
import { useMemo, useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { salesAxios } from "../../tools/libraries/axios";
import { ENDPOINTS } from "../../constants/endpoints";

function Sales() {
  const { data: session } = useSession();

  const [sales, setSales] = useState([]);
  const token = session?.user?.accessToken;
  console.log(token);

  useEffect(() => {
    // if (!session) {
    //   signIn();
    // }
    if (session) getSales();
  }, [session]);

  const getSales = () => {
    salesAxios
      .get(ENDPOINTS.GET_ALL_SALES, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        console.log(result.data);
        setSales(result.data);
      })
      .catch((err) => console(err));
  };

  // const information = [
  //   {
  //     farmerId: 1,
  //     customerName: "Michael Bello",
  //     numberOfSmallCrates: "30",
  //     numberOfMediumCrates: 50,
  //     numberOfLargeCrates: 200,
  //     numberOfExtraLargeCrates: 10,
  //     numberOfJumboCrates: 5,
  //     salesDate: "2022-10-5",
  //     customerPhoneNumber: "+233596466690",
  //     totalPrice: 200,
  //   },
  //   {
  //     farmerId: 1,
  //     customerName: "Michael Bello",
  //     numberOfSmallCrates: 30,
  //     numberOfMediumCrates: 50,
  //     numberOfLargeCrates: 200,
  //     numberOfExtraLargeCrates: 10,
  //     numberOfJumboCrates: 5,
  //     salesDate: "2022-10-5",
  //     customerPhoneNumber: "+233596466690",
  //     totalPrice: 200,
  //   },
  //   {
  //     farmerId: 1,
  //     customerName: "Michael Bello",
  //     numberOfSmallCrates: 30,
  //     numberOfMediumCrates: 50,
  //     numberOfLargeCrates: 200,
  //     numberOfExtraLargeCrates: 10,
  //     numberOfJumboCrates: 5,
  //     salesDate: "2022-10-5",
  //     customerPhoneNumber: "+233596466690",
  //     totalPrice: 200,
  //   },
  // ];

  return (
    <>
      <Head>
        <title>Sales</title>
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
                headings={tableHeadings.saleHeadings}
                data={sales}
                type={"salesBody"}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sales;
