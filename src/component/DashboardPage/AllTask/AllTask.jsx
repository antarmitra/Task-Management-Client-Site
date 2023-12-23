/* eslint-disable react/no-unknown-property */
// import { useState } from "react";
import useTask from "../../hook/useTask";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Going from "../Going/Going";
import TodoTask from "../TodoTask/TodoTask";

// import { SlArrowDown, SlArrowUp } from "react-icons/sl";
// import CompleteTask from "../CompleteTask/CompleteTask";



const AllTask = () => {


    const [add, refetch] = useTask();
    console.log(add);
    // const [showCompleteTask, setShowCompleteTask] = useState();

    return (
        <div>
            <SectionTitle heading="All Task"></SectionTitle>
            <div>
                <h1 className="text-2xl font-medium mt-5">To-Do List : </h1>
                <div className="divider"></div>
                {add?.map((task) =>
                    <div key={task._id}>
                        {
                            task.status === "todo" &&
                            <TodoTask task={task} refetch={refetch}></TodoTask>
                        }
                    </div>
                )}
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

            {/* <div>
                <div onClick={() => setShowCompleteTask(!showCompleteTask)} className="flex justify-between">
                    <p className="text-2xl font-medium">Complete Task</p>
                    <p className="text-2xl">
                        {showCompleteTask ? <SlArrowDown></SlArrowDown> : <SlArrowUp></SlArrowUp>}
                    </p>
                </div>
                <div className="divider"></div>
                {
                    showCompleteTask &&

                    <div>
                        {
                            add?.map((add) =>
                                <div key={add._id}>
                                    {
                                        add.status === "complete" &&
                                        <CompleteTask add={add} refetch={refetch}></CompleteTask>
                                    }
                                </div>
                            )
                        }
                    </div>
                }
            </div> */}
        </div>
    );
};

export default AllTask;