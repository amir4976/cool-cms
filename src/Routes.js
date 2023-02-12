import Dushbord from './Pages/Dushbord/Dushbord'
import Project from './Pages/projects/Project'
import Followers from './Pages/followers/Followers'
import ProjectList from './Pages/porjectList/ProjectList'
import Campaigns from './Pages/campaigns/Campaigns'
import Security from './Pages/security/Security'
import PrivetChat from './Pages/privetChat/PrivetChat'
let Routes = [
    {path:'/' ,element:<Dushbord/> },
    {path:'/Project' ,element:<Project/> },
    {path:'/followers' ,element:<Followers/> },
    {path:'/projectList' ,element:<ProjectList/> },
    {path:'/campaigns' ,element:<Campaigns/> },
    {path:'/security' ,element:<Security/> },
    {path:'/privetChat' ,element:<PrivetChat/> },
    {path:'/chatDrawer' ,element:<Security/> },
]
export default Routes