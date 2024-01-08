import axios from "axios";
import { useState } from "react";
const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const handleOnClickSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            alert("title or content is not correct!!!");
            return;
        }
        let data = {
            title: title,
            body: content,
            userId: 1,
        }
        let res = await axios.post("https://jsonplaceholder.typicode.com/posts", data)
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNewBlog(newBlog);
            console.log(newBlog);
        }

    }
    return (
        <div className="add-new-blog-container" style={{ backgroundColor: "#282c34", color: "white" }}>
            <span>-------Add new blog-------</span>
            <form onSubmit={handleOnClickSubmit} >
                <label >
                    Title:
                    <input
                        type="text"
                        name="input-title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />

                </label>
                <br />
                <label >
                    Content:
                    <input
                        type="text"
                        name="input-content"
                        value={content}
                        onChange={(e) => { setContent(e.target.value) }}
                    />
                </label>
                <br />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default AddNewBlog;