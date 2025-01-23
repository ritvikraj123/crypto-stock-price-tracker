import { COINRANKER_API_KEY, COINRANKER_API_URL } from "./api";
import axios, { AxiosResponse } from 'axios';


export async function apiCallCoinRankerAPI(): Promise<AxiosResponse<string>> {
  try {
      const coinRankerApi = `${COINRANKER_API_URL}/currencies?api_key=${COINRANKER_API_KEY}`;
      const postResponse = await axios.get<string>(coinRankerApi);

      return postResponse;
  } catch (error) {
      console.error('Error in API call:', error);
      throw new Error('Failed to fetch coin data. Please check your internet connection or try again later.');
  }
}