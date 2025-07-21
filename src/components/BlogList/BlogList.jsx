import React, { useState } from "react";
import data from "./data.json"
import { Link } from "react-router";



const Bloglist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data.blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(data.blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); 
  };
  return (
    <div style={{ paddingLeft: "50px" }}>
      <h1>Kiến thức thủy sinh</h1>
      <style>
        {`
          .blog-card {
            transition: box-shadow 0.3s, transform 0.3s;
          }
          .blog-card:hover {
            box-shadow: 0 8px 24px rgba(0,0,0,0.18);
            transform: translateY(-4px) scale(1.02);
            z-index: 2;
          }
          .blog-img {
            transition: transform 0.4s cubic-bezier(.4,2,.6,1);
          }
          .blog-card:hover .blog-img {
            transform: scale(1.08);
          }
          .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 32px 0 24px 0;
            gap: 8px;
          }
          .pagination button {
            background: #fff;
            border: 1px solid #bdbdbd;
            color: #333;
            padding: 6px 16px;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.2s, color 0.2s, border 0.2s;
            outline: none;
          }
          .pagination button:hover:not(:disabled) {
            background: #f0f0f0;
            border-color: #1976d2;
            color: #1976d2;
          }
          .pagination button.active {
            background: #1976d2;
            color: #fff;
            border-color: #1976d2;
            font-weight: bold;
          }
          .pagination button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}
      </style>
      {currentBlogs.map((blog) => (
        <Link 
          to={`/blogs/${blog.id}`}
          key={blog.id}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
          key={blog.id}
          className="blog-card"
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1280px",
            paddingRight: "50px",
            height: "200px",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            overflow: "hidden",
            marginTop: "24px",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <div
            style={{
              flex: "3",
              background: "#eee",
              overflow: "hidden",
            }}
          >
            <img
              src={blog.image}
              alt="blog"
              className="blog-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
          <div
            style={{
              flex: "7",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "8px",
                }}
              >
                {blog.title}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "#444",
                  marginBottom: "16px",
                }}
              >
                {blog.shortContent}
              </div>
            </div>
            <div
              style={{ fontStyle: "italic", color: "#888", fontSize: "14px" }}
            >
              Tác giả: {blog.author}
            </div>
          </div>
        </div>
        </Link>
        
      ))}

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Trước
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Sau
        </button>
      </div>
    </div>
  );
};

export default Bloglist;
