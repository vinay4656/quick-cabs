import React, { useEffect, useState, useContext } from "react";
import DashboardNav from "@/components/DashboardNav";
import { RideContext } from "@/context/RideContext";

const Dashboard = () => {
  const { currentAccount, connectWallet, currentUser } =
    useContext(RideContext);

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (!currentAccount) return;
        console.log("fetching ride types");
        const response = await fetch(
          `/api/db/getTrips?userWalletAddress=${currentAccount}`
        );
        console.log("response: ", response);

        const data = await response.json();
        console.log("data", data);
        setTrips(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [currentAccount]);
  return (
    <div className="min-h-screen font-sans">
      <DashboardNav />

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Balance Card */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <h2 className="text-gray-600 text-xl mb-4">Total Balance</h2>

              {/* Main Balance */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-normal">02.475</span>
                <span className="text-xl text-gray-500">PYUSD</span>
                <img
                  src="/images/27772.png"
                  alt="PYUSD"
                  className="w-6 h-6 ml-2"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-8 py-3 bg-[#C1F11D] hover:bg-[#A5CD1B] text-gray-800 rounded">
                  <span>Send ↑</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-8 py-3 bg-[#C1F11D] hover:bg-[#A5CD1B] text-gray-800 rounded">
                  <span>Withdraw ↓</span>
                </button>
              </div>
            </div>

            {/* Referral Card */}
            <div className="bg-gradient-to-bl from-[#C1F11D] to-teal-100 text-black rounded-xl p-8">
              <div className="mb-6">
                <p className="text-lg font-semibold">Connect to your wallet</p>
              </div>
              <div className="flex items-center gap-2 bg-white/40 border border-white rounded-lg p-3">
                <span className="flex-grow">
                  {currentAccount}
                </span>
                <button className="p-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Rides Table */}
          <div className="mt-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">All Rides</h2>
              <div className="flex gap-4">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search Ride"
                    className="pl-10 pr-4 py-2 border rounded-lg"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <select className="border rounded-lg px-4 py-2">
                  <option>All Status</option>
                </select>
                <button className="flex items-center gap-2 border rounded-lg px-4 py-2">
                  <span>Export</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg border">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="p-4">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-gray-600">
                      Trip ID
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-gray-600">
                      Ride Type
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-gray-600">
                      Trip Date
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-gray-600">
                      Price (PYUSD)
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-gray-600">
                      Pickup Location
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-gray-600">
                      Drop Location
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trips &&
                    trips.length > 0 &&
                    trips.map((trip) => (
                      <tr key={trip._id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <input type="checkbox" className="rounded" />
                        </td>
                        <td className="p-4 text-sm">{trip._id.slice(-8)}</td>
                        <td className="p-4 text-sm">{trip.rideCategory}</td>
                        <td className="p-4 text-sm text-gray-600">
                          {new Date(trip.rideTimestamp).toLocaleDateString()}
                        </td>
                        <td className="p-4 text-sm text-gray-600">
                          {trip.price ? trip.price.toFixed(5) : "N/A"}
                        </td>
                        <td className="p-4 text-sm text-gray-600">
                          {trip.pickup.length > 25
                            ? trip.pickup.slice(0, 25) + "..."
                            : trip.pickup}
                        </td>
                        <td className="p-4 text-sm text-gray-600">
                          {trip.dropoff.length > 25
                            ? trip.dropoff.slice(0, 25) + "..."
                            : trip.dropoff}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
