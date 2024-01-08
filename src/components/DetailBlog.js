import { useParams, useHistory } from "react-router-dom"
import useFetch from "./../customize/fetch.js"
const DetailBlog = () => {

    let { id: BlogId } = useParams();//tra ve object
    let history = useHistory();
    const { data: dataDetail, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${BlogId}`, false);
    const handleOnClick = () => {
        history.push("/blog");
    }
    console.log(dataDetail);
    return (
        <div style={{ backgroundColor: "#282c34", color: "white", height: "100vh" }} className="BlogDetail">
            <h1>Hello Js with id = {BlogId}</h1>
            <button onClick={handleOnClick}>Back</button>
            <div className="DetailBlog">
                {dataDetail && !isLoading &&
                    <>
                        <div className="title">Title: {dataDetail.title}</div>
                        <div className="body">Body: {dataDetail.body}</div>
                    </>

                }
                {isLoading &&
                    <>
                        <div>loading .....</div>
                    </>
                }
            </div>
        </div>
    )
}

export default DetailBlog;