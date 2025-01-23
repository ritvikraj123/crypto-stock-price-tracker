import { AxiosRequestConfig } from 'axios';


export const COINRANKER_API_URL = "https://api.cryptorank.io/v1"
export const COINRANKER_API_KEY = process.env.REACT_APP_CRYPTO_RANK_API_KEY



export const getApiOptions = (symbol: string): AxiosRequestConfig => ({
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
    params: {
      symbol: symbol,
      region: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  });