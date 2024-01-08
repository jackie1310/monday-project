import { useState } from "react"
import "./TableItem.scss";
import { Radio } from "antd";
import TableView from "../../components/ViewLayouts";

export default function TableItem() {
    const [headers, setHeaders] = useState(3);
    const [rowsThisWeek, setRowsThisWeek] = useState(3);
    const [rowsNextWeek, setRowsNextWeek] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState(["Project", "Owner", "Status", "Due date", "Priority", "Timeline"]);
    const [selectedItem, setSelectedItem] = useState("Project");
    const style = "flex items-center";
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

    // function handleChange(value) {
    //     if (selectedOptions.includes(value)) {
    //         setSelectedOptions(prev => prev.filter(option => option !== value));
    //     }
    //     else {
    //         setSelectedOptions(prev => [...prev, value])
    //     }
    // }

    function moveOn () {
        setSection(prev => prev + 1);
    }
    function moveBack() {
        setSection(prev => prev - 1);
    }
    console.log(selectedItem);

    return (
        <div className="md:flex block">
            <div className="md:w-1/2 w-full relative px-10 pt-20 mb-32">
                <div className="w-5/6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                    <h1 className="text-3xl mb-7">Select one of the items you'd like to manage</h1>
                    <Radio.Group value={selectedItem !== "Project" && selectedItem !== "Tasks" ? "Custom" : selectedItem } onChange={e => setSelectedItem(e.target.value)} className="flex gap-5 justify-between mb-5">
                        <Radio value="Project" className={style} checked={selectedItem === "Project"}>Project</Radio>
                        <Radio value="Tasks" className={style} checked={selectedItem === "Tasks"}>Tasks</Radio>
                        <Radio value="Custom">
                            {selectedItem !== "Project" && selectedItem !== "Tasks" ? (<input type="text" value={selectedItem} onChange={e => setSelectedItem(e.target.value)} className="border pl-3 py-1 pr-5 rounded-md"/>) :  (<input type="text" value="Custom" onChange={e => setSelectedItem(e.target.value)} className="border pl-3 py-1 pr-5 rounded-md"/>)}</Radio>
                    </Radio.Group>
                    <p className="bg-gray-100 p-4 text-center rounded-md">"Items" are rows in your board which hold all the relevant information to your tasks, projects, campaigns, and more.</p>
                    <button onClick={moveBack} className="active:scale-75 transform transition duration-300 ease-in-out py-2 border border-gray-500 rounded-sm flex gap-1 items-center absolute -bottom-16 md:-bottom-14 left-10 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        Back
                    </button>
                    <button disabled={selectedItem === ""} onClick={moveOn} className="active:scale-75 transform transition duration-300 ease-in-out py-2 bg-blue-500 text-white rounded-sm flex gap-1 items-center absolute -bottom-16 md:-bottom-14 right-10 px-4">
                        Next 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    
                </div>
            </div>
            {/* Board */}
            <TableView setHeaders={setHeaders} headers={headers} createHeader={createHeader} rowsThisWeek={rowsThisWeek} setRowsThisWeek={setRowsThisWeek} rowsNextWeek={rowsNextWeek} setRowsNextWeek={setRowsNextWeek} selectedOptions={selectedOptions} selectedItem={selectedItem}/>
        </div>
    )
}
