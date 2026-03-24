"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBlog } from "../../actions";
import Link from "next/link";

export default function Create() {
  const router = useRouter();
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    createBlog(title, content);
    
    router.push("/blog");
  };

  return (
    <div>
      <h2>Create New Blog</h2>
      
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="title"><b>Title:</b></label><br />
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            required 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="content"><b>Content:</b></label><br />
          <textarea 
            id="content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            required 
            rows={5}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          ></textarea>
        </div>
        
        <div>
          <button type="submit" style={{ padding: "8px 16px" }}>Create Blog</button>
          {" "}
          <Link href="/blog">
            <button type="button" style={{ padding: "8px 16px" }}>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}