import { createBrowserRouter } from "react-router-dom";
import MySlideComp from "../components/MySlideComp";
import MyImages from "../components/MyImages";
import ParentComp from "../components/ParentComp";
import PageNotFoundComp from "../components/PageNotFoundComp";
import ReactHooksComp from "../hooks/ReactHooksComp";
import UseStateHookComp from "../hooks/UseStateHookComp";
import UseEffectHookComp from "../hooks/UseEffectHookComp";
import MainDashboardComp from "../layout/MainDashboardComp";



const router =createBrowserRouter([

    {path:"maindashboard" ,element:<MainDashboardComp></MainDashboardComp>,children:[
  //1.Default Routing
  {path:"" ,element:<MySlideComp></MySlideComp>},
    

  //2.Naming Routing
  {path:"mySlider" ,element:<MySlideComp></MySlideComp>},
  {path:"myImages" ,element:<MyImages></MyImages>},
 
 

  //3.Parameterized Routing
  {path:"parent" ,element:<ParentComp></ParentComp>},//Naming Routing
  {path:"parent/:id" ,element:<ParentComp></ParentComp>},//Parameterized Routing

  //4.Child Routing
  {path:"reactHook" ,element:<ReactHooksComp></ReactHooksComp>,children:[
      {path:"useState",element:<UseStateHookComp></UseStateHookComp>},
      {path:"useEffect",element:<UseEffectHookComp></UseEffectHookComp>},
  ]},

    ]},
  

    //5.WildCard Routing:
    {path:"*" ,element:<PageNotFoundComp></PageNotFoundComp>}
])

export default router;