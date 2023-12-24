import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";


const CompleteTask = ({ task, refetch }) => {
    console.log(task);
    const axiosPublic = useAxiosPublic();

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



    return (
        <div>

            <div className="flex gap-5 bg-[#AFC8AD] rounded-lg p-2">
                <button>
                    <input type="checkbox" checked="checked" className="checkbox w-6 h-6 mt-3" />
                </button>
                <div>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                        <h3>Deadlines: {task.date}</h3>
                        <h3>Priority: {task.priority}</h3>
                        <p>Description: {task.description}</p>
                        <button><MdDelete className="text-[24px] text-[#239696]"
                            onClick={() => handleDelete(task._id)}
                        ></MdDelete></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CompleteTask;