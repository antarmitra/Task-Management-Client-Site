/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

const Going = ({ task, refetch }) => {

    const { _id } = task;
    const modalId = `my_modal_${_id}`;
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const isValidPriority = ["high", "medium", "low"].includes(task.priority);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure to delete this task?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/adds/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your task has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };


    const onSubmit = async (data) => {
        console.log(data);
        const taskItem = {
            title: data.title,
            priority: data.priority,
            description: data.description,
            date: data.date,
            status: "todo",
            email: user?.email
        }
        console.log(taskItem);
        // const updateTask = { taskItem };
        const res = await axiosPublic.patch(`/adds/${task._id}`, taskItem);
        console.log(res.data);


        if (res.data.modifiedCount > 0) {
            toast.success('Update Task');
            refetch();
            document.getElementById(task._id).close()
        }
    }

    const handleUpdateStatusComplete = async (id) => {
        const res = await axiosPublic.patch(`/adds/complete/${id}`)
        console.log(res);
        if (res.data.modifiedCount > 0) {
            toast.success('Complete Task');
            refetch();
        }
    }


    return (
        <div className="flex justify-between items-center mt-5 bg-[#AFC8AD] p-2 rounded-lg ">
            <div className="flex gap-5">
                <button>
                    <input onClick={() => handleUpdateStatusComplete(task._id)} type="checkbox" checked="checked" className="checkbox w-6 h-6 mt-3" />
                </button>
                <div>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                        <h3>Deadlines: {task.date}</h3>
                        <h3>Priority: {task.priority}</h3>
                        <p>Description: {task.description}</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col-reverse md:flex-row items-center gap-5">
                <button className="text-blue-700 font-semibold pl-2" onClick={() => document.getElementById(modalId).showModal()}><FaEdit className="text-xl text-[#239696]"></FaEdit></button>
                <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box ">
                        <form method="dialog">

                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-lg">Title</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={task.title}
                                        {...register('title', { required: true })}
                                        required
                                        className="input input-bordered w-full" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Description</span>
                                    </label>
                                    <textarea
                                        {...register('description')}
                                        className="textarea textarea-bordered h-24" defaultValue={task.description}></textarea>
                                </div>


                                <div className="flex gap-6">


                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-lg">Deadline</span>
                                        </label>
                                        <input
                                            type="date"
                                            defaultValue={task.date}
                                            {...register('date', { required: true })}
                                            required
                                            className="input input-bordered" />
                                    </div>

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl">Priority</span>
                                        </label>
                                        <select
                                            defaultValue={isValidPriority ? task.priority : "default"}
                                            {...register("priority", { required: true })}
                                            className="select select-bordered w-full">
                                            <option disabled value="default">Select a Priority</option>
                                            <option value="high">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="low">Low</option>
                                        </select>
                                    </div>

                                </div>


                                <div className="flex justify-center items-center mt-10">

                                    <button className="btn bg-[#D2E9E9] " type="submit">
                                        Update Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>



                <button><MdDelete className="text-[24px] text-[#239696]"
                    onClick={() => handleDelete(task._id)}
                ></MdDelete></button>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Going;