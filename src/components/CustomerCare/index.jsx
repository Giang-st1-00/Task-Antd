import { useState } from "react";
import {
  CaretDownOutlined,
} from "@ant-design/icons";
import {
  Button,
  Typography,
  List,
  Badge,
} from "antd";
import "./index.css";
function CustomerCare() {
  const { Title } = Typography;
  const [contentDropDown, setContentDropDown] = useState(true);
  const [checkBox, isCheckBox] = useState(false);
  const data = [
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
    {
      name: "Marvin McKinney",
      birthDay: "sinh nhật 29/07/2022 ",
    },
  ];
  const handleToggleDropDown = () => {
    setContentDropDown(!contentDropDown);
  };

  return (
    <div className="customerCare_wrap">
      <div className="customerCare_header">
        <Title level={4} style={{ margin: "0px 16px" }} className="no-select">
          <CaretDownOutlined
            style={{ fontSize: "16px", color: "#8c8c8c", marginRight: "20px" }}
            onClick={handleToggleDropDown}
          />
          Khách hàng cần chăm sóc
        </Title>
       </div>
      <div className="customerCare_content">
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
                  avatar={<Badge status="success" />}
                  title={item.name}
                  description={item.birthDay}
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

export default CustomerCare;
