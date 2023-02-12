import React from "react";
import "./weekleyReport.css";
import {WeeklySell,data} from "../../data";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function WeekleyReport() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  let mode = null;
  if (theme == "dark") {
    mode = { background: "#1e1e2d", color: "#fff" };
  } else {
    mode = { background: "#fff" };
  }

  return (
    <div className="weeklyReport-container" style={mode}>
      <div className="weeklyRHeader">
        <h6 className="weekley-Title">وضعیت فروش هفته</h6>
        <span className="allSells">0000 فروش</span>
      </div>
      <div className="transActions">
        <ul className="ul-Transaction">
          {WeeklySell.map((report)=>(
            <li className="ul-transaction-item">
            <div className="transAction-Prof">
              <div className="img-prof-container" >
                <img className="transactionProf" src={report.icon} alt="" />
              </div>
              <div className="transaction-info">
                <span className="transaction-title">{report.title}</span>
                <span className="transaction-name">{report.personName}</span>
              </div>
            </div>
            <div className="transaction-sell">{report.sell} $</div>
          </li>
          ))}

          
        </ul>

      </div>
      <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        > <Tooltip/>
          <Area type="monotone" dataKey="uv" stroke="#000" fill="#2b2b40" />
        </AreaChart>
       
      </ResponsiveContainer>
      </div>
    </div>
  );
}
