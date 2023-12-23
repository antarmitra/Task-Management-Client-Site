import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgProfile, CgFileAdd } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div className="flex">
            <div className="md:w-64 w-40 min-h-screen bg-sky-300">
                <ul className="menu p-4">

                    <div className="mt-10">
                        <img className="w-20 h-20 rounded-full mx-auto" src={user.photoURL} alt="" />
                        <h1 className="text-center md:text-lg text-base font-medium">{user.displayName}</h1>
                        <p className="text-center md:text-lg text-base font-medium">{user.email}</p>
                    </div>

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
                            <CgProfile className="text-xl"></CgProfile>
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

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;