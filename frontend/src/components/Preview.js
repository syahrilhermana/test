import React, {useState, useEffect, useMemo } from "react";
import axios from "axios";
import Pagination from "./Pagination";

let PageSize = 1;

const Preview = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const status = "Publish";

    useEffect(() => {
        getPosts();
    }, []);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return posts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const getPosts = async () => {
        const response = await axios.get(`http://localhost:5000/article/10/0?status=${status}`);
        setPosts(response.data);

        currentTableData();
    };

    
    return (        
        <div className="title is-parent">
            {currentTableData.map((post, index) => (
            <article class="tile is-child notification" key={post.id}>
                <p class="title">{post.title}</p>
                <p class="subtitle">{post.category}</p>
                <div class="content">
                {post.content}
                </div>
            </article>
            ))}

            <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={posts.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
        </div>            
    )
}
export default Preview;