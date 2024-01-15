import { Card } from "antd";
import "./CardView.scss";
import { compareDates, dateDifferenceInDays } from "../../helpers/compareDays";
import { Month } from "../../data/Month";

const mission = [
    {
        id: 1,
        owner: "admin",
        status: "Working on it",
        due_date: "2024-01-07",
        notes: "Finish the board",
        timeline: ["2024-01-07", "2024-01-08"],
        budget: 100,
        files: "https://firebasestorage.googleapis.com/v0/b/my-first-app-68f29.appspot.com/o/BCU_warriors.mp4?alt=media&token=427a0f33-459b-4681-a020-4b2bd9a42a1e",
        last_updated: "2024-01-04",
        priority: "High"
    },
    {
        id: 2,
        owner: "member",
        status: "Done",
        due_date: "2024-01-15",
        notes: "Learn NextJS",
        timeline: ["2024-01-10", "2024-01-11"],
        budget: 1000,
        files: "https://firebasestorage.googleapis.com/v0/b/my-first-app-68f29.appspot.com/o/test.mp4?alt=media&token=48cec406-c88b-4070-8ca1-a5c820e222f4",
        last_updated: "2024-01-05",
        priority: "Low"
    }
]
export default function CardView() {
    return (
        <div className="flex gap-10 overflow-x-scroll">
            {mission.map((mission) => (
                <DisplayCard key={mission.id} {...mission}/>
            ))}  
        </div>
    )
}

function DisplayCard({id, owner, status, due_date, notes, timeline, budget, file_url, last_updated, priority}) {
    const title = 
        <div className="w-52 h-40 bg-gray-100 flex items-center justify-center mx-auto">
            <div className="bg-gray-400 text-white px-1 rounded-full">
                <i class="fa-solid fa-plus"></i>
            </div>
        </div>
    const style = "w-28 h-10 px-2 py-0.5 flex items-center justify-center";

    function Owner() {
        if (owner === "admin") {
            return (
                <div className={`${style} bg-gray-100`}>
                    <i class="fa-solid fa-user rounded-full bg-black flex p-2 h-8 w-8 items-center justify-center text-white"></i>
                </div>
            )
        }
        else if (owner === "member") {
            return (
                <div className={`${style} bg-gray-100`}>
                    <i class="fa-regular fa-user rounded-full p-2 h-8 w-8 flex items-center justify-center border border-gray-400 text-gray-400"></i>
                </div>
            )
        }
    }

    function Status() {
        if (status === "Working on it") {
            return (
                <div className={`${style} bg-orange-300 text-white`}>
                    <p className="truncate w-20">
                        {status}
                    </p>
                </div>
            )
        }
        else if (status === "Done") {
            return (
                <div className={`${style} bg-green-400 text-white`}>
                    <p className="">
                        {status}
                    </p>
                </div>
            )
        }
    }

    function DueDate() {
        const currentDate = new Date();
        const due = new Date(due_date);
        const earlier = compareDates(currentDate, due) < 0
        if (status === "Done") {
            return (
                <div className={`${style} bg-gray-100 gap-5`}>
                    <i class="fa-solid fa-check bg-green-500 text-white rounded-full h-5 w-5 p-0.5 text-center"></i>
                    <p>{due.getDate()} {Month[due.getMonth()]}</p>
                </div>
            )
        }
        else if (earlier) {
            return (
                <div className={`${style} bg-gray-100 gap-5`}>
                    <i class="fa-regular fa-clock bg-purple-900 text-white rounded-full h-5 w-5 p-0.5 flex items-center justify-center"></i>
                    <p>{due.getDate()} {Month[due.getMonth()]}</p>
                </div>
            )
        }
        else {
            return (
                <div className={`${style} bg-gray-100 gap-5`}>
                    <i class="fa-solid fa-exclamation  bg-red-600 text-white rounded-full h-5 w-5 p-0.5 text-center"></i>
                    <p>{due.getDate()} {Month[due.getMonth()]}</p>
                </div>
            )
        }
    }

    function Notes () {
        return (
            <div className={`${style} bg-gray-100 `}>
                <p className="w-20 truncate">{notes}</p>
            </div>
        )
    }

    function Timeline() {
        const currentDate = new Date();
        const due = new Date(due_date);
        const start_date = new Date(timeline[0]);
        const end_date = new Date(timeline[1]);
        const earlier = compareDates(currentDate, due) < 0;
        let set_style = "";
        if (status === "Done") {
            set_style = "bg-green-500";
        }
        else if (earlier) {
            set_style = "bg-purple-900";
        }
        else {
            set_style = "bg-red-600";
        }
        return (
            <div className={`${style} bg-gray-100 `}>
                <p className={`rounded-lg p-1 ${set_style} text-white`}>{start_date.getDate()} {Month[start_date.getMonth()]}-{end_date.getDate()} {Month[end_date.getMonth()]}</p>
            </div>   
        )
    }

    function Budget() {
        return (
            <div className={`${style} bg-gray-100 `}>
                <p>$ {budget}</p>
            </div>   
        )
    }

    function Files () {
        return (
            <div className={`${style} bg-gray-100 `}>
                <a href={file_url} target="blank">
                    <i class="fa-solid fa-file text-black"></i>
                </a> 
            </div>
        )
    }

    function Priority() {
        let set_style;
        if (priority === "Low") {
            set_style = "bg-blue-300"
        }
        else if (priority === "Medium") {
            set_style = "bg-blue-500"
        }
        else if (priority === "High") {
            set_style = "bg-blue-700"
        }
        return (
            <div className={`${style} ${set_style} text-white`}>
                <p>{priority}</p>
            </div>
        )
    }

    function Last_update() {
        const currentDate = new Date();
        const updateDate = new Date(last_updated);
        return (
            <div className={`${style} bg-gray-100 gap-3`}>
                <i class="fa-solid fa-user rounded-full bg-black flex p-2 h-8 w-8 items-center justify-center text-white"></i>
                <p className="w-20 truncate">{dateDifferenceInDays(currentDate, updateDate)} days ago</p>
            </div>
        )
    }
    return (
        <div className="box-shadow p-0">
            <Card title={title} size="small" bordered={false}>
                <div className="flex flex-col gap-3 text-sm">
                    <p className="text-xl">Mission {id}</p>
                    <div className="flex justify-between">
                        <p>Owner</p>
                        {Owner()}
                    </div>
                    <div className="flex justify-between">
                        <p>Status</p>
                        {Status()}
                    </div>
                    <div className="flex justify-between">
                        <p>Due date</p>
                        {DueDate()}
                    </div>
                    <div className="flex justify-between">
                        <p>Notes</p>
                        {Notes()}
                    </div>
                    <div className="flex justify-between">
                        <p>Timelines</p>
                        {Timeline()}
                    </div>
                    <div className="flex justify-between">
                        <p>Budget</p>
                        {Budget()}
                    </div>
                    <div className="flex justify-between">
                        <p>Files</p>
                        {Files()}
                    </div>
                    <div className="flex justify-between">
                        <p>Last updated</p>
                        {Last_update()}
                    </div>
                    <div className="flex justify-between">
                        <p>Priority</p>
                        {Priority()}
                    </div>
                </div>
                
            </Card>
        </div>
    )
}