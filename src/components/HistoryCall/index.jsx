import {
  DownOutlined,
  CaretDownOutlined,
  UserOutlined,
  PhoneOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import {
  Dropdown,
  Menu,
  Space,
  Typography,
  Table,
} from "antd";
import { Button } from "antd";
import { useState } from "react";
import "./index.css";
function HistoryCall() {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const handleToggleCheckBox = (id) => {
    const checkBox = document.querySelector(`#row-checkbox-${id}`);
    checkBox.classList.toggle("checkBox");
  };
  const [contentDropDown, setContentDropDown] = useState(true);
  const [checkBox, isCheckBox] = useState(false);

  const handleToggleDropDown = () => {
    setContentDropDown(!contentDropDown);
  };
  const { Title } = Typography;
  
  const dataHistory = [{
    id: "1",
      name: "John Brown",
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
  },{
    id: "2",
      name: "John Brown",
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
  },
  {
    id: "3",
      name: "John Brown",
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
  },
  {
    id: "4",
      name: "John Brown",
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
  },
  {
    id: "5",
      name: "John Brown",
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
  },{
    id: "6",
      name: "John Brown",
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
  },{
    id: "7",
      name: "John Brown",
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
  },{
    id: "8",
      name: "John Brown",
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
  }]

  const menu = (
    <Menu
      // onClick={handleMenuClick}
      items={[
        {
          label: "Hôm qua",
          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: "3 Ngày trước",
          key: "2",
          icon: <UserOutlined />,
        },
        {
          label: "Tuần trước",
          key: "3",
          icon: <UserOutlined />,
        },
      ]}
    />
  );
  const columns = [
    {
      title: "Tên khách hàng",
      dataIndex: "name",
    },
    {
      title: "Phân loại",
      dataIndex: "type",
    },
    {
      title: "SĐT",
      dataIndex: "tel",
    },
    {
      title: "Lần gọi cuối",
      dataIndex: "lastCall",
    },
    {
      title: "Lần gọi sau",
      dataIndex: "nextCall",
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
    },
    {
      title: "",
      dataIndex: "active",
    },
  ];
  const data = dataHistory.map((item,index)=>{ 
      return {
        key: index,
        name: <div className="first-col col1">{item.name}</div>,
        type: item.type,
        tel: item.tel,
        lastCall: item.lastCall,
        nextCall: item.nextCall,
        note: item.note,
        active: [
          <Space size="middle">
            <PhoneOutlined
              style={{
                fontSize: "12px",
                padding: "10px",
                borderRadius: "50%",
                backgroundColor: "#37B170",
                color: "white",
              }}
            />
            <CheckSquareOutlined
              style={{
                fontSize: "32px",
                padding: "10px",
                color: "#ccc",
              }}
              id="row-checkbox-1"
              className=""
              onClick={() => handleToggleCheckBox(item.id)}
            ></CheckSquareOutlined>
          </Space>,
            ]
    }
    });
  return (
    <div className="historyCall_wrap">
      <div className="historyCall_header">
        <CaretDownOutlined
          style={{ fontSize: "16px", color: "#8c8c8c" }}
          onClick={handleToggleDropDown}
        />
        <Title level={4} style={{ margin: "0px 16px" }} className="no-select">
          Lịch gọi điện
        </Title>
        <Dropdown overlay={menu}>
          <Button
            type="primary"
            style={{
              borderRadius: "8px",
              backgroundColor: "#37B170",
              fontWeight: "600",
            }}
          >
            <Space>
              Hôm nay
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className={`historyCall_content`}>
        {contentDropDown && (
          <Table
            columns={columns}
            dataSource={data}
            size="small"
            pagination={{
              pageSize: 5,
              className: "pagination",
              total: 200,
              showTotal: (total) => `1-20 of ${total}`,
              onChange: (page) => {
                console.log(page);
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default HistoryCall;
