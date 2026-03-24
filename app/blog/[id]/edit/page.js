"use client";

import { useState, useEffect, use } from "react";
import { getBlog } from "../../../actions";
import EditForm from "./EditForm";

export default function EditPage({ params }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(getBlog(id));
  }, [id]);

  if (!blog) {
    return <p>Loading blog for editing...</p>;
  }

  return <EditForm blog={blog} />;
}