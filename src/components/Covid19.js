import "./Covid19.scss"
import { useEffect } from "react";
import fetch from "./../customize/fetch.js"
const Covid = (props) => {
    const { data: dataCovid, isLoading } =
        fetch("https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true", true)

    useEffect(() => {
        // Log giá trị mới của dataCovid sau khi nó được cập nhật
        console.log("data:", dataCovid);
    }, [dataCovid]);
    return (
        <div style={{ background: "#282c34", color: "white" }}>
            <h1>Covid tracking</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Cases</th>
                        <th>Cases today</th>
                        <th>Death</th>
                        <th>Recovered</th>
                        <th>Treating</th>
                    </tr>

                </thead>

                <tbody>

                    {isLoading === false && dataCovid && dataCovid.map((item, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.cases}</td>
                                <td>{item.casesToday}</td>
                                <td>{item.death}</td>
                                <td>{item.recovered}</td>
                                <td>{item.treating}</td>
                            </tr>
                        )
                    })}
                    {isLoading === true && <tr ><td colSpan="7" style={{ textAlign: "center" }}>Loading....</td></tr>}

                </tbody>


            </table>
        </div>
    )
}

export default Covid;