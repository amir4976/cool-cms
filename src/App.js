import './App.css';
import { useRoutes } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/Navbar/Navbar';
import { useContext } from "react";
import { ThemeContext } from './contexts/Theme';
import SideBar from './components/sideBar/SideBar';
import  SwipeableTemporaryDrawer from './components/modalSideBar/ModalSideBar'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { display } from '@mui/system';
import ScrollToTop from "react-scroll-to-top";
function App() {
  const [{theme,isDark},toggleTheme] = useContext(ThemeContext)
  let AppBackground = null
  theme =='dark' ? AppBackground ={background:'#151521',}:AppBackground ={background:'#F3F6F9'};
  let AllRoutes = useRoutes(Routes)
  let disPlay = null
const Scroller =(event)=>{
  console.log(window.scrollY());
  console.log(event)
}
  return (
    <div className="App" onScroll={()=>Scroller} dir='rtl' style={AppBackground}>
     
        <Navbar/> 
        <div className="mainPage">
        <SideBar/>
        {AllRoutes}
        </div>
        
    <ScrollToTop smooth  component={<ArrowDropUpIcon/>} className='scrollBTN' />
    </div>
  );
}

export default App;
