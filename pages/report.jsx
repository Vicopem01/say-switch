import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import DashboardLayout from "@/layouts/dashboardLayout/dashboard";
import Search from "@/public/icons/search.svg";
import { getPaginatedTransactions } from "@/services";
import { useEffect, useState } from "react";

const Report = () => {
  const [data, setData] = useState([]);
  const [payload, setPayload] = useState({
    startDate: "",
    endDate: "",
    terminalId: "",
    stan: "",
    rrn: "",
  });

  const getTransactions = async () => {
    try {
      const res = await getPaginatedTransactions();
      setData(res.data.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      {/* top component */}
      <div className="flex">
        <p className="w-1/2">Merchant Terminal Report</p>
        <div className="w-1/2 bg-white p-s3">
          <div className="grid grid-cols-2 gap-s2">
            <Input
              label=""
              type="date"
              onChange={(event) =>
                setPayload({ ...payload, email: event.target.value })
              }
            />
            <Input label="" type="date" />
            <Input label="Terminal" />
            <Input label="STAN" />
            <Input label="RRN" />
          </div>
          <br />
          <hr />
          <br />
          <div className="w-[100px] ml-auto">
            <Button classes="flex items-center">
              <Search />
              <span className="pl-s1 text-white">Search</span>
            </Button>
          </div>
        </div>
      </div>

      {/* bottom component */}
      <div className="mt-s6">
        <p className="font-medium">67,198, 260.05 Transactions</p>
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
            {data.map((item, i) => (
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

Report.getLayout = DashboardLayout;
export default Report;
