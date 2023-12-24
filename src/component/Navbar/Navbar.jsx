import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navItems = <>
        <div className="lg:flex justify-between gap-7 items-center">
            <div className="text-base font-semibold uppercase "><NavLink to='/'>Home</NavLink></div>
            <div className="text-base font-semibold uppercase "> <NavLink to='about'>About</NavLink> </div>
            <div className="text-base font-semibold uppercase "> <NavLink to='blog'>Blog</NavLink> </div>
            <div className="text-base font-semibold uppercase "> <NavLink to='service'>Service</NavLink> </div>



            {
                user ? <>
                    <div className="flex gap-2 flex-row-reverse lg:flex-row">

                        <div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-4 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li className='text-black'><a>{user.displayName}</a></li>
                                    <li className='text-black'><a>{user.email}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleLogOut} className="btn btn-outline btn-primary text-white font-bold uppercase">Log Out</button>
                        </div>
                    </div>
                </>
                    :
                    <>
                        <li className="uppercase  font-semibold"><Link to='/login'>Login</Link></li>
                        <button className="btn btn-outline btn-primary uppercase"><Link to='/signup'>Sign Up</Link></button>
                    </>
            }
        </div>
    </>








    return (
        <div className="navbar bg-[#87C4FF] rounded-lg mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="text-2xl">TaskTrak</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {/* <div className="navbar-end"> 
                <a className="btn">Login</a>
            </div> */}
        </div>
    );
};

export default Navbar;