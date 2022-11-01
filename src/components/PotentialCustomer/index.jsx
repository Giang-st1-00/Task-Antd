import {
    CaretDownOutlined,

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

export default function PotentialCustomer() {

    const [contentDropDown, setContentDropDown] = useState(true);
    const { Title } = Typography;
    const data = [];

    //drowdown trans_call
    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <a
                    class="pc_menu"
                    // style={{backgroundColor : 'black', color : 'white'}}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                  Chuyển sang lịch gọi điện 
                </a>
              ),
            },
          ]}
        />
    );
    //dropdown potential_customer
    const menu_potential_customer = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <div>
                    <p><span style={{color : 'rgb(56 186 116)'}}>78%</span> quỹ dự phòng</p>
                    <p><span style={{color : 'rgb(186 182 56)'}}>50%</span> quỹ học vấn</p>
                    <p><span style={{color : 'rgb(186 56 56)'}}>35%</span> quỹ hưu trí</p>
                </div>
              ),
            },
          ]}
        />
    );      


    //table potentialCustomer 

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
        title: "Điểm tiềm năng",        
        dataIndex: "ptt_point",     
        },
        {
            title: "",
            dataIndex: "note",
        },
        {
        title: "",
        dataIndex: "trans_call",
        },
    ];

    const getdata = [
        ['John Brown','cá nhân','0571-22098909','90% quỹ hưu trí'],
        ['Devon Lane','cá nhân','0571-22098909','78% quỹ dự phòng'],
        ['Cameron Williamson','cá nhân','0571-22098909','78% quỹ dự phòng'],
        ['Jane Cooper','cá nhân','0571-22098909','78% quỹ dự phòng'],
        ['Devon Lane','cá nhân','0571-22098909','78% quỹ dự phòng'],
        ['John Brown','cá nhân','0571-22098909','90% quỹ hưu trí'],
        ['Cameron Williamson','cá nhân','0571-22098909','78% quỹ dự phòng'],
        ['John Brown','cá nhân','0571-22098909','78% quỹ dự phòng'],
    ]

    function tb_potential_customer() {
        getdata.map((tmp , index) => {
            data.push({
                key : index,
                name : <div className="first-col col1">{tmp[0]}</div>,
                type: tmp[1],
                tel: tmp[2],
                note : <i className="tb_pt_ct_i" style={{borderRadius : '100px',border : '1px solid #333',padding: '3px 8px',margin : '0 30px'}} class="fa-solid fa-exclamation"></i>,
                ptt_point : 
                <Dropdown
                    overlay={menu_potential_customer}
                    placement="topLeft"
                    arrow={{
                        pointAtCenter: true,
                    }}
                    
                >
                    <Button style={{border : 'none',margin: '0',height : '100%',color : 'var(--color-button)'}}>
                        {tmp[3]}
                    </Button>
                </Dropdown>
         
            })
        })
        
        data.map((datas, index) => {
                datas.trans_call = [
                    <Space size="middle">
                        <Dropdown
                            overlay={menu}
                            placement="topLeft"
                            arrow={{
                                pointAtCenter: true,
                            }}
                        >
                            <Button style={{border : 'none',margin: '0',height : '100%',}}>
                                <i 
                                    id={`trans_cal_call_${index}`}
                                    style={{fontSize: "25px",padding: "10px 20px",}} 
                                    class="fa-solid fa-phone"
                                    onClick={() => handleToggleCheckBox(index)}
                                >
                                </i>
                            </Button>
                        </Dropdown>
                    
                    </Space>
            ]
        })
        

        // for (let i = 0; i<data.length;i++) {
            
        //     data[i].trans_call = [
        //             <Space size="middle">
        //                 <Dropdown
        //                     overlay={menu}
        //                     placement="topLeft"
        //                     arrow={{
        //                         pointAtCenter: true,
        //                     }}
        //                 >
        //                     <Button style={{border : 'none',margin: '0',height : '100%',}}>
        //                         <i 
        //                             id={`trans_cal_call_${i}`}
        //                             style={{fontSize: "25px",padding: "10px 20px",}} 
        //                             class="fa-solid fa-phone"
        //                             onClick={() => handleToggleCheckBox(i)}
        //                         >
        //                         </i>
        //                     </Button>
        //                 </Dropdown>
                    
        //             </Space>
        //     ]

        // }
    }

    tb_potential_customer();

    

    const handleToggleDropDown = () => {
        setContentDropDown(!contentDropDown);
    };

    const handleToggleCheckBox = (id) => {
        const checkBox = document.querySelector(`#trans_cal_call_${id}`);
        checkBox.classList.toggle("checkBox");
    };

    return (
        <div className="potentialCustomer">
            <div className="potentialCustomer_header">
                <CaretDownOutlined
                style={{ fontSize: "16px", color: "#8c8c8c" }}
                onClick={handleToggleDropDown}
                />
                <Title level={4} style={{ margin: "0px 16px" }} className="no-select">
                    Top 10 khách hàng tiềm năng
                </Title>
            </div>
            <div className={`potentialCustomer_content`}>
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
    )
}









