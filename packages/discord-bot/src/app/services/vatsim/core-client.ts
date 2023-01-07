import axios, { AxiosInstance } from 'axios';

let coreClient: AxiosInstance

const getCoreClient = (): AxiosInstance  => {
  if (!coreClient) {
    coreClient = axios.create({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
  return coreClient
}

export const getOnlineAtc = async () => {
  try {
    const client = getCoreClient()
    const url = `${process.env.ROVACC_CORE_ENDPOINT}vatsim/live-atc`
    return (await client.get(url)).data
  }
  catch(error) {
    return undefined
  }
};

export const getOnlineFlights = async () => {
  try {
    const client = getCoreClient()
    const url = `${process.env.ROVACC_CORE_ENDPOINT}vatsim/live-flights`
    return (await client.get(url)).data
  }
  catch(error) {
    return undefined
  }
};

export const getFutureBookings = async () => {
  try {
    const client = getCoreClient()
    const url = `${process.env.ROVACC_CORE_ENDPOINT}vatsim/future-bookings`
    return (await client.get(url)).data
  }
  catch(error) {
    return undefined
  }
};
