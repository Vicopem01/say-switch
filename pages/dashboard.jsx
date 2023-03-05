import DashboardLayout from "@/layouts/dashboardLayout/dashboard";
import { getDashboardData, getPaginatedTransactions } from "@/services";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState({});
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getDashboardData();
      setData({
        transactionsTodayCount: res.data.data.transactionsTodayCount,
        transactionsTodayValue: res.data.data.transactionsTodayValue,
        transactionsThisWeekCount: res.data.data.transactionsThisWeekCount,
        transactionsThisWeekValue: res.data.data.transactionsThisWeekValue,
        transactionsThisMonthCount: res.data.data.transactionsThisMonthCount,
        transactionsThisMonthValue: res.data.data.transactionsThisMonthValue,
        transactionsThisYearCount: res.data.data.transactionsThisYearCount,
        transactionsThisYearValue: res.data.data.transactionsThisYearValue,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getTransactions = async () => {
    try {
      const res = await getPaginatedTransactions();
      setTableData(res.data.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllData = async () =>
    await Promise.all([fetchData(), getTransactions()]);

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div>
      {/* top component */}
      <h2 className="title mb-s3">Dashboard</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white border border-[#CCE6D7] p-s2">
          <p className="text-green text-lg">{data.transactionsTodayValue}</p>
          <p className="text-sm mt-s0 mb-s3">
            Today&#39;s Tx Value/Count: {data.transactionsTodayCount}
          </p>
          <p className="text-green-light text-xs">View Analysis</p>
        </div>
        <div className="bg-white border border-[#CCE6D7] p-s2">
          <p className="text-green text-lg">{data.transactionsThisWeekValue}</p>
          <p className="text-sm mt-s0 mb-s3">
            Today&#39;s Tx Value/Count: {data.transactionsThisWeekCount}
          </p>
          <p className="text-green-light text-xs">View Analysis</p>
        </div>
        <div className="bg-white border border-[#CCE6D7] p-s2">
          <p className="text-green text-lg">
            {data.transactionsThisMonthValue}
          </p>
          <p className="text-sm mt-s0 mb-s3">
            Today&#39;s Tx Value/Count: {data.transactionsThisMonthCount}
          </p>
          <p className="text-green-light text-xs">View Analysis</p>
        </div>
        <div className="bg-white border border-[#CCE6D7] p-s2">
          <p className="text-green text-lg">{data.transactionsThisYearValue}</p>
          <p className="text-sm mt-s0 mb-s3">
            Today&#39;s Tx Value/Count: {data.transactionsThisYearCount}
          </p>
          <p className="text-green-light text-xs">View Analysis</p>
        </div>
      </div>

      {/* table component */}

      <div className="mt-s6">
        <p className="font-medium">Transactions</p>
        <table className="bg-white w-full mt-s3 text-center table">
          <thead>
            <tr>
              <th>Created</th>
              <th>Term ID</th>
              <th>Mer. ID</th>
              <th>PAN</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Description</th>
              <th>STAN</th>
              <th>Resp</th>
              <th>esp</th>
              <th>Ref</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr key={i}>
                <td>
                  {new Date(item.created).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td>{item.terminalId}</td>
                <td>{item.merchantId}</td>
                <td>{item.PAN}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.description}</td>
                <td>{item.STAN}</td>
                <td>{item.responseDescription}</td>
                <td>{item.esp}</td>
                <td>{item.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Dashboard.getLayout = DashboardLayout;
export default Dashboard;
