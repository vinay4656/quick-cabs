import { client } from "@/lib/sanity";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      return handlePost(req, res);
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function handlePost(req, res) {
  try {
    // First, create or verify user document exists
    const userDoc = {
      _type: "users",
      _id: req.body.userWalletAddress,
      walletAddress: req.body.userWalletAddress,
    };

    // Create user if doesn't exist
    await client.createIfNotExists(userDoc);

    // Then create the trip document
    const tripDoc = {
      _type: "trips",
      _id: `${req.body.userWalletAddress}-${Date.now()}`,
      pickup: req.body.pickupLocation,
      dropoff: req.body.dropoffLocation,
      rideTimestamp: new Date(Date.now()).toISOString(),
      price: parseFloat(req.body.price),
      rideCategory: req.body.selectedRide.service,
      passenger: {
        _key: `passenger-${req.body.userWalletAddress}-${Date.now()}`,
        _ref: req.body.userWalletAddress,
        _type: "reference",
      },
    };

    await client.create(tripDoc);

    res.status(200).send({ message: "success" });
  } catch (error) {
    console.error("Error saving trip:", error);
    res.status(500).send({ message: "error", data: error.message });
  }
}
