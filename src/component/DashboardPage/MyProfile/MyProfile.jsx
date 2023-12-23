import { useContext } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { AuthContext } from "../../Providers/AuthProvider";


const MyProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <SectionTitle heading="My Profile">
            </SectionTitle>

            <div className="bg-white shadow-xl w-[300px] h-[200px] items-center mx-auto rounded-lg">
                <img className="md:w-32 w-20 md:h-32 h-20 rounded-full  mx-auto" src={user?.photoURL} alt="" />
                <h1 className="text-center md:text-2xl text-base font-medium">{user?.displayName}</h1>
                <p className="text-center md:text-xl text-base font-medium">{user?.email}</p>
            </div>
        </div>
    );
};

export default MyProfile;