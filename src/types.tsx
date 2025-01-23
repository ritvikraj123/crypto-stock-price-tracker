export interface SelectOption {
    label: string;
    value: string;
  }
  
  export interface CoinInfo {
    id: number;
    price: string | undefined;
    volume24h: string | undefined;
    marketCap: string | undefined;
    symbol: string | undefined;
  }
  
  export interface CoinDictionary {
    [key: string]: CoinInfo;
  }

  export interface StockInfo {
    name: string | undefined;
    price: string |undefined;
    marketCap: string | undefined;
    volume: string | undefined;
  }
  
  export interface StockDictionary {
    [key: string]: StockInfo;
  }