import axios from "axios"
import { useState, useEffect } from "react";
// custom hook must start with "use"
const useFetch = (url) => {
    const [data, setData
    ] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Gọi API bằng axios và chờ kết quả
                const response = await
                    axios.get(url);
                // Trả về dữ liệu từ API
                return response;
            } catch (error) {
                // Xử lý lỗi nếu có
                console.error('Error fetching data:', error);
                return null;
            }
        };

        // Sử dụng async/await trong useEffect
        const fetchDataAndSetState = async () => {
            try {

                const res = await fetchData();
                // Kiểm tra nếu data không rỗng hoặc null
                const covidData = await res && res.data && res.data.locations ? res.data.locations : [];
                setData
                    (covidData)
                setLoading(false);
            } catch (error) {
                console.error('Error setting state:', error);
            }
        };

        // Gọi hàm fetchDataAndSetState trong useEffect với dependency array rỗng
        fetchDataAndSetState();
    }, [url]);
    return {
        data, isLoading
    }
}

export default useFetch;