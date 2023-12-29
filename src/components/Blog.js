import fetch from "./../customize/fetch.js"
import './Blog.scss'
import { Link } from "react-router-dom"
const Blog = () => {
    const { data: dataBlog, isLoading } =
        fetch("https://jsonplaceholder.typicode.com/posts", false)

    let newData = [];
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 10);
        console.log("check dataBlog>>>>", newData);
    }
    return (
        <div style={{ backgroundColor: "#282c34", color: "white" }} className="Blog-container">
            {newData && newData.length > 0 && newData.map((item) => {
                return (
                    <div key={item.id} className="single-blog">
                        <div className="title" style={{ fontSize: "20px" }}>Title: {item.title}</div>
                        <hr />
                        <div className="body" >Body: {item.body}</div>
                        <hr />
                        <button style={{ backgroundColor: "white", borderRadius: "10px" }}>
                            <Link to={`/blog/${item.id}`} style={{ textDecoration: "none", color: "black", fontWeight: "600", padding: "5px" }}>View detail</Link>
                        </button>
                    </div>
                )
            })}

        </div>
    )
}
export default Blog; 