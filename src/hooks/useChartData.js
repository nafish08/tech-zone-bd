import { useEffect, useState } from "react"

const useChartData = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, []);
    return [datas, setDatas];
}

export default useChartData;