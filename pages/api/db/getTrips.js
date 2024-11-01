import { client } from "@/lib/sanity";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      return handleGet(req, res);
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function handleGet(req, res) {
  try {
    const { userWalletAddress } = req.query;

    // Build the GROQ query to get all trips for a specific user
    const query = `*[_type == "trips" && passenger._ref == $userWalletAddress] | order(rideTimestamp desc) {
      _id,
      pickup,
      dropoff,
      rideCategory,
      price,
      rideTimestamp,
      passenger->
    }`;

    // Execute the query
    const trips = await client.fetch(query, { userWalletAddress });

    res.status(200).json(trips);
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ message: "error", data: error.message });
  }
}