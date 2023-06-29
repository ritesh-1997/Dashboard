import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext} from '../contexts/ContextProvider';
import {links} from '../data/dummy';

const Sidebar = () => {
  const {activeMenu,setActiveMenu,screenSize,currentColor} = useStateContext();
  // const activeMenu = true;
  const activeLink ='flex items-cener gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink ='flex items-cener gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize<=900){
      setActiveMenu(false);
    }
  };
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && 
      (<>
        <div className='flex justify-between items-center'>
          <Link to="/" 
          onClick={handleCloseSidebar} 
          className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <SiShopware className='text-3xl'/> <span>Shoppy</span>
          </Link>
          <TooltipComponent content="Menu" position='BottomCenter'>
            <button 
            type="button" 
            onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
            className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block'
            >
              <MdOutlineCancel/>
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
          {links.map((item)=>(
            <div key={item.title}>
              <p>
                {item.title}
              </p>
              {item.links.map((link)=>(
                <NavLink
                  to={`${link.name}`}
                  key={link.name}
                  onClick={handleCloseSidebar}
                  style={({isActive})=>({backgroundColor:isActive?currentColor:''})}
                  className={({isActive})=>isActive?activeLink:normalLink}
                >
                  {link.icon}
                  <span className='capitalize'>{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar
