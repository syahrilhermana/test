import PostsList from "./PostsList";
import Preview from "./Preview";
import {Link, useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const location = useLocation();

    return (
        <div className="container mt-5">
            <div className="columns">
                <div className="column is-2">
                    <aside class="menu">
                        <p class="menu-label">
                            Article
                        </p>
                        <ul class="menu-list">
                            <li>
                                <Link to={`#list`}>All Post</Link>
                            </li>
                            <li>
                                <Link to={`#preview`}>Preview</Link>
                            </li>
                        </ul>
                    </aside>
                </div>
                <div className="column is-10">
                    {location.hash == '#list' ? <PostsList /> : <Preview /> }
                </div>
            </div>
        </div>
    )
}
export default Dashboard;