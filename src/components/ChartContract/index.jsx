import { Typography } from "antd";
import "./index.css";
import React from "react";
import { Pie } from "@ant-design/plots";
const ChartContract = () => {
  const { Title } = Typography;
  const data = [
    {
      type: "Không có hợp đồng",
      value: 87,
    },
    {
      type: "Hợp đồng",
      value: 120,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    color: ["#E37460", "#3DBD78"],
    radius: 1,
    innerRadius: 0.66,

    statistic: {
      title: {
        customHtml: (container, view, datum) => {
          let text;
          if (datum) {
            text = datum.type;
            if (text === "Không có hợp đồng") {
              text = ` <div style=display:flex;justify-content:center;align-items:center;flex-wrap:wrap
           >Không hợp đồng/ <span>Cuộc hẹn</span></div>`;
              return text;
            }
          } else {
            text = `<span>Total</span/>`;
            return text;
          }
          return text + "/ Cuộc hẹn";
        },
      },

      content: {
        customHtml: (container, view, datum, data) => {
          const { width } = container.getBoundingClientRect();
          const value = `${
            datum ? datum.value : data.reduce((r, d) => r + d.value, 0)
          }`;
          const percent = Math.round(
            (value / data.reduce((r, d) => r + d.value, 0)) * 100
          );
          return percent + "%";
        },
      },
    },
    legend: {
      position: "bottom",
      itemName: {
        formatter: (text, item) => {
          if (text == "Không có hợp đồng") {
            return "Cuộc hẹn " + text;
          } else {
            return "Cuộc hẹn có " + text;
          }
        },
      },
    },
    interactions: [
      {
        type: "pie-statistic-active",
      },
      { type: "tooltip" },
    ],
  };
  return (
    <div className="chartContract_wrap">
      <Title level={4} style={{ marginBottom: "65px" }}>
        Tỷ lệ hợp đồng/cuộc hẹn
      </Title>
      <Pie {...config} />
    </div>
  );
};
export default ChartContract;
