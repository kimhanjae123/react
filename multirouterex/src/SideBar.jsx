import { Outlet } from 'react-router-dom';

const SideBar=()=>{
  return (
        <>
            <div style={{width:"200px",height:"800px",backgroundColor:"lightpink",float:"left"}}>
                <a href="myinfo">MyInfo</a>
                <a href="mybookmark">Mybookmark</a>
            </div>
            <Outlet/>
        </>
    )
}

export default SideBar;