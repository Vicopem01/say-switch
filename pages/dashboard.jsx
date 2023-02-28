import DashboardLayout from "@/layouts/dashboardLayout/dashboard";

const Dashboard = () => {
  const DASHBOARD_SUMMARY = [
    {
      value: "16,255,039.00",
      count: "4,598",
    },
    {
      value: "35,976,152.54",
      count: "4,598",
    },
    {
      value: "35,976,152.54",
      count: "6,100",
    },
    {
      value: "35,976,152.54",
      count: "10,590",
    },
  ];

  return (
    <div>
      <h2 className="title mb-s3">Dashboard</h2>
      <div className="grid grid-cols-4 gap-4">
        {DASHBOARD_SUMMARY.map((stat, i) => (
          <div className="bg-white border border-[#CCE6D7] p-s2" key={i}>
            <p className="text-green text-lg">{stat.value}</p>
            <p className="text-sm mt-s0 mb-s3">
              Today&#39;s Tx Value/Count: {stat.count}
            </p>
            <p className="text-green-light text-xs">View Analysis</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Dashboard.getLayout = DashboardLayout;
export default Dashboard;
