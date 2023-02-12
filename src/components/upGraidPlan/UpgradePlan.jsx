import React from "react";
import "./upgridPlan.css";
import Mode from "../../Hooks/Mode";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
export default function UpgradePlan() {
  let [mode, color] = Mode();
  return (
    <div className="UpgradePlan">
      <div className="upgradePlan-info">
        <div className="upgradeTitle">
          <span className="upgrade-offer">دریافت تخفیف 50٪</span>
          <span className="upgrade-text-title">ارتقاع حساب کاربری</span>
          <span className="upgrade-dis">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span>
        </div>

        <div className="upgrade-performances-container">

          <div className="upgrade-performance">
            <div className="performance-cover"><AccountTreeIcon/></div>
            <div className="performance-title">
              <span className="performance-title-text">پروژه در ماه</span> <span  className="performance-dis-text">5000</span>
            </div>
          </div>

          <div className="upgrade-performance">
            <div className="performance-cover"><AllInclusiveIcon/></div>
            <div className="performance-title">
              <span  className="performance-title-text">محدودیت</span> <span className="performance-dis-text">نامحدود</span>
            </div>
          </div>

        </div>

        <div className="upgrade-btns">
          <button className="upgrade-btn">ارتقاع</button>
          <button className="questions-btn">سوالات پر تکرار</button>
        </div>
      </div>
      <img
        className="UpgradePlan-cover"
        src="./undraw_os_upgrade_re_r0qa.svg"
        alt=""
      />
    </div>
  );
}
