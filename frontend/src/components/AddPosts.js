import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPosts = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();


    const saveArticle = async(e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/article", {
                title,
                category,
                content,
                status,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="panel is-link">
                <p className="panel-heading">Create New Article</p>
            </div>
            <div className="panel-block">
                <form id="articleForm" className="box control" onSubmit={saveArticle}>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                        </div>                        
                    </div>
                    <div className="field">
                        <label className="label">Category</label>
                        <div className="control">
                            <input type="text" className="input" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
                        </div>                        
                    </div>
                    <div className="field">
                        <label className="label">Content</label>
                        <div className="control">
                            <textarea className="textarea" onChange={(e) => setContent(e.target.value)} value={content} placeholder="Content"></textarea>
                        </div>                        
                    </div>
                    <div className="field">
                        <div className="buttons is-right">
                            <button type="submit" onClick={() => setStatus("Publish")} className="button is-primary">Publish</button>
                            <button type="submit" onClick={() => setStatus("Draft")} className="button is-success">Draft</button>
                        </div>
                    </div>
                </form>
            </div>            
        </div>
    );
};

export default AddPosts;