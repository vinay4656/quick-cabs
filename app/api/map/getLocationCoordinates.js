const getLocationCoordinates = async (req, res) => {
  const mapboxUrl = `${process.env.MAPBOX_PLACES_API_URL}/${encodeURIComponent(req.body.location)}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    res.status(200).send({ message: 'success', data: data.features[0].center })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getLocationCoordinates
