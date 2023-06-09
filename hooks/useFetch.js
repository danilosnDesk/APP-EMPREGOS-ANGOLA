import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {

        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            //'fa6851760cmsh10d9c8a940f898bp1a9b41jsn1338d14d78d2'
            'X-RapidAPI-Key':'',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
        } catch (error) {
          //  setError(error);
         // alert(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const reFetchData = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, reFetchData };
};

export default useFetch;
