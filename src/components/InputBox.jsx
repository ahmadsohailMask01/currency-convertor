import React from "react";

function InputBox({
  label,
  amount,
  currencyOptions,
  onAmountChange,
  selectedCurrency,
  onCurrencyChange,
  amountDisabled = "false",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            onAmountChange(e.target.value);
          }}
          min={0}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((val) => {
            return <option value={val}>{val}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
