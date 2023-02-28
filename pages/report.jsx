import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import DashboardLayout from "@/layouts/dashboardLayout/dashboard";
import Search from "@/public/icons/search.svg";

const Report = () => {
  return (
    <div>
      {/* top component */}
      <div className="flex">
        <p className="w-1/2">Merchant Terminal Report</p>
        <div className="w-1/2 bg-white p-s3">
          <div className="grid grid-cols-2 gap-s2">
            <Input label="" type="date" />
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
        <div className="flex justify-between">
          <p className="font-medium">67,198, 260.05 Transactions</p>
          <select className="p-s1">
            <option>Action</option>
          </select>
        </div>
        <table className="bg-white w-full mt-s3 text-center">
          <thead>
            <tr>
              <th>Created</th>
              <th>Term ID</th>
              <th>Mer. ID</th>
              <th>PAN</th>
              <th>Amount</th>
              <th>Description</th>
              <th>STAN</th>
              <th>Resp</th>
              <th>Resp desc</th>
              <th>esp</th>
              <th>Ref</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Created</td>
              <td>Term ID</td>
              <td>Mer. ID</td>
              <td>PAN</td>
              <td>Amount</td>
              <td>Description</td>
              <td>STAN</td>
              <td>Resp</td>
              <td>Resp desc</td>
              <td>esp</td>
              <td>Ref</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Report.getLayout = DashboardLayout;
export default Report;
