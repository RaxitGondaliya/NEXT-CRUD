"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getBlogs, deleteBlog } from "../actions";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    
    setBlogs([...getBlogs()]);
  };

  return (
    <div>
      <h2>All Blogs</h2>
      
      <Link href="/blog/create">
        <button style={{ marginBottom: "20px", marginTop: "10px" }}>Add New Blog</button>
      </Link>

      {blogs.length === 0 ? (
        <p>No blogs found. Create one to get started!</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px" }}>
            <h3>{blog.title}</h3>
            
            <p><small>{new Date(blog.createdAt).toLocaleDateString()}</small></p>
            
            <br />
            
            <div>
              <Link href={`/blog/${blog.id}`}>
                <button>Read</button>
              </Link>
              
              {" | "}
              
              <Link href={`/blog/${blog.id}/edit`}>
                <button>Edit</button>
              </Link>
              
              {" | "}
              
              <button 
                onClick={() => handleDelete(blog.id)}
                style={{ color: "red", cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}