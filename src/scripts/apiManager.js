const apiBaseUrl = "http://localhost:8088"

const getAllParks = () => fetch(`${apiBaseUrl}/parks`).then(response => response.json())

const deletePark = (parkId) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "DELETE"
})

const patchPark = (parkId, updatedParkObject) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedParkObject)
})

const getPark = (parkId) => fetch(`${apiBaseUrl}/parks/${parkId}`).then(response => response.json())

const putPark = (parkId, updatedParkObject) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedParkObject)
})

const getAllMonuments = () => fetch(`${apiBaseUrl}/monuments`).then(response => response.json());

const deleteMonument = (monumentId) => fetch(`${apiBaseUrl}/monuments/${monumentId}`, {
  method: "DELETE"
})

const patchMonument = (monumentId, updatedMonumentObject) => fetch(`${apiBaseUrl}/monuments/${monumentId}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedMonumentObject)
})

const getMonument = (monumentId) => fetch(`${apiBaseUrl}/monuments/${monumentId}`).then(response => response.json())

const putMonument = (monumentId, updatedMonumentObject) => fetch(`${apiBaseUrl}/monuments/${monumentId}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedMonumentObject)
})