"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getBlog, deleteBlog } from "../../actions";

export default function BlogDetail({ params }) {
  const router = useRouter();
  
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(getBlog(id));
  }, [id]);

  const handleDelete = () => {
    deleteBlog(id);
    router.push("/blog");
  };

  if (!blog) {
    return <p>Loading blog...</p>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      
      <p style={{ color: "gray", fontSize: "14px" }}>
        Created on: {new Date(blog.createdAt).toLocaleString()}
      </p>
      
      <div style={{ marginTop: "20px", marginBottom: "30px", whiteSpace: "pre-wrap" }}>
        {blog.content}
      </div>

      <div style={{ borderTop: "1px solid #ccc", paddingTop: "15px" }}>
        <Link href="/blog">
          <button>Back to Blogs</button>
        </Link>
        
        {" | "}
        
        <Link href={`/blog/${id}/edit`}>
          <button>Edit</button>
        </Link>
        
        {" | "}
        
        <button onClick={handleDelete} style={{ color: "red", cursor: "pointer" }}>
          Delete
        </button>
      </div>
    </div>
  );
}