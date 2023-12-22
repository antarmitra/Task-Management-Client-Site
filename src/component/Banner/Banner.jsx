import { Link } from 'react-router-dom';
import banner from '../../assets/image/task-management-4439170-3726785.webp'
import "./Banner.css"


const Banner = () => {
    return (
        <div>
            <div className='flex gap-32 banner '>
                <div className='space-y-5 mt-40 ml-10'>
                    <h1 className="text-5xl font-semibold">Get more done <br />with <span className='text-[#00DFA2]'>TaskTrak</span> <br /> tasks.</h1>
                    <p className="text-base">Plan, organize and collaborate on any project with <br /> powerful task management that can be customized for every need.</p>
                    <button className="px-2 py-2 rounded-lg bg-[#00DFA2] text-white font-medium"><Link to="/login">Lets Explore</Link></button>
                </div>
                <div className=''>
                    <img className='w-[600px]' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;