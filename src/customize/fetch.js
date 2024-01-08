import axios from "axios"
import { useState, useEffect } from "react";

// custom hook must start with "use"
const useFetch = (url, isCovidData) => {
    const [data, setData
    ] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const ourRequest = axios.CancelToken.source()
        const fetchData = async () => {
            try {
                // Gọi API bằng axios và chờ kết quả
                let response = undefined;

                response = await
                    axios.get(url, {
                        cancelToken: ourRequest.token, // <-- 2nd step
                    });



                // Trả về dữ liệu từ API
                return response;
            } catch (error) {
                // Xử lý lỗi nếu có
                // console.error('Error fetching data:', error);
                if (axios.isCancel(error)) {
                    console.log('Previous request canceled, new request is send', error.message);
                } else {
                    // handle error
                    console.log(error);
                }

                return null;
            }
        };

        // Sử dụng async/await trong useEffect
        const fetchDataAndSetState = async () => {
            try {

                const res = await fetchData();
                // Kiểm tra nếu data không rỗng hoặc null
                let getData = []
                if (isCovidData === true) {
                    getData = await res && res.data && res.data.locations ? res.data.locations : [];
                }
                else {
                    getData = await res && res.data ? res.data : [];
                }

                setData(getData);
                setLoading(false);
            } catch (error) {
                console.error('Error setting state:', error);
            }
        };

        // Gọi hàm fetchDataAndSetState trong useEffect với dependency array rỗng
        setTimeout(() => {
            fetchDataAndSetState();
        }, 1000);
        return () => {
            ourRequest.cancel('Operation canceled by the user.');
        }

    }, [url, isCovidData]);
    return {
        data, isLoading
    }
}

export default useFetch;