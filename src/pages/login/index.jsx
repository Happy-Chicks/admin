import React from "react";
import Head from "next/head";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  };

  const handleSubmit = async () => {
    console.log(`${form.password} ${form.email}`);
    const { status, ok } = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    console.log(status, ok);
    if (ok) {
      // setloading(false);
      router.push({ pathname: "/" });
    } else {
      // setloading(false);
      // addToast("Invalid credentials", {
      //   appearance: "error",
      //   autoDismiss: true,
      // });
    }
    // .then((result) => {
    //   console.log(result);
    //   setloading(false);
    // });
  };

  return (
    <>
      <Head>
        <title>Sales</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen bg-white">
        <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 border shadow-2xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto h-16 w-auto"
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                  type="submit"
                  className="flex w-full justify-center rounded-xl bg-ShedBackground  px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
