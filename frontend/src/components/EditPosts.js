import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPosts = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect (() => {
      const getPostById = async () => {
        const response = await axios.get(`http://localhost:5000/article/${id}`);
        setTitle(response.data.title);
        setCategory(response.data.category);
        setContent(response.data.content);
      };

      getPostById();
    }, [id]); 

    const updatePost = async (e) => {
        e.preventDefault();
        console.log(`id : ${id} | name : ${title} | email : ${category} | gender : ${content}`);
        try {
          await axios.patch(`http://localhost:5000/article/${id}`, {
            title,
            category,
            content,
            status
          });
          navigate("/");
        } catch (error) {
          console.log(error);
        }
    };

    return (
      <div className="container mt-5">
            <div className="panel is-link">
                <p className="panel-heading">Edit Article</p>
            </div>
            <div className="panel-block">
                <form id="articleForm" className="box control" onSubmit={updatePost}>
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

export default EditPosts;