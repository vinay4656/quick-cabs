import { client } from "@/lib/sanity";

const query = `
*[_type=="rides"]{
  "service": title,
  "iconUrl": icon.asset->url,
  priceMultiplier,
  orderById
}|order(orderById asc)
`


const apiResponse =  [
      {
          "service": "Moto",
          "iconUrl": "https://cdn.sanity.io/images/q105yz7o/production/6b4acbff666799e0c2eeb274b008b0b5bc9fb38e-360x360.png",
          "priceMultiplier": 1,
          "orderById": 1
      },
      {
          "service": "Auto",
          "iconUrl": "https://cdn.sanity.io/images/q105yz7o/production/15309ecd9ed54b977c3da969acc0a92805054a0c-360x360.png",
          "priceMultiplier": 1.5,
          "orderById": 2
      },
      {
          "service": "CabGO",
          "iconUrl": "https://cdn.sanity.io/images/q105yz7o/production/20f91b732f420f14dbfb8712d54c41551f906cad-360x360.png",
          "priceMultiplier": 2,
          "orderById": 3
      },
      {
          "service": "CabSedan",
          "iconUrl": "https://cdn.sanity.io/images/q105yz7o/production/c3adcfad1d66d7859518b86b5d922db41a99081c-360x360.png",
          "priceMultiplier": 2.3,
          "orderById": 4
      },
      {
          "service": "CabSUV",
          "iconUrl": "https://cdn.sanity.io/images/q105yz7o/production/bb6c7326969470d9cce4943aabef5240016488f6-360x360.png",
          "priceMultiplier": 3,
          "orderById": 5
      }
  ]


const getRideTypes = async (req, res) => {
  try {
    const sanityResponse = apiResponse //await client.fetch(query)

    res.status(200).send({ message: 'success', data: sanityResponse })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getRideTypes
