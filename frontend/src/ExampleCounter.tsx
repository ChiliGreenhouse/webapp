import React, {useEffect, useState} from "react";

const backendHost = process.env.REACT_APP_BACKEND_HOST;

function ExampleCounter() {
    const [value, setValue] = useState(undefined as number | undefined);

    const fetchCounter = async () => {
        try {
            const response = await fetch(backendHost + '/api/counter');
            const data = await response.text();
            setValue(parseInt(data)); // assuming the response has a 'counter' field
        } catch (error) {
            console.error('Failed to fetch counter', error);
        }
    };

    useEffect(() => {
        fetchCounter();
        const interval = setInterval(fetchCounter, 1000);
        return () => clearInterval(interval);
    }, []);

    const incrementCounter = async () => {
        try {
            const response = await fetch(backendHost + '/api/counter/increment');
            const data = await response.text();
            setValue(parseInt(data))
        } catch (err: any) {
            console.error('Failed to increment counter', err);
        }
    };

    const decrementCounter = async () => {
        try {
            const response = await fetch(backendHost + '/api/counter/decrement');
            const data = await response.text();
            setValue(parseInt(data))
        } catch (err: any) {
            console.error('Failed to decrement counter', err);
        }
    };

    return (
        <span className="flex w-28 bg-indigo-200 rounded-full items-center font-bold overflow-hidden drop-shadow-md">
            {
                value === undefined ?
                    'Loading...'
                    :
                    <>
                        <button onClick={decrementCounter}
                                className="mr-1 w-1/3 bg-indigo-500 text-white hover:bg-indigo-700 font-bold py-1 px-1 rounded-l-full">
                            -1
                        </button>
                        <p className="w-1/3 text-center select-none text-slate-700 text-lg">
                            {value}
                        </p>
                        <button
                            onClick={incrementCounter}
                            className="ml-1 w-1/3 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-1 rounded-r-full w-10">
                            +1
                        </button>
                    </>
            }
        </span>
    )
        ;
}

export default ExampleCounter;
