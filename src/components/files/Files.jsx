import React from 'react'
import './file.css'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme'
import WidgetHeader from '../actionsStatus/widgetHeader/WidgetHeader'
import { files } from '../../data'
export default function Files() {
    let [{theme,isDark},toggleTheme] = useContext(ThemeContext)
    let mode = null
    

        if(theme=='dark'){
            mode = { background: "rgb(30, 30, 45)", color: "#fff" };
        }else{
            mode = { background: "#fff"}
        }

  return (
    <div className='Files-container' style={mode}>
        <WidgetHeader title='فایل ها' discretion='100 فایل در حال انتظار'/>
    <div className="files-dashboard-warper">
        {files.map((file)=>(
                <div className="file-container">
                    <img className='cover-file-dushbord' src={file.cover} alt="" />
                    <span>{file.title}</span>
                    <span className='view'>{file.view} بازدید</span>
                    <span>{file.size}</span>
                </div>
        ))}
    </div>
    </div>
  )
}
