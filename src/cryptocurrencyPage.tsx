import React, { useState, useEffect } from 'react';
import { toCurrency, traverseAndBuildCoinDictionary } from './utils';
import { apiCallCoinRankerAPI } from './coinData';
import { CoinDictionary, SelectOption } from './types';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const CryptocurrencyPage = () => {
    const [showCoinData, setshowCoinData] = useState(false);
    const [coin_symbol, setCoinSymbol] = useState('');
    const [coin_price, setCoinPrice] = useState('');
    const [coin_volume24h, setCoinVolume24h] = useState('');
    const [coin_marketCap, setCoinMarketCap] = useState('');
    const [options, setOptions] = useState<SelectOption[]>([]);
    const [apiResponse, setApiResponse] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State to hold error message
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await apiCallCoinRankerAPI();
                setApiResponse(response.data);
            } catch (error) {
                console.error('Error in API call:', error);
                setErrorMessage(
                    "Failed to fetch data. Please check your internet connection or try again later."
                );
            }
        }

        fetchData();
    }, []);

    console.log("Api Response");
    console.log(apiResponse);

    const resultDict: CoinDictionary = traverseAndBuildCoinDictionary(apiResponse);
    console.log(resultDict);

    useEffect(() => {
        // Only update options when API response is available
        if (apiResponse) {
            const coinKeys: string[] = Object.keys(resultDict);
            const coinOptions: SelectOption[] = coinKeys.map((key) => ({
                label: key,
                value: key, // Use the key as the value for the options
            }));

            setOptions(coinOptions);
        }
    }, [apiResponse]);

    const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);

    const handleSelectChange = (selectedOption: SelectOption | null) => {
        setSelectedOption(selectedOption);
        setshowCoinData(true);
        console.log(selectedOption)

        if (selectedOption && resultDict[selectedOption.label]) {
            const selectedCoinInfo = resultDict[selectedOption.label];
            setCoinSymbol(selectedCoinInfo.symbol || '')
            setCoinPrice(selectedCoinInfo.price || '');
            setCoinVolume24h(selectedCoinInfo.volume24h || '');
            setCoinMarketCap(selectedCoinInfo.marketCap || '');
        }
    };

    const navigateToHomePage = () => {
        navigate('/');
    };

    const cryptoCoinInfo = () => {
        if (showCoinData) {
            return (
                <div>
                    <div>
                        <span>Coin Symbol :</span>
                        <input type='text' required={true} readOnly={true} value={coin_symbol} />
                    </div>
                    <div>
                        <span>Coin Price :</span>
                        <input type='text' required={true} readOnly={true} value={toCurrency(Number(coin_price))} />
                    </div>
                    <div>
                        <span>Coin Volume 24h :</span>
                        <input type='text' required={true} readOnly={true} value={toCurrency(Number(coin_volume24h))} />
                    </div>
                    <div>
                        <span>Coin Market Cap :</span>
                        <input type='text' required={true} readOnly={true} value={toCurrency(Number(coin_marketCap))} />
                    </div>
                </div>
            );
        }
    };

    return (
        <form>
            <div className="App">
                <header className="App-header">
                    <div>
                        <button type="button" className="button-go-home" onClick={navigateToHomePage}>
                            Go to Home Page
                        </button>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        {!errorMessage && (
                            <>
                                <h3 style={{color:"white"}}>SELECT CRYPTO CURRENCY BELOW</h3>
                                <Select className="selectStyle"
                                    options={options}
                                    onChange={handleSelectChange}
                                />
                                <div className="data">
                                    {cryptoCoinInfo()}
                                </div>

                            </>
                        )}
                    </div>
                </header>
            </div>
        </form>
    );

};

export default CryptocurrencyPage;