import React from "react";
import './ShortOfLast24h.css'
import Mode from '../../Hooks/Mode'
import { Row,Col } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { dataChart } from "../../data";
export default function ShortOfLast24h() {
    let [mode, color] = Mode()
    return (
    <>
      <div className="shortOfLast24H-container" style={{background:mode,color:color}}>
        <div className="shortOfLast24h-header">
          <h3>خلاصه 24 ساعت گذشته</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect
                x="5"
                y="5"
                width="5"
                height="5"
                rx="1"
                fill="currentColor"
              ></rect>
              <rect
                x="14"
                y="5"
                width="5"
                height="5"
                rx="1"
                fill="currentColor"
                opacity="0.3"
              ></rect>
              <rect
                x="5"
                y="14"
                width="5"
                height="5"
                rx="1"
                fill="currentColor"
                opacity="0.3"
              ></rect>
              <rect
                x="14"
                y="14"
                width="5"
                height="5"
                rx="1"
                fill="currentColor"
                opacity="0.3"
              ></rect>
            </g>
          </svg>
        </div>
        <hr />
        <Row>
            <Col md={12} lg={4} className='shortOflast24h-performance-container'><div className="shortOflast24h-performance">
                <span>تلاش های ناموفق</span>
                <span>230</span>
                </div></Col>
            <Col md={12} lg={4} className='shortOflast24h-performance-container'><div className="shortOflast24h-performance">
                <span>تلاش های ناموفق</span>
                <span>230</span>
                </div></Col>
            <Col md={12} lg={4} className='shortOflast24h-performance-container'><div className="shortOflast24h-performance">
                <span>تلاش های ناموفق</span>
                <span>230</span>
                </div></Col>
        </Row>
        <hr/>
        <div className="shortOfLAst24H-chart">
            <div className="shortOflast24h-chart-header">
            <h4>نمودار ماهانه</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																</g>
															</svg>
            </div>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataChart}
          margin={{
            // top: 5,
            // right: 30,
            // left: 20,
            // bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 100, right: 10 }} radius={10} />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: 'rgb(43,43,64)' }} />
        </BarChart>
      </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
