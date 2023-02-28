"use client";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { autoLogout } from "@/hoc";
import FullscreenLoader from "@/public/loaders/fullscreen";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Dashboard = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const validToken = autoLogout();

  useEffect(() => {
    if (!validToken) router.push("/login");
    else setIsLoading(false);
  }, []);

  return isLoading ? (
    <FullscreenLoader />
  ) : (
    <div className="h-screen w-full">
      <div className="fixed top-0 right-0 w-full z-10">
        <Header />
      </div>
      <div className="flex min-h-[calc(100%-70px)] mt-[70px]">
        <div className="w-[247px] fixed left-0 top-[70px] bg-white h-full">
          <Sidebar />
        </div>
        <div className="bg-[#F8F8F8] py-s4 px-s3 w-[calc(100%-247px)] h-full ml-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

const DashboardLayout = (page) => <Dashboard>{page}</Dashboard>;
export default DashboardLayout;
