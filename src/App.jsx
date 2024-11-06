import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("pkr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const useCurrencyInformation = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(useCurrencyInformation);

  const swapBoxes = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  function getConvertedAmount() {
    let convertedCurrency = useCurrencyInformation[toCurrency];
    setConvertedAmount(convertedCurrency * amount);
  }

  return (
    <>
      <div className="box">
        <InputBox
          label={"From"}
          amount={amount}
          currencyOptions={currencyOptions}
          onAmountChange={(value) => {
            setAmount(value);
          }}
          selectedCurrency={fromCurrency}
          onCurrencyChange={(value) => {
            setFromCurrency(value);
          }}
        />
        <button
          onClick={() => {
            swapBoxes();
          }}
          style={{
            backgroundColor: `bisque`,
            padding: `1%`,
            width: `30%`,
            borderRadius: `50px`,
          }}
        >
          Swap
        </button>
        <InputBox
          label={"To"}
          amount={convertedAmount}
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onCurrencyChange={(value) => {
            setToCurrency(value);
          }}
          amountDisabled="true"
        />
        <button
          onClick={getConvertedAmount}
          style={{
            backgroundColor: `aliceblue`,
            padding: `1%`,
            width: `60%`,
            borderRadius: `50px`,
          }}
        >
          Convert {fromCurrency} to {toCurrency}
        </button>
      </div>
    </>
  );
}

export default App;
