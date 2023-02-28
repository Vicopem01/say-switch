import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

const Dashboard = ({ children }) => {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="flex min-h-[calc(100%-70px)]">
        <div className="min-w-[247px]">
          <Sidebar />
        </div>
        <div className="bg-[#F8F8F8] py-s4 px-s3 w-[calc(100%-247px)] h-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

const DashboardLayout = (page) => <Dashboard>{page}</Dashboard>;
export default DashboardLayout;
