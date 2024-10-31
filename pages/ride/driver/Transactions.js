import React from "react";
import DashboardNav from "../../../components/DashboardNav";

const Transactions = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <DashboardNav />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Transactions</h1>
              <p className="text-gray-600">Send and Receive Transactions Table List.</p>
            </div>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download</span>
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200">All</button>
              <button className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100">Sent</button>
              <button className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100">Receive</button>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border rounded-full w-64"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="px-4 py-2 rounded-full border flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-lg shadow">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-gray-600">Name/Business</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-600">Date</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-600">Invoice ID</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-600">Fee</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-600">Balance</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-600">Status</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">S</div>
                      <div>
                        <div className="font-medium">Stripe</div>
                        <div className="text-sm text-gray-500">Send</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div>22 Jan 2024</div>
                    <div className="text-sm text-gray-500">at 08:00 AM</div>
                  </td>
                  <td className="p-4">ADX08125</td>
                  <td className="p-4">$0.00</td>
                  <td className="p-4 text-green-600">+$300</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">Success</span>
                  </td>
                  <td className="p-4">
                    <button className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md border">
                      Archive
                    </button>
                  </td>
                </tr>
                {/* Add more transaction rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Transactions;