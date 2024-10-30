import React from "react";
import DashboardNav from "../../../components/DashboardNav";

const Dashboard = () => {
  return (
    <div className="min-h-screen font-sans">
      <DashboardNav />
      
      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Earnings and Actions */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="bg-gray-800 text-white p-6 rounded-md shadow-md w-full md:w-auto">
              <p className="text-lg">TOTAL EARNINGS</p>
              <h2 className="text-3xl font-bold">24.00 PYUSD</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md shadow hover:bg-gray-50">Send</button>
              <button className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md shadow hover:bg-gray-50">Receive</button>
              <button className="bg-lime-400 text-black px-4 py-2 rounded-md shadow font-bold hover:bg-lime-500">Withdraw To Bank</button>
            </div>
          </div>

          {/* Order Table */}
          <div className="mt-8 bg-white shadow-lg rounded-md overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trip Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trip Id</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pickup Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drop Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-400">Pending</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21-03-2022</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06:00PM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1596</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Krishna Reddy</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#32, Satya Loi...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Wework, Embassy Tec...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.0067 PYUSD</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="bg-green-100 hover:bg-green-300 text-green-700 px-2 py-1 rounded">Accept</button>
                    <button className="bg-red-100 hover:bg-red-300 text-red-700 px-2 py-1 rounded ml-2">Cancel</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-400">Cancled</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21-03-2022</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06:00PM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1596</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Shiva Kumar</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#32, Satya Loi...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Wework, Embassy Tec...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.0067 PYUSD</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="bg-gray-100 hover:bg-gray-800 hover:text-white text-gray-600 px-2 py-1 rounded">Help</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-500">Completed</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21-03-2022</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06:00PM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1596</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">varun </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#32, Satya Loi...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Wework, Embassy Tec...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.0067 PYUSD</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  </td>
                </tr>
                {/* Additional rows can be added similarly */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
