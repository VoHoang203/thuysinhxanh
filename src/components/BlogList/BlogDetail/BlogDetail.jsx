import React from "react";
import { useParams, Link } from "react-router";
import data from "../data.json";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = data.blogs.find((b) => b.id === Number(id));
  if (!blog) return <div>Không tìm thấy bài viết</div>;

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        padding: 32,
      }}
    >
      <Link to="/blogs" style={{ textDecoration: "none" }}>
        <button style={{ marginBottom: 24, padding: "8px 20px", borderRadius: 4, border: "1px solid #1976d2", background: "#1976d2", color: "#fff", cursor: "pointer" }}>
          ← Quay về danh sách blog
        </button>
      </Link>
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: "100%", borderRadius: 8, marginBottom: 24 }}
      />
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>{blog.title}</h1>
      <div style={{ color: "#888", marginBottom: 24 }}>
        Tác giả: {blog.author}
      </div>
      <div style={{ fontSize: 18, lineHeight: 1.7 }}>{blog.content}</div>
    </div>
  );
}