import React, { useEffect, useState } from "react";
import { Row} from "antd";
import "./index.css";
import {
  Checkbox,
  Slider,
  Popover,
  Segmented,
} from "antd";

function SideBarTest() {
  const [val_scs, setVal_scs] = useState(0);

  useEffect(() => {
    handle_scroll();
  });

  //data
  const data_cal_week = [
    {
      name: "Thứ 2",
    },
    {
      name: "Thứ 3",
    },
    {
      name: "Thứ 4",
    },
    {
      name: "Thứ 5",
    },
    {
      name: "Thứ 6",
    },
    {
      name: "Thứ 7",
    },
    {
      name: "CN",
    },
  ];

  const data_sb_content = [
    {
      name_business: "BrookLyn Simmons (Doanh nghiệp -5 người)",
      content: "Tư vấn hợp đồng bảo hiểm",
      date: "10/07/2022",
      time: "08:15 (20p)",
      adress: "Lô 22, số 35 Lê Văn Thiêm",
    },
    {
      name_business: "BrookLyn Simmons (Doanh nghiệp -5 người)",
      content: "Tư vấn hợp đồng bảo hiểm",
      date: "10/07/2022",
      time: "08:15 (20p)",
      adress: "Lô 22, số 35 Lê Văn Thiêm",
    },
    {
      name_business: "BrookLyn Simmons (Doanh nghiệp -5 người)",
      content: "Tư vấn hợp đồng bảo hiểm",
      date: "10/07/2022",
      time: "08:15 (20p)",
      adress: "Lô 22, số 35 Lê Văn Thiêm",
    },
    {
      name_business: "BrookLyn Simmons (Doanh nghiệp -5 người)",
      content: "Tư vấn hợp đồng bảo hiểm",
      date: "10/07/2022",
      time: "08:15 (20p)",
      adress: "Lô 22, số 35 Lê Văn Thiêm",
    },
    {
      name_business: "BrookLyn Simmons (Doanh nghiệp -5 người)",
      content: "Tư vấn hợp đồng bảo hiểm",
      date: "10/07/2022",
      time: "08:15 (20p)",
      adress: "Lô 22, số 35 Lê Văn Thiêm",
    },
    {
      name_business: "BrookLyn Simmons (Doanh nghiệp -5 người)",
      content: "Tư vấn hợp đồng bảo hiểm",
      date: "10/07/2022",
      time: "08:15 (20p)",
      adress: "Lô 22, số 35 Lê Văn Thiêm",
    },
    {
      name_business: "BrookLyn Simmons (Doanh nghiệp -5 người)",
      content: "Tư vấn hợp đồng bảo hiểm",
      date: "10/07/2022",
      time: "08:15 (20p)",
      adress: "Lô 22, số 35 Lê Văn Thiêm",
    },
    {
      name_business: "BrookLyn Simmons (Doanh nghiệp -5 người)",
      content: "Tư vấn hợp đồng bảo hiểm",
      date: "10/07/2022",
      time: "08:15 (20p)",
      adress: "Lô 22, số 35 Lê Văn Thiêm",
    },
    {
      name_business: "BrookLyn Simmons (Doanh nghiệp -5 người)",
      content: "Tư vấn hợp đồng bảo hiểm",
      date: "10/07/2022",
      time: "08:15 (20p)",
      adress: "Lô 22, số 35 Lê Văn Thiêm",
    },
    {
      name_business: "BrookLyn Simmons (Doanh nghiệp -5 người)",
      content: "Tư vấn hợp đồng bảo hiểm",
      date: "10/07/2022",
      time: "08:15 (20p)",
      adress: "Lô 22, số 35 Lê Văn Thiêm",
    },
    {
      name_business: "BrookLyn Simmons (Doanh nghiệp -5 người)",
      content: "Tư vấn hợp đồng bảo hiểm",
      date: "10/07/2022",
      time: "08:15 (20p)",
      adress: "Lô 22, số 35 Lê Văn Thiêm",
    },
  ];

  //function handle

  function handle_scroll() {
    let sb_content = document.querySelector(".sb_content");
    let sb_cal_row = document.querySelector(".sb_cal_row");
    Object.assign(document.querySelector(".sb_content").style, {
      maxHeight: `${(sb_cal_row.offsetHeight + 40) * 5}px`,
    });
  }

  //function component

  function SideBarHeader() {
    const defaultCheckedList = [];
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const data_content_apt = [
      "Tư vấn hợp đồng bảo hiểm",
      "Ký hợp đồng",
      "Sinh nhật",
      "Kí hợp đồng",
    ];

    const CheckboxGroup = Checkbox.Group;

    const onChange_filter = (list) => {
      setCheckedList(list);
      setIndeterminate(!!list.length && list.length < data_content_apt.length);
      setCheckAll(list.length === data_content_apt.length);
    };

    const onChange = (value) => {
      setVal_scs(value);
    };

    function CheckBox() {
      return (
        <div className="sb_filter">
          <h3>
            Nội dung cuộc hẹn
          </h3>
          <CheckboxGroup
            options={data_content_apt}
            value={checkedList}
            onChange={onChange_filter}
          />
        </div>
      );
    }

    return (
      <div className="sb_sideBar_header">
        <h2 style={{ fontWeight: "bold", margin: "auto 0" }}>Lịch hẹn gặp</h2>

        <div style={{ width: "30%" }}>
          <div>
            <h3 style={{ fontWeight: "bold", color: "var(--color-button)" }}>
              Hoàn thành {val_scs}/64
            </h3>
          </div>
          <Slider
            min={0}
            max={64}
            defaultValue={64}
            value={val_scs}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div
          className="cpn_filter"
        >
          <Popover
            content={<CheckBox />}
            trigger="click"
            placement="bottomRight"
          >
            <h3 style={{ margin: "auto 0" }}>
              <span>
                1
              </span>
              Bộ lọc
              <i
                style={{ margin: "0 0 0 20px" }}
                class="fa-solid fa-filter"
              ></i>
            </h3>
          </Popover>
        </div>
      </div>
    );
  }

  function SbCalWeek() {
    return (
      <div className="sb_cal_week">
        <Segmented
          options={["Thứ 2", "Thứ3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"]}
        />
      </div>
    );
  }

  function SbContent() {
    return (
      <div className="sb_content">
        <Row>
          {data_sb_content.map((tmp) => {
            return (
              <div
                className="sb_cal_row"
              >
                <div
                  className="sb_intro"
                >
                  <div
                    className="sb_intro_mid"
                  >
                    <i
                      class="fa-solid fa-building sb_i_company"
                      style={{ fontSize: "20px", margin: "0 20px 0 0" }}
                    ></i>
                    <div>
                      <h2 style={{ margin: "0" }}>{tmp.name_business}</h2>
                      <p>{tmp.content}</p>
                    </div>
                  </div>
                  <div>
                    <i
                      style={{ fontSize: "25px" }}
                      class="fa-regular fa-square-check"
                    ></i>
                  </div>
                </div>
                <div className="sb_intro_mag">
                  <div>
                    <div>
                      <h3>
                        <i class="fa-solid fa-calendar-days"></i>
                        Ngày hẹn :
                      </h3>
                      <p>{tmp.date}</p>
                    </div>
                  </div>
                  {/* <hr/> */}
                  <div>
                    <div>
                      <h3>
                        <i class="fa-regular fa-clock"></i>
                        Thời gian :
                      </h3>
                      <p>{tmp.time}</p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h3>
                        <i class="fa-solid fa-location-dot"></i>
                        Địa điểm :
                      </h3>
                      <p>{tmp.adress}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </div>
    );
  }

  return (
    <div className="sb">
      <SideBarHeader />
      <SbCalWeek />
      <SbContent />
    </div>
  );
}

export default SideBarTest;
