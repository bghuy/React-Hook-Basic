import { useHistory } from "react-router-dom";
const NotFound = () => {
    const history = useHistory();
    const handleGoHome = () => {
        history.push("/");
    }
    return (
        <div>
            <h4>Sorry, this page is not available</h4>
            <button onClick={() => { handleGoHome() }}>Go home page</button>
        </div>
    )
}
export default NotFound;