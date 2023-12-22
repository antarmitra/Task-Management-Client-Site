import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/image/login.json"
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import "./Login.css"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Banner/Firebase/firebase.config";
import toast from "react-hot-toast";


const Login = () => {
    const auth = getAuth(app);
    const Provider = new GoogleAuthProvider();
    const { signIn } = useContext(AuthContext);

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, Provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location.state : '/')
                console.log(navigate);
            })
            .catch(error => console.log(error))
    }


    // create user with email and password
    
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // create User
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location.state : '/')
                toast.success('User Login Successfully')
            })
            .catch(error => {
                console.log(error);
            })
        // e.target.reset();
    }



    return (
        <div>
            <div className="relative max-w-screen-lg mx-auto">
                <div className="md:flex mb-10">
                    <div>
                        <Lottie  animationData={login} loop={true} />
                    </div>

                    <div className="text-center p-7 ">
                        <form onSubmit={handleLogin} className="bg-base-100 shadow-md rounded-lg p-10">
                            <div className="space-y-3 ">
                                <h2 className="text-4xl font-medium">Login Now</h2>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email " className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password " className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn  bg-blue-400 " value="login" />
                            </div>

                            <div className=" mt-5 flex gap-6">
                                <div>
                                    <button className="btn ">
                                        <FcGoogle onClick={handleGoogleSingIn} className="lg:text-3xl md:text-lg"></FcGoogle>
                                        Google
                                    </button>
                                </div>
                                <div>
                                    <button className="btn ">
                                        <FiGithub className="lg:text-3xl md:text-lg"></FiGithub>
                                        Github
                                    </button>
                                </div>
                            </div>

                            <p className=" mt-2 text-base">Do not have an account, please <Link to="/signup" className="text-black text-lg font-bold underline">Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>

    );

    // const auth = getAuth(app);
    // const Provider = new GoogleAuthProvider();
    // const { signIn } = useContext(AuthContext);

    // const handleGoogleSingIn = () => {
    //     signInWithPopup(auth, Provider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             // navigate(location?.state ? location.state : '/')
    //         })
    //         .catch(error => console.log(error))
    // }


    // // create user with email and password
    // const handleLogin = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);

    //     // create User
    //     signIn(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             // navigate(location?.state ? location.state : '/')
    //             toast.success('User Login Successfully')
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //     // e.target.reset();
    // }


    // return (
    //     <div>
    //         <div className="hero min-h-screen login">
    //             <div className="hero-content flex-col lg:flex-row login shadow-2xl">
    //                 <div className="w-1/2 mr-12">
    //                     <Lottie animationData={login}></Lottie>
    //                 </div>
    //                 <div className="card md:w-1/2 max-w-sm ">
    //                     <h1 className="text-4xl text-center font-bold">Login</h1>
    //                     <form onSubmit={handleLogin} className="card-body">
    //                         <div className="form-control">
    //                             <label className="label">
    //                                 <span className="label-text text-base font-medium">Email</span>
    //                             </label>
    //                             <input type="email" name="email" placeholder="email" className="input input-bordered" />
    //                         </div>
    //                         <div className="form-control">
    //                             <label className="label">
    //                                 <span className="label-text text-base font-medium">Password</span>
    //                             </label>
    //                             <input type="password" name="password" placeholder="password" className="input input-bordered" />
    //                         </div>

    //                         <div className="form-control mt-6">
    //                             <input className="btn text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500" type="submit" value="Login" />
    //                         </div>

    //                         {/* Google login */}
    //                         <h2 className="text-center texl-lg font-medium">-------Log in with-------- </h2>
    //                         <div className=" mt-5 flex gap-6 mx-auto">
    //                             <div>
    //                                 <button onClick={handleGoogleSingIn} className="btn btn-outline btn-primary">
    //                                     <FcGoogle className="lg:text-3xl md:text-lg"></FcGoogle>
    //                                     Google
    //                                 </button>
    //                             </div>
    //                             <div>
    //                                 <button className="btn btn-outline ">
    //                                     <FiGithub className="lg:text-3xl md:text-lg"></FiGithub>
    //                                     Github
    //                                 </button>
    //                             </div>
    //                         </div>
    //                     </form>
    //                     <p className="my-2 text-xl text-center"><small>Do not have an account?<Link className="text-sky-500 font-bold" to="/signup"> Sign Up</Link></small></p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Login;