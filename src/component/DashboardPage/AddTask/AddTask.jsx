import Swal from "sweetalert2";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);

    const onSubmit = async (data) => {
        console.log(data)
        const menuItem = {
            title: data.title,
            priority: data.priority,
            date: data.date,
            description: data.description,
            status: 'todo',
            email: user?.email

        }
        const menuRes = await axiosPublic.post('/adds', menuItem)
        console.log(menuRes.data);
        if (menuRes.data.insertedId) {
            reset();
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} added to the your Task`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        console.log(data);
    };


    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new ?"></SectionTitle>
            <div className="bg-white shadow-lg p-5 mt-5 mb-5 rounded-xl max-w-screen-lg mx-auto background ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Title */}
                    <div className="form-control w-full my-2 ">
                        <label className="label">
                            <span className="label-text text-xl">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            {...register("title", { required: true })}
                            className="input input-bordered w-full "
                        />
                    </div>

                    <div className="flex gap-6">
                        {/* Priority */}
                        <div className="form-control w-full my-2 ">
                            <label className="label">
                                <span className="label-text text-xl">Priority</span>
                            </label>
                            <select defaultValue="default" {...register("priority", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select a Priority</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        {/* Deadline */}
                        <div className="form-control w-full my-2 ">
                            <label className="label">
                                <span className="label-text text-xl">Deadline</span>
                            </label>
                            <input
                                type="date"
                                placeholder="date"
                                {...register("date", { required: true })}
                                className="input input-bordered w-full "
                            />
                        </div>
                    </div>
                    {/* Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" {...register("description", { required: true })} placeholder="Description Here"></textarea>
                    </div>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-center mx-auto block text-xl">Add Task</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
