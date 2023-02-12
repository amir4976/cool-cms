import React from "react";
import "./todolist.css";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { Todos } from "../../../data";
import { Checkbox } from "@mui/material";
import WidgetHeader from "../widgetHeader/WidgetHeader";
export default function TodosStatus() {
  let [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  let mode = null;
  console.log(theme);
  if (theme == "dark") {
    mode = { background: "#1e1e2d", color: "#fff" };
  } else {
    mode = { background: "#fff", color: "#000" };
  }
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div style={mode} className="TodoListStatus-container">
      <WidgetHeader title="انجام دادن" />
      <div className=" todo-widget-container">
        {Todos.map((todo) => (
          <div className="todo" style={{ borderRight: `5px solid ${todo.color}` }}>
            <div className="right-todo">
              <Checkbox {...label} defaultChecked sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}/>

              <div className="todoInfo">
                <div className="todoTitle">{todo.todosName}</div>
                <span className="TodosTıme"> تازمان موعود {todo.timeOut} روز</span>
              </div>
            </div>
            <div className="left-todo">{todo.isNew && (<p className="NewIcon" style={{ background: todo.color }}>   جدید </p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
