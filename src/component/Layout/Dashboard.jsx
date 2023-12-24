import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgProfile, CgFileAdd } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, } from "react-icons/md";



const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <div className="flex flex-col lg:flex-row">

            <button onClick={toggleNav} className="lg:hidden bg-[#7BD3EA] p-2 text-xl flex items-center justify-center gap-3">
                Menu {isNavOpen ? <MdKeyboardArrowUp></MdKeyboardArrowUp> : <MdKeyboardArrowDown></MdKeyboardArrowDown>}
            </button>



            <div className={`w-full lg:w-64 min-h-screen bg-[#7BD3EA] ${isNavOpen ? "" : 'hidden lg:block'} `}>

                <div className="w-full lg:w-64 lg:min-h-screen bg-[#7BD3EA]" >
                {/* className="md:w-64 w-40 min-h-screen bg-sky-300" */}


                    <div className="mt-10">
                        <img className="w-20 h-20 rounded-full mx-auto" src={user.photoURL} alt="" />
                        <h1 className="text-center md:text-lg text-base font-medium">{user.displayName}</h1>
                        <p className="text-center md:text-lg text-base font-medium">{user.email}</p>
                    </div>
                    <ul className="menu p-4">
                        {/* <div className="mt-10">
                        <img className="w-20 h-20 rounded-full mx-auto" src={user.photoURL} alt="" />
                        <h1 className="text-center md:text-lg text-base font-medium">{user.displayName}</h1>
                        <p className="text-center md:text-lg text-base font-medium">{user.email}</p>
                    </div> */}

                        {/* dashboard li */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to='/dashboard/myProfile'>
                                <CgProfile className="text-xl"></CgProfile>
                                <p className="md:text-base text-[10px] font-medium">My Profile</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/addTask">
                                <CgFileAdd className="text-xl"></CgFileAdd>
                                <p className="md:text-base text-[10px] font-medium">Add New Task</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/allTask">
                                <TfiMenuAlt className="text-xl"></TfiMenuAlt >
                                <p className="md:text-base text-[10px] font-medium">All Task</p>
                            </NavLink>
                        </li>





                        {/* home */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to='/'>
                                <FaHome className="text-xl"></FaHome>
                                <p className="md:text-base text-[10px] font-medium">Home</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;