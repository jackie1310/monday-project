import { Month } from "../../data/Month";
import { Status } from "../../data/Status"
import { budget } from "../../data/budget";
import { notes } from "../../data/notes";

export default function KanbanView({itemNames, categories}) {
    const notifications = [
        <i class="fa-solid fa-exclamation text-white bg-red-500 rounded-full w-4 text-center p-0.5 mr-2"></i>,
        <i class="fa-solid fa-check text-white bg-green-700 rounded-full w-4 text-center p-0.5 mr-2"></i>,
        <i class="fa-solid fa-clock text-violet-950"></i>
    ]
    
    return (
        <div className="flex gap-5 overflow-x-scroll">
            {Status.map((status, index) => (
                <Kanban key={index} status={status.name} layout={status.style} border={status.border} itemName={itemNames[index].name}  index={index} categories={categories} notify={notifications[index]}/>
            ))}
        </div>
    )
}

function Kanban({status, layout, border, itemName, categories, index, notify}) {
    const color = ["bg-red-500", "bg-green-500", "bg-violet-950"]
    function renderSection() {
        const currentDate = new Date();
        let section = [];
        if (categories.includes("Owner")) {
            section.push(
                <SectionLayout option="Owner">
                    <i className="fa-regular fa-user bg-black rounded-full p-2 text-white"></i>
                </SectionLayout>
            )
        }
        if (categories.includes("Timeline")) {
            section.push(
                <SectionLayout option="Timeline">
                    <p className={`${color[index]} text-white rounded-lg p-0`}>{currentDate.getDate() + index} - {currentDate.getDate() + index + 1} {Month[currentDate.getMonth()]}</p>
                </SectionLayout>
            )
        }
        if (categories.includes("Due date")) {
            section.push(
                <SectionLayout option="Due date">
                    <p>{notify} {currentDate.getDate() + index} {Month[currentDate.getMonth()]}</p>
                </SectionLayout>
            )
        }
        if (categories.includes("Files")) {
            section.push(
                <SectionLayout option="Files">
                    <i class="fa-solid fa-file text-blue-400"></i>
                </SectionLayout>
            )
        }
        if (categories.includes("Notes")) {
            section.push(
                <SectionLayout option="Notes">
                    <p className="truncate w-20">
                        {notes[index]}
                    </p>
                </SectionLayout>
            )
            index++;
        }
        if (categories.includes("Budget")) {
            section.push(
                <SectionLayout option="Budget">
                    <p className="text-center">
                        ${budget[index]}
                    </p>
                </SectionLayout>
            )
            index++;
        }
        if (categories.includes("Last updated")) {
            section.push(
                <SectionLayout option="Last updated">
                    <p className="text-center">
                        3 days ago
                    </p>
                </SectionLayout>
            )
            index++;
        }
        return section;
    }
    return (
        <div className={` bg-gray-100 border-l-2 ${border}`}>
            <h1 className={`py-2 text-center text-white ${layout}`}>{status}</h1>
            <div className="m-3 p-3 bg-white flex flex-col gap-5">
                <h2 className="font-semibold text-md">{itemName}</h2>
                <div className="text-sm flex flex-col gap-3">
                    {renderSection()}
                </div>
                
            </div>
        </div>
    )
}

function SectionLayout({children, option}) {
    return (
        <div className="flex gap-6 items-center">
            <p className="w-16 truncate">{option}</p>
            <div className="flex items-center justify-center py-1 w-24 bg-gray-100 h-10">
                {children}
            </div>
        </div>
    )
}