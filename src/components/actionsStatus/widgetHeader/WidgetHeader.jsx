import React from "react";
import WindowIcon from '@mui/icons-material/Window';

import './WidgetHEader.css'
export default function WidgetHeader(prop) {
  return (
    <div className="widgetHeader">
      <div className="header-widget-title">
      <p className="WidgetTitle">{prop.title}</p>
      <p className="dis">{prop.discretion}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																</g>
															</svg>

                              

    </div>
  );
}
