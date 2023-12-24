import { Link } from 'react-router-dom';
import banner from "../../../src/assets/image/background1.png"

import "./Banner.css"


const Banner = () => {
    return (
        <div>
            <div className='md:flex flex-col-reverse gap-8 banner'>
                {/* Image on top for small devices */}
                <div className='md:hidden'>
                    <img className='w-full' src={banner} alt="" />
                </div>

                {/* Text on top for medium and large devices */}
                <div className='md:flex md:flex-row '>
                    <div className='md:w-full lg:w-1/2 md:mt-14 lg:mt-40 mt-5 md:ml-10 ml-5 md:space-y-4 space-y-2'>
                        <h1 className="lg:text-5xl md:text-3xl font-semibold">
                            Get more done <br />with <span className='text-[#00DFA2]'>TaskTrak</span> <br /> tasks.
                        </h1>
                        <p className="lg:text-base md:text-sm">
                            Plan, organize and collaborate on any project with <br /> powerful task management that can be customized for every need.
                        </p>
                        <button className="px-2 py-2 rounded-lg bg-[#00DFA2] text-white font-medium">
                            <Link to="/dashboard">Lets Explore</Link>
                        </button>
                    </div>

                    {/* Image for medium and large devices */}
                    <div className='hidden md:block md:w-full lg:w-1/2'>
                        <img className='w-full md:w-[600px]' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;