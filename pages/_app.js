import { UserContext } from "@/context";
import "@/styles/globals.css";
import Head from "next/head";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }) => {
  const [user, setUser] = useState({});

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Head>
        <title>SaySwitch</title>
        <meta name="description" content="Say Switch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout Component={Component} pageProps={pageProps} />
      </UserContext.Provider>
    </>
  );
};

const Layout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default App;
