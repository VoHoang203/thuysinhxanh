import React from 'react'
const data = {
  blogs: [
    {
      id: 1,
      image: "/assets/image_Blog/blog1.jpg",
      title: "Bí quyết chọn bể cá phù hợp cho người mới bắt đầu",
      author: "Nguyễn Văn Hùng",
      shortContent: "Bạn mới bắt đầu chơi thủy sinh? Tìm hiểu cách chọn bể cá phù hợp với không gian và ngân sách của bạn.",
      content: "Khi bắt đầu hành trình chơi thủy sinh, việc chọn một bể cá phù hợp là bước đầu tiên và quan trọng nhất. Bể cá không chỉ là nơi nuôi dưỡng cá mà còn là một phần trang trí cho không gian sống của bạn. Đầu tiên, hãy xác định kích thước bể phù hợp với không gian nhà bạn. Một bể cá nhỏ từ 20-50 lít rất lý tưởng cho người mới vì dễ quản lý và chi phí thấp. Tiếp theo, hãy chọn chất liệu bể: kính thường hay kính cường lực. Kính cường lực bền hơn nhưng giá thành cao hơn. Ngoài ra, bạn cần xem xét hệ thống lọc nước và ánh sáng, vì chúng ảnh hưởng trực tiếp đến sức khỏe của cá và cây thủy sinh. Đừng quên chọn loại cá phù hợp với bể, ví dụ như cá bảy màu hoặc cá neon vì chúng dễ nuôi và không yêu cầu kỹ thuật cao. Cuối cùng, hãy cân nhắc ngân sách của bạn để không chi tiêu quá mức."
    },
    {
      id: 2,
      image: "/assets/image_Blog/blog2.png",
      title: "Top 5 loại cá cảnh dễ nuôi nhất cho bể thủy sinh",
      author: "Trần Thị Mai",
      shortContent: "Khám phá 5 loại cá cảnh dễ nuôi, lý tưởng cho người mới bắt đầu trong thế giới thủy sinh.",
      content: "Nuôi cá cảnh là một sở thích thú vị, nhưng không phải loại cá nào cũng phù hợp cho người mới. Dưới đây là 5 loại cá dễ nuôi nhất cho bể thủy sinh của bạn: 1) Cá bảy màu: Loài cá này nhỏ, nhiều màu sắc và sinh sản nhanh. 2) Cá neon: Với màu sắc rực rỡ, chúng tạo điểm nhấn cho bể cá mà không cần chăm sóc phức tạp. 3) Cá kiếm: Loài cá này khỏe mạnh và dễ thích nghi với nhiều điều kiện nước. 4) Cá betta: Cá betta có vẻ ngoài lộng lẫy, nhưng cần nuôi riêng để tránh đánh nhau. 5) Cá tỳ bà: Loài cá này giúp làm sạch bể bằng cách ăn rêu và thức ăn thừa. Những loại cá này không chỉ dễ chăm sóc mà còn giúp bể của bạn trở nên sinh động và đẹp mắt."
    },
    {
      id: 3,
      image: "/assets/image_Blog/blog3.png",
      title: "Cách thiết kế bể thủy sinh phong cách tự nhiên",
      author: "Lê Minh Tuấn",
      shortContent: "Học cách thiết kế một bể thủy sinh phong cách tự nhiên, mang thiên nhiên vào không gian sống.",
      content: "Bể thủy sinh phong cách tự nhiên (Nature Aquarium) là một xu hướng phổ biến, lấy cảm hứng từ cảnh quan thiên nhiên như rừng, núi, hay sông suối. Để thiết kế một bể thủy sinh tự nhiên, bạn cần bắt đầu với việc lập kế hoạch bố cục. Sử dụng đá, gỗ lũa và các loại cây thủy sinh như ráy, dương xỉ nước, hoặc rêu để tạo cảm giác gần gũi với thiên nhiên. Khi sắp xếp, hãy tạo độ dốc và các lớp cao thấp để tăng chiều sâu cho bể. Hệ thống ánh sáng là yếu tố quan trọng, hãy chọn đèn LED có cường độ ánh sáng phù hợp (khoảng 6500K) để cây phát triển tốt. Hệ thống CO2 cũng cần thiết để cây quang hợp và phát triển mạnh mẽ. Cuối cùng, chọn cá phù hợp như cá tetra hoặc cá thiên đường để hoàn thiện hệ sinh thái tự nhiên trong bể."
    },
    {
      id: 4,
      image: "/assets/image_Blog/blog4.png",
      title: "Hướng dẫn chăm sóc cây thủy sinh cho người mới",
      author: "Phạm Hồng Nhung",
      shortContent: "Tìm hiểu cách chăm sóc cây thủy sinh để bể cá của bạn luôn xanh tươi và khỏe mạnh.",
      content: "Cây thủy sinh không chỉ làm đẹp bể cá mà còn giúp duy trì chất lượng nước bằng cách hấp thụ chất thải và cung cấp oxy. Tuy nhiên, chăm sóc cây thủy sinh đòi hỏi sự chú ý đặc biệt. Đầu tiên, hãy chọn cây phù hợp với điều kiện bể của bạn. Những loại cây dễ trồng như ráy Anubias, rêu Java, hoặc cây tiêu thảo là lựa chọn lý tưởng cho người mới. Tiếp theo, đảm bảo cung cấp đủ ánh sáng (6-8 giờ mỗi ngày) và CO2 để cây quang hợp. Nếu bể của bạn không có hệ thống CO2, hãy cân nhắc sử dụng phân nước hoặc phân nền để cung cấp dinh dưỡng. Đừng quên cắt tỉa cây định kỳ để tránh cây mọc quá dày, gây cản trở dòng nước hoặc che khuất ánh sáng. Cuối cùng, kiểm tra chất lượng nước thường xuyên, vì cây thủy sinh nhạy cảm với sự thay đổi của pH và độ cứng của nước."
    },
    {
      id: 5,
      image: "/assets/image_Blog/blog5.png",
      title: "Làm thế nào để giữ nước bể cá luôn trong sạch?",
      author: "Hoàng Văn Nam",
      shortContent: "Bí kíp giữ nước bể cá trong sạch, giúp cá và cây thủy sinh phát triển khỏe mạnh.",
      content: "Nước sạch là yếu tố quan trọng nhất để duy trì một bể cá khỏe mạnh. Để giữ nước trong sạch, bạn cần một hệ thống lọc chất lượng, bao gồm lọc cơ học (loại bỏ cặn bẩn), lọc hóa học (loại bỏ độc tố), và lọc sinh học (phân hủy chất thải). Hãy thay 20-30% lượng nước trong bể mỗi tuần, nhưng tránh thay toàn bộ nước vì sẽ làm mất vi khuẩn có lợi. Sử dụng máy đo để kiểm tra các thông số như pH, amoniac, và nitrat định kỳ. Ngoài ra, hạn chế cho cá ăn quá nhiều để tránh thức ăn thừa làm ô nhiễm nước. Cây thủy sinh và các loài cá dọn bể như cá tỳ bà cũng giúp giảm rêu và cặn bẩn. Cuối cùng, hãy đảm bảo bể được đặt ở nơi tránh ánh nắng trực tiếp để hạn chế sự phát triển của tảo."
    }
  ]
};

const Bloglist = () => {
  return (
    <div style={{ paddingLeft: '50px' }}>
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
        `}
      </style>
      {data.blogs.map((blog) => (
        <div
          key={blog.id}
          className="blog-card"
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '1280px',
            paddingRight: '50px',
            height: '200px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            overflow: 'hidden',
            marginTop: '24px',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <div style={{
            flex: '3',
            background: '#eee',
            overflow: 'hidden'
          }}>
            <img
              src={blog.image}
              alt="blog"
              className="blog-img"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{
            flex: '7',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '8px' }}>
                {blog.title}
              </div>
              <div style={{ fontSize: '15px', color: '#444', marginBottom: '16px' }}>
                {blog.shortContent}
              </div>
            </div>
            <div style={{ fontStyle: 'italic', color: '#888', fontSize: '14px' }}>
              Tác giả: {blog.author}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Bloglist