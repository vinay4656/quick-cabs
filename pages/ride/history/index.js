import React, { useEffect, useState, useContext } from "react";
import DashboardNav from "@/components/Navbar";
import { RideContext } from "@/context/RideContext";

const Dashboard = () => {
  const { currentAccount } = useContext(RideContext);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (!currentAccount) return;
        const response = await fetch(
          `/api/db/getTrips?userWalletAddress=${currentAccount}`
        );
        const data = await response.json();
        setTrips(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [currentAccount]);

  // Dummy trip data for testing
  const dummyTrip = {
    _id: "dummy_trip_1",
    pickup: "456 Elm Street, Springfield",
    dropoff: "739 Main Street, Springfield",
    driverName: "Budi Susanto",
    rating: 4.5,
    price: 12,
    duration: "30 Minutes",
  };

  // Add dummy trip to trips array if no trips are fetched
  if (trips.length === 0) {
    setTrips([dummyTrip]);
  }

  return (
    <div className="min-h-screen font-sans">
      <DashboardNav />

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Transactions List */}
          <h2 className="text-xl font-medium mb-4">Active Orders</h2>
          <div className="space-y-4">
            {trips.map((trip) => (
              <div key={trip._id} className="bg-white rounded-lg shadow p-6 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="material-icons text-blue-500">location_on</span>
                    <p className="text-sm font-semibold ml-2">{trip.pickup}</p>
                  </div>
                  <p className="text-sm text-gray-500">Pickup point</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="material-icons text-blue-500">location_on</span>
                    <p className="text-sm font-semibold ml-2">{trip.dropoff}</p>
                  </div>
                  <p className="text-sm text-gray-500">Destination</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold">{trip.driverName}</p>
                  <p className="text-sm">Rating: {trip.rating} ★</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex flex-col">
                    <p className="text-lg font-bold">${trip.price}</p>
                    <p className="text-sm text-gray-500">Payment Method: e-Wallet</p>
                    <p className="text-sm text-gray-500">Travel Duration: {trip.duration}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="material-icons text-green-500">attach_money</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
