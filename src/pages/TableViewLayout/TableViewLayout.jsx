import { useState } from "react";
import OptionSvg from "../../components/OptionSvg";
import Button from "../../components/Button";
import TableView from "../../components/TableView/TableView";
import KanbanView from "../../components/KanbanView/KanbanView";
import GanttView from "../../components/GanttView/GanttView";
import TimelineView from "../../components/Timeline/TimelineView";
import CalendarView from "../../components/CalendarView/CalendarView";
import CardView from "../../components/CardView/CardView";

export default function TableViewLayout({setSection}) {
    const [headers, setHeaders] = useState(3);
    const [rowsThisWeek, setRowsThisWeek] = useState(3);
    const [rowsNextWeek, setRowsNextWeek] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState(["Project", "Owner", "Status", "Due date", "Priority", "Timeline"]);
    const [selectedView, setSelectedView] = useState("Table");
    const [listOfView, setListOfView] = useState(["Table"]);
    const style = "absolute -left-1 -top-0.5 rounded-sm z-10 p-1.5 text-white w-6";
    function createHeader() {
        const cols = []
        if (selectedOptions?.length > 0) {
            selectedOptions.map((option, index) => (
                cols.push(<th key={index}>{option}</th>)
            ))
        }
        else {
            for (let i = 0; i < headers; i++) {
                cols.push(<th key={i}>----</th>)
            }
        }
        return cols;
    }

    function moveOn () {
        setSection(prev => prev + 1)
    }
    function moveBack () {
        setSection(prev => prev - 1)
    }
    function handleView(view) {
        setSelectedView(view);
        if (!listOfView.includes(view) && listOfView?.length < 2){
            setListOfView(prev => [...prev, view])
        }
        else if (!listOfView.includes(view) && listOfView?.length >= 2) {
            const newList = listOfView.slice(0, -1);
            setListOfView([...newList, view]);
        }
        if (view === "Table") {
            setListOfView(["Table"]);
        }
    }

    return (
        <div className="md:flex block h-screen">
            <div className="md:w-1/2 w-full relative px-10 pt-20 mb-32">
                <div className="w-5/6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                    <h1 className="text-3xl mb-7">Add a view layout</h1>
                    <p>Transform the way you see and manage your work with more unique views. You can always add more later.</p>
                    <form className="flex flex-wrap gap-5 mt-10">
                        <OptionSvg label="Table" value="Table" selectedOptions={selectedView} handleChange={handleView}>
                            <i className={`fa-solid fa-table bg-purple-600 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg label="Kanban" value="Kanban" selectedOptions={selectedView} handleChange={handleView}>
                            <i className={`fa-solid fa-chart-simple bg-blue-500 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg label="Cards" value="Cards" selectedOptions={selectedView} handleChange={handleView}>
                            <i className={`fa-solid fa-copy bg-orange-500 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg label="Gantt" value="Gantt" selectedOptions={selectedView} handleChange={handleView}>
                            <i className={`fa-solid fa-grip-lines bg-emerald-700 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg label="Calendar" value="Calendar" selectedOptions={selectedView} handleChange={handleView}>
                            <i className={`fa-regular fa-calendar bg-pink-300 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg label="Timeline" value="Timeline" selectedOptions={selectedView} handleChange={handleView}>
                            <i className={`fa-solid fa-bars-staggered bg-yellow-500 ${style}`}></i>
                        </OptionSvg>
                    </form>
                    <div className="mt-5 p-3 border-l-4 border-purple-600 rounded-sm bg-gray-100">
                        <p>Table view is your default layout. Plan, track abd manage anything using a visual board</p>
                    </div>
                    <Button label="Back" type="back" click={moveBack} />
                    <Button label="Next" type="front" click={moveOn} />
                </div>
            </div>
            {/* View Layouts */}
            <div className="md:w-1/2 bg-gray-100 pl-10">
                <div className="flex flex-col w-full bg-white pl-5 shadow-2xl shadow-blue-300">
                    <h1 className="mb-5 mt-3 text-4xl text-gray-600">My demo board</h1>
                    <div className="flex mb-10 items-start">
                        {listOfView.map((view, index) => (
                            <p key={index} className={`border-b-2 ${selectedView === view ? "border-blue-500" : "border-gray-300"} w-16 text-center pb-2`}>{view}</p>
                        ))}
                        <button>+</button>
                    </div>
                    <div className="overflow-auto h-[435px]">
                        {selectedView === "Table" && <TableView setHeaders={setHeaders} headers={headers} createHeader={createHeader} rowsThisWeek={rowsThisWeek} setRowsThisWeek={setRowsThisWeek} rowsNextWeek={rowsNextWeek} setRowsNextWeek={rowsNextWeek} selectedOptions={selectedOptions} selectedItem="Mission"/>}
                        {selectedView === "Kanban" && <KanbanView selectedItem="Mission" selectedOptions={selectedOptions}/>}
                        {selectedView === "Gantt" && <GanttView/>}
                        {selectedView === "Timeline" && <TimelineView/>}
                        {selectedView === "Calendar" && <CalendarView/>}
                        {selectedView === "Cards" && <CardView/>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}