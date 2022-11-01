import { useState } from "react";
import {
  CaretDownOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Typography,
  List,
  Badge,
} from "antd";
import "./index.css";
function MissCall() {
  const { Title } = Typography;
  const [contentDropDown, setContentDropDown] = useState(true);
  const [checkBox, isCheckBox] = useState(false);
  const data = [
    {
      name: "Jenny Wilson",              
      title: "Tư vấn hợp đồng",
      time: "08:15-08:30",
      date: "12/06/2022",
    },
    {
      name: "Jenny Wilson",
      title: "Tư vấn hợp đồng",
      time: "08:15-08:30",
      date: "12/06/2022",
    },
    {
      name: "Jenny Wilson",
      title: "Tư vấn hợp đồng",
      time: "08:15-08:30",
      date: "12/06/2022",
    },
    {
      name: "Jenny Wilson",
      title: "Tư vấn hợp đồng",
      time: "08:15-08:30",
      date: "12/06/2022",
    },
    {
      name: "Jenny Wilson",
      title: "Tư vấn hợp đồng",
      time: "08:15-08:30",
      date: "12/06/2022",
    },
    {
      name: "Jenny Wilson",
      title: "Tư vấn hợp đồng",
      time: "08:15-08:30",
      date: "12/06/2022",
    },
    {
      name: "Jenny Wilson",
      title: "Tư vấn hợp đồng",
      time: "08:15-08:30",
      date: "12/06/2022",
    },
    {
      name: "Jenny Wilson",
      title: "Tư vấn hợp đồng",
      time: "08:15-08:30",
      date: "12/06/2022",
    },
    {
      name: "Jenny Wilson",
      title: "Tư vấn hợp đồng",
      time: "08:15-08:30",
      date: "12/06/2022",
    },
    {
      name: "Jenny Wilson",
      title: "Tư vấn hợp đồng",
      time: "08:15-08:30",
      date: "12/06/2022",
    },
    {
      name: "Jenny Wilson",
      title: "Tư vấn hợp đồng",
      time: "08:15-08:30",
      date: "12/06/2022",
    },
  ];
  const handleToggleDropDown = () => {
    setContentDropDown(!contentDropDown);
  };

  return (
    <div className="missCall_wrap">
      <div className="missCall_header">
        <Title level={4} style={{ margin: "0px 16px" }} className="no-select">
          <CaretDownOutlined
            style={{ fontSize: "16px", color: "#8c8c8c", marginRight: "20px" }}
            onClick={handleToggleDropDown}
          />
          Cuộc hẹn bị lỡ
        </Title>
      </div>
      <div className="missCall_content">
        {contentDropDown && (
          <List
            pagination={{
              pageSize: 8,
              className: "pagination",
              total: 200,
              showTotal: (total) => `1-20 of ${total}`,
              onChange: (page) => {
                console.log(page);
              },
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Badge status="error" />}
                  title={item.name}
                  description={item.title}
                />
                <List.Item.Meta
                  className="missCall_time"
                  avatar={<ClockCircleOutlined className="color-error" />}
                  title={item.time}
                  description={item.date}
                />
                <Button className="button">CSKH</Button>
              </List.Item>
            )}
          ></List>
        )}
      </div>
    </div>
  );
}

export default MissCall;
