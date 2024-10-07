import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
    const widgetRef = useRef(null);

    useEffect(() => {
        const scriptContent = JSON.stringify({
            title: "Currencies",
            title_link: "/markets/currencies/rates-major/",
            width: "100%",
            height: "450",
            locale: "en",
            showSymbolLogo: true,
            symbolsGroups: [
                {
                    name: "Major",
                    symbols: [
                        { name: "FX_IDC:EURUSD", displayName: "EUR to USD" },
                        { name: "FX_IDC:USDJPY", displayName: "USD to JPY" },
                        { name: "FX_IDC:GBPUSD", displayName: "GBP to USD" },
                        { name: "FX_IDC:AUDUSD", displayName: "AUD to USD" },
                        { name: "FX_IDC:USDCAD", displayName: "USD to CAD" },
                        { name: "FX_IDC:USDCHF", displayName: "USD to CHF" }
                    ]
                },
                {
                    name: "Minor",
                    symbols: [
                        { name: "FX_IDC:EURGBP", displayName: "EUR to GBP" },
                        { name: "FX_IDC:EURJPY", displayName: "EUR to JPY" },
                        { name: "FX_IDC:GBPJPY", displayName: "GBP to JPY" },
                        { name: "FX_IDC:CADJPY", displayName: "CAD to JPY" },
                        { name: "FX_IDC:GBPCAD", displayName: "GBP to CAD" },
                        { name: "FX_IDC:EURCAD", displayName: "EUR to CAD" }
                    ]
                },
                {
                    name: "Exotic",
                    symbols: [
                        { name: "FX_IDC:USDSEK", displayName: "USD to SEK" },
                        { name: "FX_IDC:USDMXN", displayName: "USD to MXN" },
                        { name: "FX_IDC:USDZAR", displayName: "USD to ZAR" },
                        { name: "FX_IDC:EURTRY", displayName: "EUR to TRY" },
                        { name: "FX_IDC:EURNOK", displayName: "EUR to NOK" },
                        { name: "FX_IDC:GBPPLN", displayName: "GBP to PLN" }
                    ]
                }
            ],
            colorTheme: "dark"
        });

        if (widgetRef.current) {
            widgetRef.current.innerHTML = '';
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
            script.innerHTML = scriptContent;
            widgetRef.current.appendChild(script);
        }

    }, []);

    return (
        <div className="tradingview-widget-container">
            <div ref={widgetRef} className="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default TradingViewWidget;