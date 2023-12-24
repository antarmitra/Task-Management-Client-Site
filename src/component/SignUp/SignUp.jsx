/* eslint-disable no-useless-escape */
import Lottie from 'lottie-react';
import signup from '../../assets/image/signup.json'
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./SignUp.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { app } from '../Banner/Firebase/firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the register page', location);

    const auth = getAuth(app);
    const Provider = new GoogleAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, Provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location.state : '/')
                toast.success('User Created Successfully')
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        if (password.length < 6) {
            toast.error("Password should be at least 6 characters");
            return false;
        } else if (!/[A-Z]/.test(password)) {
            toast.error("Your password should contain at least one uppercase character");
            return false;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            toast.error("Your password should contain at least one special character");
            return false;
        }

        // createUser
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // toast.success('User Created Successfully')
                navigate(location?.state ? location.state : '/')
                toast.success('User Created Successfully')
                e.target.reset();
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(error => {
                console.error(error);
            })
    }




    return (
        <div>
            <div className="relative max-w-screen-lg mx-auto background">
                <div className="md:flex mb-10">
                    <div className="mr-16">
                        <Lottie className="lg:w-[500px] h-[820px]" animationData={signup} loop={true} />
                    </div>

                    <div className="text-center p-2 md:w-[1000px]">
                        <form onSubmit={handleSignup} className='mt-10 mr-10'>
                            <div className="space-y-3 ">
                                <h2 className="text-4xl font-medium">Sign Up</h2>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg font-semibold">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name " className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg font-semibold">Photo URL</span>
                                </label>
                                <input type="photo" name="photo" placeholder="photo url " className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email " className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password " className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-blue-400 text-white text-lg" value="sign-up" />
                            </div>

                            <h2 className="text-center texl-lg font-medium">-------Sign up with-------- </h2>
                            <div className=" mt-5 flex justify-center gap-6 mx-auto">
                                <div>
                                    <button onClick={handleGoogleSingIn} className="btn btn-outline btn-primary">
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

                            <p className=" mt-2 text-base">Do not have an account, please <Link to="/login" className="text-sky-400 text-lg font-bold underline">Login</Link></p>

                            {/* {
                                error && <p className="text-lg text-red-500">{error}</p>
                            } */}
                        </form>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default SignUp;