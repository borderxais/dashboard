import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Plus,
  DollarSign,
  ShoppingBag,
  Activity,
  Eye,
  ArrowUpRight,
  MessageSquare,
  Users,
  Video
} from 'lucide-react';
import { AccountsTable } from '../components/dashboard/AccountsTable';
import { LiveStreamTable } from '../components/dashboard/LiveStreamTable';

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState('daily');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header with Time Toggle */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Multi-Shop Dashboard</h1>
          <p className="text-gray-500">Managing all your TikTok shops in one place</p>
        </div>
        <div className="flex items-center gap-6">
          {/* Time Period Toggle */}
          <div className="bg-gray-200 rounded-lg p-1 flex">
            {['Daily', 'Weekly', 'Monthly'].map((period) => (
              <button
                key={period}
                onClick={() => setTimeFrame(period.toLowerCase())}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                  ${timeFrame === period.toLowerCase() 
                    ? 'bg-purple-600 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'}`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {/* Total Sales */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-purple-100 rounded-lg mb-3">
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold mb-1 text-gray-800">$458.9K</p>
            <p className="text-sm text-gray-500">Total Sales</p>
            <div className="flex items-center text-purple-600 mt-2">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm">+23.5%</span>
            </div>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-gray-100 rounded-lg mb-3">
              <ShoppingBag className="h-8 w-8 text-gray-600" />
            </div>
            <p className="text-3xl font-bold mb-1 text-gray-800">12.8K</p>
            <p className="text-sm text-gray-500">Total Orders</p>
            <div className="flex items-center text-purple-600 mt-2">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm">+18.2%</span>
            </div>
          </div>
        </div>

        {/* Total Video Views */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-purple-100 rounded-lg mb-3">
              <Eye className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold mb-1 text-gray-800">2.45M</p>
            <p className="text-sm text-gray-500">Video Views</p>
            <div className="flex items-center text-purple-600 mt-2">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm">+24.8%</span>
            </div>
          </div>
        </div>

        {/* Total Comments */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-gray-100 rounded-lg mb-3">
              <MessageSquare className="h-8 w-8 text-gray-600" />
            </div>
            <p className="text-3xl font-bold mb-1 text-gray-800">245K</p>
            <p className="text-sm text-gray-500">Total Comments</p>
            <div className="flex items-center text-purple-600 mt-2">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm">+15.3%</span>
            </div>
          </div>
        </div>

        {/* Active Shops */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-purple-100 rounded-lg mb-3">
              <Store className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold mb-1 text-gray-800">3</p>
            <p className="text-sm text-gray-500">Active Shops</p>
            <div className="flex items-center text-purple-600 mt-2">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm">+2 this month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Performance */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Shop Performance</h2>
          <div className="flex gap-2">
            <Link 
              to="/content"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              <Video className="h-4 w-4" /> Create Video
            </Link>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Plus className="h-4 w-4" /> Add Shop
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 text-gray-600">Shop Name</th>
                <th className="text-right p-3 text-gray-600">Today's Sales</th>
                <th className="text-right p-3 text-gray-600">Orders</th>
                <th className="text-right p-3 text-gray-600">Growth</th>
                <th className="text-left p-3 text-gray-600">Top Products</th>
                <th className="text-left p-3 text-gray-600">Inventory Health</th>
                <th className="text-right p-3 text-gray-600">Status</th>
                <th className="text-right p-3 text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { 
                  id: 1, 
                  name: "Fashion Store", 
                  sales: 12500, 
                  orders: 320, 
                  growth: 15.2, 
                  status: "active",
                  topProducts: ["Summer Dress", "Denim Jacket"],
                  inventoryHealth: {
                    status: "warning",
                    message: "2 items low"
                  }
                },
                { 
                  id: 2, 
                  name: "Beauty Shop", 
                  sales: 9800, 
                  orders: 280, 
                  growth: -5.8, 
                  status: "active",
                  topProducts: ["Face Cream", "Lipstick Set"],
                  inventoryHealth: {
                    status: "healthy",
                    message: "All stocked"
                  }
                },
                { 
                  id: 3, 
                  name: "Electronics Hub", 
                  sales: 15600, 
                  orders: 410, 
                  growth: 28.4, 
                  status: "active",
                  topProducts: ["Wireless Earbuds", "Phone Case"],
                  inventoryHealth: {
                    status: "critical",
                    message: "5 items out"
                  }
                }
              ].map(shop => (
                <tr key={shop.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{shop.name}</td>
                  <td className="text-right p-3">${shop.sales.toLocaleString()}</td>
                  <td className="text-right p-3">{shop.orders}</td>
                  <td className="text-right p-3">
                    <span className={shop.growth >= 0 ? "text-green-600" : "text-red-600"}>
                      {shop.growth >= 0 ? "+" : ""}{shop.growth}%
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex flex-col gap-1">
                      {shop.topProducts.map((product, index) => (
                        <span key={index} className="text-sm text-gray-600">{product}</span>
                      ))}
                    </div>
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      shop.inventoryHealth.status === 'healthy' ? 'bg-green-100 text-green-800' :
                      shop.inventoryHealth.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {shop.inventoryHealth.message}
                    </span>
                  </td>
                  <td className="text-right p-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      {shop.status}
                    </span>
                  </td>
                  <td className="text-right p-3">
                    <button className="text-sm text-gray-600 hover:text-gray-800">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TikTok Accounts Section */}
      <div className="mb-8">
        <AccountsTable />
      </div>

      {/* Live Stream Management Section */}
      <div className="mb-8">
        <LiveStreamTable />
      </div>
    </div>
  );
};

export default Dashboard;