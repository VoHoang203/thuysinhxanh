import React, { useState } from "react";
// import data from "./data.json"
import anh1 from "../../assets/image_Blog/blog1.jpg";
import anh2 from "../../assets/image_Blog/blog2.png";
import anh3 from "../../assets/image_Blog/blog3.png";
import anh4 from "../../assets/image_Blog/blog4.png";
import anh5 from "../../assets/image_Blog/blog5.png";
import anh6 from "../../assets/image_Blog/blog6.jpeg";
import anh7 from "../../assets/image_Blog/blog7.webp";
import anh8 from "../../assets/image_Blog/blog8.jpg";

const data = {
  blogs: [
    {
      id: 1,
      image: anh1,
      title: "Bí quyết chọn bể cá phù hợp cho người mới bắt đầu",
      author: "Nguyễn Văn Hùng",
      shortContent:
        "Bạn mới bắt đầu chơi thủy sinh? Tìm hiểu cách chọn bể cá phù hợp với không gian và ngân sách của bạn.",
      content:
        "Khi bắt đầu hành trình chơi thủy sinh, việc chọn một bể cá phù hợp là bước đầu tiên và quan trọng nhất. Bể cá không chỉ là nơi nuôi dưỡng cá mà còn là một phần trang trí cho không gian sống của bạn. Đầu tiên, hãy xác định kích thước bể phù hợp với không gian nhà bạn. Một bể cá nhỏ từ 20-50 lít rất lý tưởng cho người mới vì dễ quản lý và chi phí thấp. Tiếp theo, hãy chọn chất liệu bể: kính thường hay kính cường lực. Kính cường lực bền hơn nhưng giá thành cao hơn. Ngoài ra, bạn cần xem xét hệ thống lọc nước và ánh sáng, vì chúng ảnh hưởng trực tiếp đến sức khỏe của cá và cây thủy sinh. Đừng quên chọn loại cá phù hợp với bể, ví dụ như cá bảy màu hoặc cá neon vì chúng dễ nuôi và không yêu cầu kỹ thuật cao. Cuối cùng, hãy cân nhắc ngân sách của bạn để không chi tiêu quá mức.",
    },
    {
      id: 2,
      image: anh2,
      title: "Top 5 loại cá cảnh dễ nuôi nhất cho bể thủy sinh",
      author: "Trần Thị Mai",
      shortContent:
        "Khám phá 5 loại cá cảnh dễ nuôi, lý tưởng cho người mới bắt đầu trong thế giới thủy sinh.",
      content:
        "Nuôi cá cảnh là một sở thích thú vị, nhưng không phải loại cá nào cũng phù hợp cho người mới. Dưới đây là 5 loại cá dễ nuôi nhất cho bể thủy sinh của bạn: 1) Cá bảy màu: Loài cá này nhỏ, nhiều màu sắc và sinh sản nhanh. 2) Cá neon: Với màu sắc rực rỡ, chúng tạo điểm nhấn cho bể cá mà không cần chăm sóc phức tạp. 3) Cá kiếm: Loài cá này khỏe mạnh và dễ thích nghi với nhiều điều kiện nước. 4) Cá betta: Cá betta có vẻ ngoài lộng lẫy, nhưng cần nuôi riêng để tránh đánh nhau. 5) Cá tỳ bà: Loài cá này giúp làm sạch bể bằng cách ăn rêu và thức ăn thừa. Những loại cá này không chỉ dễ chăm sóc mà còn giúp bể của bạn trở nên sinh động và đẹp mắt.",
    },
    {
      id: 3,
      image: anh3,
      title: "Cách thiết kế bể thủy sinh phong cách tự nhiên",
      author: "Lê Minh Tuấn",
      shortContent:
        "Học cách thiết kế một bể thủy sinh phong cách tự nhiên, mang thiên nhiên vào không gian sống.",
      content:
        "Bể thủy sinh phong cách tự nhiên (Nature Aquarium) là một xu hướng phổ biến, lấy cảm hứng từ cảnh quan thiên nhiên như rừng, núi, hay sông suối. Để thiết kế một bể thủy sinh tự nhiên, bạn cần bắt đầu với việc lập kế hoạch bố cục. Sử dụng đá, gỗ lũa và các loại cây thủy sinh như ráy, dương xỉ nước, hoặc rêu để tạo cảm giác gần gũi với thiên nhiên. Khi sắp xếp, hãy tạo độ dốc và các lớp cao thấp để tăng chiều sâu cho bể. Hệ thống ánh sáng là yếu tố quan trọng, hãy chọn đèn LED có cường độ ánh sáng phù hợp (khoảng 6500K) để cây phát triển tốt. Hệ thống CO2 cũng cần thiết để cây quang hợp và phát triển mạnh mẽ. Cuối cùng, chọn cá phù hợp như cá tetra hoặc cá thiên đường để hoàn thiện hệ sinh thái tự nhiên trong bể.",
    },
    {
      id: 4,
      image: anh4,
      title: "Hướng dẫn chăm sóc cây thủy sinh cho người mới",
      author: "Phạm Hồng Nhung",
      shortContent:
        "Tìm hiểu cách chăm sóc cây thủy sinh để bể cá của bạn luôn xanh tươi và khỏe mạnh.",
      content:
        "Cây thủy sinh không chỉ làm đẹp bể cá mà còn giúp duy trì chất lượng nước bằng cách hấp thụ chất thải và cung cấp oxy. Tuy nhiên, chăm sóc cây thủy sinh đòi hỏi sự chú ý đặc biệt. Đầu tiên, hãy chọn cây phù hợp với điều kiện bể của bạn. Những loại cây dễ trồng như ráy Anubias, rêu Java, hoặc cây tiêu thảo là lựa chọn lý tưởng cho người mới. Tiếp theo, đảm bảo cung cấp đủ ánh sáng (6-8 giờ mỗi ngày) và CO2 để cây quang hợp. Nếu bể của bạn không có hệ thống CO2, hãy cân nhắc sử dụng phân nước hoặc phân nền để cung cấp dinh dưỡng. Đừng quên cắt tỉa cây định kỳ để tránh cây mọc quá dày, gây cản trở dòng nước hoặc che khuất ánh sáng. Cuối cùng, kiểm tra chất lượng nước thường xuyên, vì cây thủy sinh nhạy cảm với sự thay đổi của pH và độ cứng của nước.",
    },
    {
      id: 5,
      image: anh5,
      title: "Làm thế nào để giữ nước bể cá luôn trong sạch?",
      author: "Hoàng Văn Nam",
      shortContent:
        "Bí kíp giữ nước bể cá trong sạch, giúp cá và cây thủy sinh phát triển khỏe mạnh.",
      content:
        "Nước sạch là yếu tố quan trọng nhất để duy trì một bể cá khỏe mạnh. Để giữ nước trong sạch, bạn cần một hệ thống lọc chất lượng, bao gồm lọc cơ học (loại bỏ cặn bẩn), lọc hóa học (loại bỏ độc tố), và lọc sinh học (phân hủy chất thải). Hãy thay 20-30% lượng nước trong bể mỗi tuần, nhưng tránh thay toàn bộ nước vì sẽ làm mất vi khuẩn có lợi. Sử dụng máy đo để kiểm tra các thông số như pH, amoniac, và nitrat định kỳ. Ngoài ra, hạn chế cho cá ăn quá nhiều để tránh thức ăn thừa làm ô nhiễm nước. Cây thủy sinh và các loài cá dọn bể như cá tỳ bà cũng giúp giảm rêu và cặn bẩn. Cuối cùng, hãy đảm bảo bể được đặt ở nơi tránh ánh nắng trực tiếp để hạn chế sự phát triển của tảo.",
    },
    {
      id: 6,
      image: anh6,
      title: "Cách chọn hệ thống lọc cho bể cá thủy sinh",
      author: "Trương Quốc Anh",
      shortContent:
        "Tìm hiểu các loại hệ thống lọc và cách chọn lọc phù hợp để giữ bể cá luôn sạch và khỏe mạnh.",
      content:
        "Hệ thống lọc là trái tim của một bể cá thủy sinh, đảm bảo nước luôn sạch và môi trường sống lý tưởng cho cá và cây. Có ba loại lọc chính: lọc cơ học (loại bỏ cặn bẩn), lọc hóa học (hấp thụ độc tố bằng than hoạt tính), và lọc sinh học (sử dụng vi khuẩn để phân hủy chất thải). Khi chọn hệ thống lọc, hãy xem xét kích thước bể và lượng sinh vật trong bể. Với bể nhỏ (dưới 50 lít), bộ lọc thác hoặc lọc trong là đủ. Bể lớn hơn cần lọc ngoài (canister filter) để xử lý hiệu quả hơn. Đảm bảo lưu lượng nước của bộ lọc gấp 4-6 lần thể tích bể mỗi giờ. Ngoài ra, hãy vệ sinh bộ lọc định kỳ nhưng tránh làm sạch quá mức để không tiêu diệt vi khuẩn có lợi. Một hệ thống lọc tốt sẽ giúp bể cá của bạn duy trì sự cân bằng sinh thái lâu dài.",
    },
    {
      id: 7,
      image: anh7,
      title: "Bí quyết nuôi cá betta trong bể thủy sinh",
      author: "Nguyễn Thị Lan",
      shortContent:
        "Học cách nuôi cá betta khỏe mạnh và tạo điểm nhấn cho bể thủy sinh của bạn.",
      content:
        "Cá betta, với vẻ ngoài lộng lẫy, là lựa chọn phổ biến cho bể thủy sinh. Tuy nhiên, nuôi cá betta cần chú ý đặc biệt để đảm bảo chúng khỏe mạnh. Đầu tiên, cá betta thích hợp với bể nhỏ (10-20 lít) vì chúng không cần không gian bơi lớn. Nhiệt độ nước lý tưởng là 24-28°C, vì vậy hãy sử dụng máy sưởi nếu cần. Cá betta không nên nuôi chung với các loài cá khác có tính hung dữ hoặc vây sặc sỡ, vì chúng có thể đánh nhau. Cây thủy sinh như ráy Anubias hoặc cây bụp là lựa chọn tốt vì không cần ánh sáng mạnh và dễ chăm sóc. Cho cá ăn vừa đủ, khoảng 2-3 viên thức ăn chuyên dụng mỗi ngày, để tránh ô nhiễm nước. Cuối cùng, thay nước 20-30% mỗi tuần và kiểm tra chất lượng nước thường xuyên để giữ môi trường ổn định.",
    },
    {
      id: 8,
      image: anh8,
      title: "Cách kiểm soát tảo trong bể cá thủy sinh",
      author: "Vũ Minh Đức",
      shortContent:
        "Khám phá các phương pháp hiệu quả để kiểm soát tảo, giữ bể cá luôn trong và đẹp mắt.",
      content:
        "Tảo là vấn đề phổ biến trong bể cá thủy sinh, đặc biệt khi ánh sáng quá mạnh hoặc chất dinh dưỡng dư thừa. Để kiểm soát tảo, đầu tiên hãy giảm thời gian chiếu sáng xuống 6-8 giờ mỗi ngày và tránh đặt bể gần ánh nắng trực tiếp. Sử dụng đèn LED có cường độ vừa phải (6500K) để hạn chế tảo phát triển. Tiếp theo, kiểm soát lượng thức ăn cho cá để tránh dư thừa dinh dưỡng, vì đây là nguồn nuôi tảo. Cây thủy sinh phát triển nhanh như cây tiêu thảo hoặc rêu Java có thể cạnh tranh chất dinh dưỡng với tảo, giúp giảm sự phát triển của chúng. Ngoài ra, nuôi một số loài cá dọn bể như cá tỳ bà hoặc tép cảnh cũng giúp làm sạch tảo. Nếu tảo vẫn xuất hiện, hãy sử dụng chất chống tảo (algaecide) với liều lượng nhỏ và cẩn thận để không ảnh hưởng đến cá và cây.",
    },
  ],
};

const Bloglist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data.blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Tính tổng số trang
  const totalPages = Math.ceil(data.blogs.length / blogsPerPage);

  // Hàm chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi chuyển trang
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
