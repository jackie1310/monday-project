import { Month } from "../../data/Month";
import { Status } from "../../data/Status"

export default function KanbanView({selectedItem, selectedOptions}) {
    const notifications = [
        <i class="fa-solid fa-exclamation text-white bg-red-500 rounded-full w-4 text-center p-0.5 mr-2"></i>,
        <i class="fa-solid fa-check text-white bg-green-700 rounded-full w-4 text-center p-0.5 mr-2"></i>,
        <i class="fa-solid fa-clock text-violet-950"></i>
    ]
    return (
        <div className="flex gap-5 overflow-x-scroll">
            {Status.map((status, index) => (
                <Kanban key={index} status={status.name} layout={status.style} selectedItem={selectedItem}  index={index} selectedOptions={selectedOptions} notify={notifications[index]}/>
            ))}
        </div>
    )
}

function Kanban({status, layout, selectedItem, selectedOptions, index, notify}) {
    function renderSection() {
        const currentDate = new Date();
        let section = [];
        if (selectedOptions.includes("Owner")) {
            section.push(
                <SectionLayout option="Owner">
                    <i className="fa-regular fa-user bg-black rounded-full p-2 text-white"></i>
                </SectionLayout>
            )
        }
        if (selectedOptions.includes("Timeline")) {
            section.push(
                <SectionLayout option="Timeline">
                    <p className="bg-gray-400 rounded-lg p-0">{currentDate.getDate() + index} - {currentDate.getDate() + index + 1} {Month[currentDate.getMonth()]}</p>
                </SectionLayout>
            )
        }
        if (selectedOptions.includes("Due date")) {
            section.push(
                <SectionLayout option="Due date">
                    <p>{notify} {currentDate.getDate() + index} {Month[currentDate.getMonth()]}</p>
                </SectionLayout>
            )
        }
        return section;
    }
    return (
        <div className=" bg-gray-100">
            <h1 className={`py-2 text-center text-white ${layout}`}>{status}</h1>
            <div className="m-3 p-3 bg-white flex flex-col gap-5">
                <h2 className="font-semibold text-md">{selectedItem} {index + 1}</h2>
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
            <p className="w-16">{option}</p>
            <div className="flex items-center justify-center py-1 w-24 bg-gray-100 h-10">
                {children}
            </div>
        </div>
    )
}