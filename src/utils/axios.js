const axios = require('axios');
const util = require('util');

const url = "https://marketdata.tradermade.com/api/v1/live";
const currency = "XAUUSD";
const apiKey = "wsdi9ZkD2yTqxKIMAv3w";  // Replace with your actual API key

async function fetchMarketData() {

    try {
        const response = await axios.get(url, {
            params: {
                currency: currency,
                api_key: apiKey
            }
        });

        if (response.status === 200) {
            console.log(util.inspect(response.data, { depth: null, colors: true }));
        } else {
            console.log("Error");
        }

    } catch (error) {
        console.error("Error");
    }

}

fetchMarketData();