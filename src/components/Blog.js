import fetch from "./../customize/fetch.js"
import './Blog.scss'
import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button"
import AddNewBlog from "./AddNewBlog.js"
const Blog = () => {
    let history = useHistory();
    const { data: dataBlog, isLoading } =
        fetch("https://jsonplaceholder.typicode.com/posts", false)
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let data = dataBlog.slice(0, 10);
            setNewData(data);
            console.log("check dataBlog>>>>", newData);
        }
    }, [dataBlog])

    const handleAddNewBlog = (blog) => {

        let data = newData;
        data.unshift(blog);
        setShow(false);
        setNewData(data);
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = (id) => {
        let data = newData.filter(item => item.id != id)
        setNewData(data);
    }

    return (
        <>
            <div style={{ backgroundColor: "#282c34", color: "white" }}>
                <Button variant="primary" onClick={handleShow}>
                    Add new blog
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog handleAddNewBlog={handleAddNewBlog} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <div style={{ backgroundColor: "#282c34", color: "white" }} className="Blog-container">
                {newData && newData.length > 0 && newData.map((item) => {
                    return (


                        <div key={item.id} className="single-blog">
                            <div className="title" style={{ fontSize: "20px" }}>Title: {item.title}</div>
                            <hr />
                            <div className="body" >Body: {item.body}</div>
                            <hr />
                            <button style={{ backgroundColor: "white", borderRadius: "10px" }}>
                                <Link to={`/blog/${item.id}`} style={{ textDecoration: "none", color: "black  ", fontWeight: "600", padding: "5px" }}>View detail</Link>
                            </button>
                            <button style={{ backgroundColor: "white", borderRadius: "10px" }} onClick={() => handleDelete(item.id)}>Delete</button>

                        </div>

                    )
                })}

            </div>
        </>
    )
}
export default Blog;






