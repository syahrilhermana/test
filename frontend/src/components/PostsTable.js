import React, {useState, useEffect} from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostsTable = (props) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const status = props.status;
    const navigate = useNavigate();

    useEffect(() => {
        getPosts();
    }, [page]);

    const getPosts = async () => {
        const response = await axios.get(`http://localhost:5000/article/10/0?status=${status}`);
        setPosts(response.data);
    };

    const trashPost = async (id) => {
        try {
          await axios.patch(`http://localhost:5000/article/${id}`, {
            status: "Trash"
          });
          getPosts();
        } catch (error) {
          console.log(error);
        }
    };    

    return (
        <div className="columns is-half">                
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.category}</td>
                            <td>
                                <Link to={`edit/${post.id}`} className="button is-small is-info mr-2"><FaEdit /></Link>
                                <button onClick={() => trashPost(post.id)} className="button is-small is-danger"><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
export default PostsTable;