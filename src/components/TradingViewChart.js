// src/TradingViewWidget.js
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const TradingViewWidget = ({ symbol = "BITSTAMP:BTCUSD" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && window.TradingView) {
      new window.TradingView.widget({
        symbol: "BITSTAMP:BTCUSD",
        autosize: true,
        interval: '1',
        timezone: 'America/Argentina/Buenos_Aires',
        theme: 'dark',
        style: '1',
        locale: 'en',
        padding: '10px',
        toolbar_bg: '#f1f3f6',
        enable_publishing: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        withdateranges: true,
        watchlist: [
          "BITSTAMP:BTCUSD",
          "FX:EURUSD",
          "FX:GBPUSD",
          "FX:USDJPY",
          "FX:AUDUSD",
          "FX:USDCAD",
          "FX:GBPJPY",
          "FX:NZDUSD",
          "FX:GBPAUD",
          "FX:AUDCAD"
        ],
        container_id: "trading-view-chart-container",
      });
    }
  }, [symbol]);

  return (
    <div
      id="trading-view-chart-container"
      ref={containerRef}
      className="tradingview-widget-container"
      style={{ width: '100%', height: '100%' }}
    />
  );
};


export default TradingViewWidget;
