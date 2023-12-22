import { Link } from "react-router-dom";
import login from "../../assets/image/login.json"
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import "./Login.css"


const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen login">
                <div className="hero-content flex-col lg:flex-row login shadow-2xl">
                    <div className="w-1/2 mr-12">
                        <Lottie animationData={login}></Lottie>
                    </div>
                    <div className="card md:w-1/2 max-w-sm ">
                        <h1 className="text-4xl text-center font-bold">Login</h1>
                        <form  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>


                            <div className="form-control mt-6">
                                <input className="btn text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500" type="submit" value="Login" />
                            </div>

                            {/* google sign in */}
                            <h2 className="text-center texl-lg font-medium">-------Log in with-------- </h2>
                            <div className=" mt-5 flex gap-6 mx-auto">
                                <div>
                                    <button className="btn btn-outline btn-primary">
                                        <FcGoogle className="lg:text-3xl md:text-lg"></FcGoogle>
                                        Google
                                    </button>
                                </div>
                                <div>
                                    <button className="btn btn-outline ">
                                        <FiGithub className="lg:text-3xl md:text-lg"></FiGithub>
                                        Github
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p className="my-2 text-xl text-center"><small>Do not have an account?<Link className="text-sky-500 font-bold" to="/signup"> Sign Up</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;