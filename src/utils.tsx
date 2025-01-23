import {CoinDictionary, CoinInfo} from "./types";

export const traverseAndBuildCoinDictionary = (jsonObj: any): CoinDictionary => {
    const coinDict: CoinDictionary = {};
    if (jsonObj.data && Array.isArray(jsonObj.data)) {
        for (const coinData of jsonObj.data) {
            const name: string = coinData.name;
            if (name) {
                const coinInfo: CoinInfo = {
                    id: coinData.id,
                    price: coinData.values.USD.price,
                    volume24h: coinData.values.USD.volume24h,
                    marketCap: coinData.values.USD.marketCap,
                    symbol: coinData.symbol,
                };

                coinDict[name] = coinInfo;
            }
        }
    }
    return coinDict;
};

export const toCurrency = (value: number) => {
    if (isNaN(value)) {
        return 'Invalid number';
    }

    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};