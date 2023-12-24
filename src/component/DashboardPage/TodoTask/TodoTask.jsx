/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// import Select from "react-select/dist/declarations/src/Select";


const TodoTask = ({ task, refetch }) => {

    const { _id } = task;
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const modalId = `my_modal_${_id}`;
    const isValidPriority = ["high", "medium", "low"].includes(task.priority);

    // update
    const onSubmit = async (data) => {
        const taskItem = {
            title: data.title,
            priority: data.priority,
            description: data.description,
            date: data.date,
            status: "todo",
            email: user?.email
        }
        const res = await axiosPublic.patch(`/adds/${task._id}`, taskItem);
        console.log(res.data);

        if (res.data.modifiedCount > 0) {
            toast.success('Update Task');
            refetch();
            document.getElementById(task._id).close()
        }
    }

    // delete
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

    // status change
    const handleUpdateStatusOngoing = async (id) => {
        const res = await axiosPublic.patch(`/adds/ongoing/${id}`)
        console.log(res);
        if (res.data.modifiedCount > 0) {
            toast.success('Running Task');
            refetch();
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
        <div className="bg-[#AFC8AD] shadow-lg p-2 rounded-lg space-y-5">
            <div className="flex justify-between">

                <div>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <div>
                        {/* className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5" */}
                        <h3>Deadlines: {task.date}</h3>
                        <h3>Priority: {task.priority}</h3>
                        <p>Description:{task.description}</p>

                    </div>
                </div>
            </div>

            {/* delete, update, ongoing */}
            <div>
            {/* className="flex flex-col-reverse md:flex-row gap-2 item-center mx-auto" */}
                <div className="flex justify-center gap-3">
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
                    ></MdDelete>
                    </button>

                    <button>
                        <input onClick={() => handleUpdateStatusComplete(task._id)} type="checkbox" checked="checked" className="checkbox w-5 h-5 mt-2" />
                    </button>



                    <button
                        onClick={() => handleUpdateStatusOngoing(task._id)}
                        className="btn font-medium text-black bg-[#D2E9E9] border-[#C4DFDF]">
                        <p >On Going</p>
                    </button>
                </div>

            </div>

            <ToastContainer></ToastContainer>

        </div>

    );
};

export default TodoTask;


