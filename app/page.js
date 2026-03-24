import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Simple CRUD App</h1>
      <br />

      <div>
        <Link href="/blog">
          <button>View All Blogs</button>
        </Link>
        {" "}
        <Link href="/blog/create">
          <button>Add New Blog</button>
        </Link>
      </div>
    </div>
  );
}