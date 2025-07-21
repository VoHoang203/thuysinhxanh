import { Users, Package, ShoppingCart, DollarSign } from "lucide-react";
import RevenueChart from "./components/revenue-chart"

const StatCard = ({ title, value, icon, change, isPositive }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border">
    <div className="flex flex-row items-center justify-between pb-2">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      {icon}
    </div>
    <div>
      <div className="text-2xl font-bold">{value}</div>
      {change && (
        <p
          className={`text-xs ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </p>
      )}
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <StatCard
          title="Total Users"
          value="15"
          icon={<Users className="h-4 w-4 text-gray-400" />}
        />
        <StatCard
          title="Total Products"
          value="25"
          icon={<Package className="h-4 w-4 text-gray-400" />}
        />
        <StatCard
          title="Total Orders"
          value="35"
          icon={<ShoppingCart className="h-4 w-4 text-gray-400" />}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <StatCard
          title="Daily Revenue"
          value="$213.00"
          icon={<DollarSign className="h-4 w-4 text-gray-400" />}
          change="-15.20% since yesterday"
          isPositive={false}
        />
        <StatCard
          title="Monthly Revenue"
          value="$561.22"
          icon={<DollarSign className="h-4 w-4 text-gray-400" />}
          change="+25.50% since last month"
          isPositive={true}
        />
        <StatCard
          title="Yearly Revenue"
          value="$1,156.78"
          icon={<DollarSign className="h-4 w-4 text-gray-400" />}
          change="+20.10% since last year"
          isPositive={true}
        />
      </div>
      <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border">
        <input
          type="date"
          defaultValue="2025-07-13"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <input
          type="date"
          defaultValue="2025-07-13"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
          <option>Day</option>
          <option>Week</option>
          <option>Month</option>
          <option>Year</option>
        </select>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
          Calculate
        </button>
      </div>
      <RevenueChart />
    </div>
  );
}
