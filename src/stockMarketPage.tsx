import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getApiOptions } from './api';
import axios from 'axios';
import { StockDictionary, StockInfo } from './types';
import { toCurrency } from './utils';
import './App.css';



const StockMarketPage = () => {
    const [stock_symbol, setStockSymbol] = useState('');
    const [stock_name, setStockName] = useState('');
    const [stock_price, setStockPrice] = useState('');
    const [stock_volume, setStockVolume] = useState('');
    const [stock_marketCap, setStockMarketCap] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [apiResponsePopulated, setApiResponsePopulated] = useState(false);
    const [showStockData, setshowStockData] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Hook for navigation




    const getStockSummary = async () => {
        const options = getApiOptions(stock_symbol);

        try {
            const response = await axios.request(options);
            console.log(response.data)
            setApiResponse(JSON.stringify(response.data))
        } catch (error) {
            console.error('Error in API call:', error);
            setErrorMessage(
                'Failed to fetch data. Please check your internet connection or try again later.'
            );
        }
    };

    const setValuesAfterApiResponse = () => {
        if (apiResponse) {
            // console.log(apiResponse)
            // console.log(typeof(apiResponse))
            const parsedResponse = JSON.parse(apiResponse); // Parse the string to an object
            // console.log("this is parsed response")
            // console.log(parsedResponse)
            setStockName(parsedResponse.quoteType.longName);
            setStockPrice(parsedResponse.summaryDetail.regularMarketOpen.raw);
            setStockVolume(parsedResponse.summaryDetail.regularMarketVolume.raw);
            setStockMarketCap(parsedResponse.summaryDetail.marketCap.raw);
            // console.log("i am here")
            // console.log(stock_name)
            // console.log(stock_symbol)
            // console.log(stock_price)
            // console.log(stock_volume)
            // console.log(stock_marketCap)
            // console.log(typeof (stock_price))
            // console.log("i have ended")
            setshowStockData(true)
        }
    };

    const handleSearch = () => {
        getStockSummary();

    };

    useEffect(() => {
        setValuesAfterApiResponse();
    });

    const navigateToHomePage = () => {
        navigate('/');
    };

    const StockInfo = () => {
        if (showStockData) {
            return (
                <div>
                    <div>
                        <span>Stock Name :</span>
                        <input type='text' required={true} readOnly={true} value={stock_name} />
                    </div>
                    <div>
                        <span>Stock Price :</span>
                        <input type='text' required={true} readOnly={true} value={toCurrency(Number(stock_price))} />
                    </div>
                    <div>
                        <span>Stock Volume :</span>
                        <input type='text' required={true} readOnly={true} value={toCurrency(Number(stock_volume))} />
                    </div>
                    <div>
                        <span>Stock Market Cap :</span>
                        <input type='text' required={true} readOnly={true} value={toCurrency(Number(stock_marketCap))} />
                    </div>
                </div>
            );
        }
    };

    return (
        <form>
            <div className="App">
                <header className="App-header">
                    <button type="button" className="button-go-home" onClick={navigateToHomePage}>
                        Go to Home Page
                    </button>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    {!errorMessage && (
                        <div>
                            <>
                                <h3 style={{color:"white"}}>ENTER STOCK SYMBOL BELOW</h3>
                                <input
                                    type="text"
                                    placeholder="Enter stock symbol"
                                    value={stock_symbol}
                                    onChange={(e) => setStockSymbol(e.target.value)}
                                />
                                <button type="button" onClick={handleSearch}>
                                    Search
                                </button>
                                <div className="data">
                                    {StockInfo()}
                                </div>
                            </>
                        </div>
                    )}
                </header>
            </div>
        </form>
    );
};

export default StockMarketPage;
