import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 7000 },
  { month: "May", sales: 6000 },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Sales Chart */}
      <div className="bg-white shadow-md rounded-lg p-4 col-span-1 md:col-span-3">
        <h2 className="text-xl font-semibold mb-4">Sales Summary</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Orders */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold">Total Orders</h2>
        <p className="text-3xl font-bold">1,240</p>
      </div>

      {/* Revenue */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold">Total Revenue</h2>
        <p className="text-3xl font-bold">$12,340</p>
      </div>

      {/* Profit */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold">Net Profit</h2>
        <p className="text-3xl font-bold text-green-500">$5,680</p>
      </div>
    </div>
  );
};

export default Dashboard;
