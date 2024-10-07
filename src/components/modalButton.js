import { Label } from "@mui/icons-material";
import React, { useState, useMemo, useEffect } from "react";
import "./ModalExample.css"; // Import your custom CSS
import { providers } from "ethers";
import Web3 from "web3";
import axios from "axios";

const ConnectWallet = () => {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);

  // state for tracking account.
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // state for tracking network.
  const [defaultNetwork, setDefaultNetwork] = useState("");
  const [network, setNetwork] = useState("");

  //list id network
  const memoize = useMemo(() => {
    return {
      1: "Eth Mainnet",
      4: "Eth Rinkeby",
      5: "Eth Goerli",
      97: "Binance (BNB) Testnet",
    };
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
      setDefaultNetwork(memoize[window.ethereum.networkVersion]);
    }
  }, [memoize]);

  useEffect(() => {
    // window.addEventListener("load", function () 
    // {
      // if (window.ethereum) {
      //   ConnectWallet.web3 = new Web3(window.ethereum);
      //   window.ethereum.enable(); // get permission to access accounts

      //   // detect Network account change
      //   window.ethereum.on("networkChanged", function (networkId) {
      //     setNetwork(memoize[networkId]);
      //   });
      // }
    // }
    // );
  }, [memoize]);

  // initialize provider

  const connectWallet = async () => {
    if (window.ethereum) {
      ConnectWallet.web3 = new Web3(window.ethereum);
      window.ethereum.enable(); // get permission to access accounts

      // detect Network account change
      window.ethereum.on("networkChanged", function (networkId) {
        setNetwork(memoize[networkId]);
      });
    }

    if (window.ethereum) {
      ConnectWallet.web3 = new Web3(window.ethereum);
      window.ethereum.enable(); // get permission to access accounts

      // detect Network account change
      window.ethereum.on("networkChanged", function (networkId) {
        setNetwork(memoize[networkId]);
      });
    }
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        const provider = new providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setAccount(accounts[0]);

        provider.getBalance(accounts[0]).then(() => {
          setBalance(balance);
        });

        axios
          .post("https://apkz.fun/api/auth/login", {
            name: userName,
            email: userEmail,
            account: accounts[0],
            balance,
          })
          .then((res) => {
            alert("User Loggined");
          })
          .catch((e) => {
            alert(e);
            setAccount(null);
          });
        alert(`Success connected to: ${signer.provider.connection.url}`);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // condition if wallet (Metamask extension) havn't installed
  if (account === null) {
    return (
      <div className="" style={{ color: "white" }}>
        {isWalletInstalled ? (
          <>
            <input
              type="text"
              placeholder="Name:"
              value={userName}
              onChange={(e) => {
                e.preventDefault();
                setUserName(e.target.value);
              }}
            ></input>
            <input
              type="email"
              placeholder="Email:"
              value={userEmail}
              onChange={(e) => {
                e.preventDefault();
                setUserEmail(e.target.value);
              }}
            ></input>
            <button className="btn btn-primary" onClick={connectWallet}>
              Connect Wallet
            </button>
          </>
        ) : (
          <p>Install Metamask wallet</p>
        )}
      </div>
    );
  }

  return (
    <div className="" style={{ color: "white" }}>
      <p>Connected at address: {account}</p>
      <p>Default Network : {defaultNetwork}</p>
      <p>Current Amount : {balance}</p>
    </div>
  );
};

const ModalExample = ({ address = "", amount = 0 }) => {
  return (
    <div>
      {/* Button to Open the Modal */}
      {/* <div className="flex-col">
        <div className="inline-flex">
          <Label>Address : </Label>
          <Label>{address}</Label>
        </div>
        <div className="inline-flex">
          <Label>Amount : </Label>
          <Label>{amount}</Label>
        </div>
      </div> */}

      <ConnectWallet></ConnectWallet>
      <div style={{ textAlign: "center", height: "200px" }}></div>
      <button className="btn btn-primary">Deposit</button>
      <button className="btn btn-primary">Withdraw</button>
    </div>
  );
};

export default ModalExample;
