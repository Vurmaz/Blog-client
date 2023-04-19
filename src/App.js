
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Post from "./components/Post";
import CreatePost from './components/CreatePost'
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assests/theme";
import SharedLayout from "./components/SharedLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import UnAuthRoute from "./components/UnAuthRoute";
import Error from "./components/Error";


function App() {

  return (
        <ThemeProvider theme={theme}>
          <Routes>  
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/auth/login" element={<UnAuthRoute><Login /></UnAuthRoute>} />
              <Route path="/auth/register" element={<UnAuthRoute><Register /></UnAuthRoute>} />
              <Route path='dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path='create' element={<ProtectedRoute><CreatePost /></ProtectedRoute>}/>
              <Route path="/:postId" element={<ProtectedRoute><Post /></ProtectedRoute>} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </ThemeProvider> 
    
    
  );
}

export default App;
