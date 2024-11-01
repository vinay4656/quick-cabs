export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      return handlePost(req, res);
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function handlePost(req, res) {
  const mapboxUrl = `${process.env.NEXT_PUBLIC_MAPBOX_DIRECTIONS_API_URL}/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json();
    console.log(data, "data from getDuration");

    res.status(200).send({ message: "success", data: data.routes[0].duration });
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}