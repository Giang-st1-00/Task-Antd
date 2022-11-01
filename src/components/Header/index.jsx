import { Row } from "antd";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const datas = [
  {
    title: "Dashboard",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Khách hàng tiềm năng",
    icon: "fa-solid fa-user-group",
  },
  {
    title: "Quản lí lịch hẹn",
    icon: "fa-regular fa-calendar-days",
  },
  {
    title: "Tư vấn",
    icon: "fa-solid fa-user-doctor",
  },
  {
    title: "Chăm sóc",
    icon: "fa-solid fa-phone",
  },
  {
    title: "Hỏi đáp",
    icon: "fa-regular fa-circle-question",
  },
  {
    title: "Kiến thức tư vấn tài chính",
    icon: "fa-solid fa-book-open",
  },
];

function HeaderTest() {
  return (
    <Row style={{ display: "flex", justifyContent: "space-around" }}>
      {datas.map((data) => {
        return (
          <>
            <Link style={{ color: "black" }} to="/">
              <i className={data.icon} style={{ margin: "0 20px" }}></i>
              {data.title}
            </Link>
          </>
        );
      })}
    </Row>
  );
}

export default HeaderTest;
