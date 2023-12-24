import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/image/login.json"
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import "./Login.css"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Banner/Firebase/firebase.config";
import toast from "react-hot-toast";


const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { signIn } = useContext(AuthContext);

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location.state : '/')
                console.log(navigate);
            })
            .catch(error => console.log(error))
    }

    const handleGithubSingIn = () => {
        signInWithPopup(auth, githubProvider)
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
                        <Lottie animationData={login} loop={true} />
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
                                        <FiGithub onClick={handleGithubSingIn} className="lg:text-3xl md:text-lg"></FiGithub>
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
};

export default Login;