import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import AppLayout from "./layouts/AppLayout";
import Register from "./pages/Register";
import NotFound from "./components/NotFound";
import AddPost from "./pages/AddPost";
import PostDetails from "./pages/PostDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="post/:postId" element={<PostDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
