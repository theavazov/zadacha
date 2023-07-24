import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import PostsContextProvider from "./contexts/posts.tsx";

ReactDOM.createRoot(document.getElementById("__vite")!).render(
  <React.StrictMode>
    <PostsContextProvider>
      <App />
    </PostsContextProvider>
  </React.StrictMode>
);
