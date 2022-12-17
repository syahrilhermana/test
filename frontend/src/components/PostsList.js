import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import PostsTable from "./PostsTable";

const PostsList = () => {

    return (        
        <div className="container mt-5">
            <div className="panel is-link">
                <p className="panel-heading">Article
                <Link to={`add`} className="button is-small is-success is-pulled-right">Add New</Link>
                </p>
            </div>

            <div className="panel-block">
                <Tabs className="control">
                    <TabList>
                        <Tab>Published</Tab>
                        <Tab>Drafts</Tab>
                        <Tab>Trashed</Tab>
                    </TabList>

                    <TabPanel>                        
                        <PostsTable status="publish" />
                    </TabPanel>
                    <TabPanel>
                        <PostsTable status="draft" />
                    </TabPanel>
                    <TabPanel>
                        <PostsTable status="trash" />
                    </TabPanel>
                </Tabs>
            </div>                        
        </div>
    );
};

export default PostsList;