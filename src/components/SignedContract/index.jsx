import React from 'react';
import "./index.css";
import { Column } from '@ant-design/plots';

export default function SignedContract() {
    const data = [
        {
          type: '10/07',
          sales: 620,
        },
        {
          type: '11/07',
          sales: 200,
        },
        {
          type: '12/07',
          sales: 430,
        },
        {
          type: '13/07',
          sales: 500,
        },
        {
          type: '14/07',
          sales: 100,
        },
        {
          type: '15/07',
          sales: 130,
        },
        {
          type: '16/07',
          sales: 230,
        },
    
    ];
    const config = {
      data,      
      color : `rgb(56 186 116)`, 
      borderRadius : '20px', 
      xField: 'type', 
      yField: 'sales', 
      columnWidthRatio: 0.8,
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      meta: {
        type: {
          alias: '类别',
        },
        sales: {
          alias: '销售额',
        },
      },
    };

    return (
        <div className="ct_SignedContract">
            <h2 className="ct_sc_header">
                Hợp đồng ký được
            </h2>
            <div className="ct_sc_byDate" >
                <div>
                    <i style={{color : 'white',fontSize : '30px'}} class="fa-regular fa-calendar-minus"></i>
                </div>
                <div>
                    <h3> 10/07/2022-16/07/2022 </h3>
                    <h3><span>120</span> hợp đồng </h3>
                </div>
            </div>
            <div className="ct_sc_statistic">
                <Column style={{margin : '10px 0 20px 0',height : '350px'}} {...config} />
            </div>
        </div>
    )
}











