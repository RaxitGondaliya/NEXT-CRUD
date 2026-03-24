import blogs from "./data";

export function getBlogs() {
  return blogs;
}

export function getBlog(id) {
  return blogs.find((blog) => blog.id === id);
}

export function createBlog(title, content) {
  const newBlog = {
    id: Date.now().toString(),
    title: title,
    content: content,
    createdAt: new Date().toISOString(),
  };
  
  blogs.unshift(newBlog);
  
  return newBlog;
}

export function updateBlog(id, title, content) {
  const index = blogs.findIndex((b) => b.id === id);
  
  if (index !== -1) {
    blogs[index].title = title;
    blogs[index].content = content;
    blogs[index].updatedAt = new Date().toISOString();
    return blogs[index];
  }
  
  return null;
}

export function deleteBlog(id) {
  const index = blogs.findIndex((b) => b.id === id);
  if (index !== -1) {
    blogs.splice(index, 1);
  }
}
