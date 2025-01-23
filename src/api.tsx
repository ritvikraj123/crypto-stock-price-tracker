import { AxiosRequestConfig } from 'axios';


export const COINRANKER_API_URL = "https://api.cryptorank.io/v1"
export const COINRANKER_API_KEY = "960329871343b8c0de27e3750d90e66cc83d6d4c769c9c7283c778a9b5ad"



export const getApiOptions = (symbol: string): AxiosRequestConfig => ({
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
    params: {
      symbol: symbol,
      region: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '5b75b4a194msh7976998016b4880p1b209ajsn3ac7a71003d7',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  });