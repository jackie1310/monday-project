import { useEffect, useState } from "react"
import BoardSetUp from "./BoardSetUp/BoardSetUp";
import TableColumn from "./TableColumn/TableColumn"
import TableItem from "./TableItem/TableItems";
import TableViewLayout from "./TableViewLayout/TableViewLayout";
import CreateTasks from "./CreateTasks/CreateTasks";
import GroupTasks from "./GroupTasks/GroupTasks";
import TableView from "../components/TableView/TableView";
import KanbanView from "../components/KanbanView/KanbanView";
import GanttView from "../components/GanttView/GanttView";
import TimelineView from "../components/Timeline/TimelineView";
import CalendarView from "../components/CalendarView/CalendarView";
import CardView from "../components/CardView/CardView";
import Timeline from "../components/Timeline/Timelines";

export default function CreateTable() {
    const [section, setSection] = useState(1);
    const [boardName, setBoardName] = useState("");
    const [rowsFirstTable, setRowsFirstTable] = useState(3);
    const [rowsSecondTable, setRowsSecondTable] = useState(1);
    const [add, setAdd] = useState(false);
    const [categories, setCategories] = useState(["Task"]);
    const [itemName, setItemName] = useState("Task");
    const [listOfViews, setListOfViews] = useState([]);
    const [selectedView, setSelectedView] = useState("Table");
    const [groups, setGroups] = useState(["", ""]);
    const [itemNames, setItemNames] = useState([
        {
            name: "Task 1"
        },
        {
            name: "Task 2"
        },
        {
            name: "Task 3"
        }
    ]);

    // const newData = [...selectedItems]
    // newData.forEach((item,index)=>{
    //     item.name = `${abc} ${index +1}`
    // })
    // selectedItems.map((item)=>{
    //     return <Input/>
    // })
    // setSelectedItems

    useEffect(() => {
        if (section > 2) {
            setAdd(true);
        }
        // if (section < 2) {
        //     setListOfViews("");
        // }
        if (section === 2) {
            if (categories.length < 2) {
                setCategories(["Task", "Owner", "Status", "Due date"]);
            }
        }
        else if (section === 3) {
            setCategories(prev => {
                const currentCategories = [...prev];
                for (let index in currentCategories) {
                    if (currentCategories[index] === "") {
                        currentCategories[index] = "Project";
                    }
                }
                return currentCategories;
            })
            // setItemName(prev => prev === "" ? "Task" : prev);
        }
        else if (section === 4) {
            setListOfViews(["Table"]);
        }
        else if (section === 6) {
            setGroups(["This Month", "Next Month"])
        }
    }, [section]);

    function renderPart() {
        switch (section) {
            case 1:
                return <BoardSetUp setSection={setSection} boardName={boardName} setBoardName={setBoardName} />;
            case 2:
                return <TableColumn setSection={setSection} categories={categories} setCategories={setCategories}/>;
            case 3:
                return <TableItem setSection={setSection} itemName={itemName} setItemName={setItemName} itemNames={itemNames} setItemNames={setItemNames}/>;
            case 4:
                return <TableViewLayout setSection={setSection} handleView={handleView} selectedView={selectedView}/>
            case 5:
                return <CreateTasks setSection={setSection} itemNames={itemNames} setItemNames={setItemNames}/>
            case 6:
                return <GroupTasks setSection={setSection} groups={groups} setGroups={setGroups}/>
        }
    }
    function handleView(view) {
        setSelectedView(view);
        if (!listOfViews.includes(view) && listOfViews?.length < 2){
            setListOfViews(prev => [...prev, view])
        }
        else if (!listOfViews.includes(view) && listOfViews?.length >= 2) {
            const newList = listOfViews.slice(0, -1);
            setListOfViews([...newList, view]);
        }
        if (view === "Table") {
            setListOfViews(["Table"]);
        }
    }

    
    return (
        <div className="md:flex block">
            {renderPart()}
            <div className="md:w-1/2 bg-gray-100 pl-10 h-screen">
                <div className="flex flex-col w-full bg-white pl-5 shadow-2xl shadow-blue-300 h-screen py-7">
                    {boardName === "" 
                        ? <div className="border-4 w-40 border-gray-500 mb-5 ml-3 rounded-lg"></div>
                        : <h1 className="mb-5 ml-3 text-3xl text-gray-600">{boardName}</h1>
                    }
                    <div className="flex mb-10 items-start">
                        {listOfViews.length > 0 && listOfViews.map((view, index) => (
                            <p key={index} className={`border-b-2 ${selectedView === view ? "border-blue-500" : "border-gray-300"} w-16 text-center pb-2`}>{view}</p>
                        ))}
                        {listOfViews.length > 0 && <button>+</button>}
                    </div>
                    <div className="overflow-auto h-[435px]">
                        {selectedView === "Table" && <TableView rowsFirstTable={rowsFirstTable} setRowsFirstTable={setRowsFirstTable} rowsSecondTable={rowsSecondTable} setRowsSecondTable={setRowsSecondTable} categories={categories} itemNames={itemNames} itemName={itemName} groups={groups} add={add}/>}
                        {selectedView === "Kanban" && <KanbanView itemNames={itemNames} categories={categories}/>}
                        {selectedView === "Gantt" && <GanttView itemNames={itemNames}/>}
                        {selectedView === "Timeline" && <Timeline itemNames={itemNames}/>}
                        {selectedView === "Calendar" && <CalendarView itemNames={itemNames}/>}
                        {selectedView === "Cards" && <CardView categories={categories} itemNames={itemNames}/>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
    if (section === 1) return <BoardSetUp setSection={setSection} />
    else if (section === 2) return <TableColumn setSection={setSection}/>
    else if (section === 3) return <TableItem setSection={setSection}/>
    else if (section === 4) return <TableViewLayout setSection={setSection}/>
    else if (section === 5) return <CreateTasks setSection={setSection}/>
    else if (section === 6) return <GroupTasks setSection={setSection}/>
}