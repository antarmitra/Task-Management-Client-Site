/* eslint-disable react/no-unknown-property */
import useTask from "../../hook/useTask";
import SectionTitle from "../../SectionTitle/SectionTitle";
import CompleteTask from "../CompleteTask/CompleteTask";
import Going from "../Going/Going";
import TodoTask from "../TodoTask/TodoTask";




const AllTask = () => {


    const [add, refetch] = useTask();
    console.log(add);

    return (
        <div>
            <SectionTitle heading="All Task"></SectionTitle>
            <div>
                <h1 className="text-2xl font-medium mt-5">To-Do List : </h1>
                <div className="divider"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {add?.map((task) =>
                        <div key={task._id}>
                            {
                                task.status === "todo" &&
                                <TodoTask task={task} refetch={refetch}></TodoTask>
                            }
                        </div>
                    )}
                </div>

            </div>

            <div>
                <h1 className="text-2xl font-medium mt-5">On Going :</h1>
                <div className="divider"></div>
                {
                    add?.map((task) =>
                        <div key={task._id}>

                            {
                                task.status === "onGoing" &&
                                <Going task={task} refetch={refetch}></Going>
                            }
                        </div>
                    )
                }
            </div>

            <div>
                <h1 className="text-2xl font-medium mt-5">Complete:</h1>
                <div className="divider"></div>
                {
                    add?.map((task) =>
                        <div key={task._id}>

                            {
                                task.status === "complete" &&
                                <CompleteTask task={task} refetch={refetch}></CompleteTask>
                            }
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default AllTask;