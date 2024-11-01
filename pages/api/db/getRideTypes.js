import { client } from "@/lib/sanity";

const query = `*[_type=="rides"]{
  "service": title,
  "iconUrl": icon.asset->url,
  priceMultiplier,
  orderById
}|order(orderById asc)`;

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return handleGet(req, res);
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function handleGet(req, res) {
  try {
    // Add console.log to debug
    console.log('Attempting to fetch from Sanity...');
    const sanityResponse = await client.fetch(query);
    console.log('Sanity response:', sanityResponse);
    
    res.status(200).json({ message: "success", data: sanityResponse });
  } catch (error) {
    console.error('Sanity fetch error:', error);
    res.status(500).json({ message: "error", data: error.message });
  }
}