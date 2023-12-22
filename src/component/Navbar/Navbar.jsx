import { Link } from "react-router-dom";


const Navbar = () => {
    const navItems = <>
        <div className="lg:flex gap-5">
            <div className="text-base font-medium">Home</div>
            <div className="text-base font-medium">About</div>
            <div className="text-base font-medium">Work</div>
            <div className="text-base font-medium">Contact</div>
            <div className="text-base font-medium border-2 border-white p-2 rounded-lg btn"><Link to="/login">Login</Link></div>
            <div className="text-base font-medium bg-white p-2 rounded-lg btn">SignUp</div>
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