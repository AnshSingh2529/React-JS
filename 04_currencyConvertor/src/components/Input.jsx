import React, {useId} from "react";

 export default function Input({
    label,
    amount,
    onAmountchange,
    onCurrencychange,
    CurrencyOptions = [],
    selectCurency = {currency},
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   
const amountInputId = useId();

    return (
        <div className={`bg-green-500 p-3 rounded-lg text-lg flex ${'currency'}`}>

            <div className="w-1/2">

                <label htmlFor={amountInputId} className="text-black/50 font-serif mb-2 inline-block">
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 "
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">

                <p className=" text-black/50 mb-2 w-full font-serif">Currency Type</p>

                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none hover:text-xl"
                    value={selectCurency}
                    disabled={currencyDisable}
                    onChange={(e) => onCurrencychange && onCurrencychange(e.target.value)}
                >
                    {CurrencyOptions.map((currency) => (
                        <option value={currency} 
                        key={currency}
                        >{currency}</option>
                       ))}
                
                </select>

            </div>

        </div>
    );
}