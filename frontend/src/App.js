import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PostsList from "./components/PostsList";
import AddPosts from "./components/AddPosts";
import EditPosts from "./components/EditPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="list" element={<PostsList/>}/>
        <Route path="add" element={<AddPosts/>}/>
        <Route path="edit/:id" element={<EditPosts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;