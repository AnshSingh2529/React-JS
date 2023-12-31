import {useEffect, useState} from 'react';

export default function useCurrencyinfo(currency){
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => 
            response.json()
        )
        .then((response) => setData(response[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}