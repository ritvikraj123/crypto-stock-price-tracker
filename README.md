# Live Financial Data Hub

A web application that provides live cryptocurrency and stock market data using third-party APIs.

## 📌 Features
- Fetch live **cryptocurrency** data from CryptoRank API.
- Retrieve **stock market** data using Yahoo Finance API.
- Interactive UI with data selection and display.
- Built with **React (TypeScript)** and **React Router**.
- Custom styling using CSS.
- Performance monitoring with `web-vitals`.
- Testing setup with `Jest` and `React Testing Library`.

## 📂 Project Structure
```
/src
👆🏻 api.tsx                   # API configurations
👆🏻 App.tsx                   # Main application component
👆🏻 AppRoutes.tsx             # Routing setup
👆🏻 coinData.tsx              # Cryptocurrency API calls
👆🏻 cryptocurrencyPage.tsx    # Cryptocurrency page component
👆🏻 homePage.tsx              # Home page component
👆🏻 stockMarketPage.tsx       # Stock market page component
👆🏻 index.tsx                 # Application entry point
👆🏻 types.tsx                 # TypeScript types
👆🏻 utils.tsx                 # Utility functions
👆🏻 styles/                   # CSS styles (App.css, index.css)
👆🏻 reportWebVitals.js        # Performance reporting
👆🏻 setupTests.js             # Jest setup for testing
👆🏻 assets/                   # Static assets (logo.svg)
```

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- API keys for:
  - [CryptoRank API](https://cryptorank.io/) – **[Get API Key](https://cryptorank.io/api-documentation)**
  - [Yahoo Finance API](https://rapidapi.com/apidojo/api/yahoo-finance1/) – **[Get API Key](https://rapidapi.com/apidojo/api/yahoo-finance1/)**

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ritvikraj123/crypto-stock-price-tracker.git
   cd crypto-stock-price-tracker
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. **Set Up API Keys**
   - Sign up and get your API keys:
     - **CryptoRank API**: [Sign up here](https://cryptorank.io/api-documentation) and generate an API key.
     - **Yahoo Finance API**: [Sign up here](https://rapidapi.com/apidojo/api/yahoo-finance1/) and subscribe to the API.

   - Create a `.env` file in the root directory and add:
   ```
   REACT_APP_CRYPTO_RANK_API_KEY=your_crypto_rank_api_key
   REACT_APP_RAPID_API_KEY=your_yahoo_finance_api_key
   ```

4. Start the development server:
   ```sh
   npm start
   ```

## 📈 Project Highlights

### 📡 API Integration
- Fetches cryptocurrency data dynamically based on user selection.
- Uses **Axios** for API calls.
- Handles errors gracefully.

### ⚛️ React Components for Modular Code
- Improves **code maintainability** and **reusability**.
- Implements a clean **separation of concerns**.

### 📊 Data Structures: Maps & Arrays
- **Organized** and **scalable** data management.
- **Optimized retrieval** for improved user experience.

### 🚫 Error Handling
- Displays user-friendly messages when API calls fail.
- Prevents app crashes with structured error handling.

## 🛠 Technologies Used
- **React (TypeScript)**
- **React Router**
- **Axios** (for API calls)
- **React Select** (for dropdown selection)
- **CSS** for styling
- **Jest & React Testing Library** for testing
- **Web Vitals** for performance monitoring

## 🛠 Running Tests
To run the tests, use:
```sh
npm test
```

## 👤 Developed By
### **Ritvik Raj**


