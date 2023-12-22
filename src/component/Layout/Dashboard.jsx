import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";



const Dashboard = () => {
    return (
        <div className="flex">
            <div className="md:w-64 w-40 min-h-screen bg-sky-300">
                <ul className="menu p-4">
                    <li>
                        <NavLink to='myprofile'>
                            <CgProfile className="text-xl"></CgProfile>
                            <p className="md:text-base text-[10px] font-medium">My Profile</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='newTasks'>
                            {/* <MdRateReview className="text-xl"></MdRateReview> */}
                            <p className="md:text-base text-[10px] font-medium">New Tasks</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='previousTask'>
                            {/* <MdRateReview className="text-xl"></MdRateReview> */}
                            <p className="md:text-base text-[10px] font-medium">Previous Tasks</p>
                        </NavLink>
                    </li>


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
    );
};

export default Dashboard;