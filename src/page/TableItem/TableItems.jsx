import { useState } from "react"
import TableBody from "../../components/Table";
import "./TableItem.scss";
import Button from "../../components/Button";
import { Radio } from "antd";

export default function TableItem() {
    const [boardName, setBoardName] = useState("");
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
                    <button className="active:scale-75 transform transition duration-300 ease-in-out py-2 border border-gray-500 rounded-sm flex gap-1 items-center absolute -bottom-16 md:-bottom-14 left-10 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        Back
                    </button>
                    <button className="active:scale-75 transform transition duration-300 ease-in-out py-2 bg-blue-500 text-white rounded-sm flex gap-1 items-center absolute -bottom-16 md:-bottom-14 right-10 px-4">
                        Next 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    
                </div>
            </div>
            {/* Board */}
            <div className="md:w-1/2 bg-gray-100 py-10 pl-5 h-screen">
                <div className="flex flex-col w-full bg-white pl-5 py-4 md:mt-6 pl-1 shadow-2xl shadow-blue-300">

                    <h1 className="text-2xl mb-10">My demo board</h1>
                    <div className="w-fit mb-3">
                        <div className="border-2 border-blue-500 rounded-lg"></div>
                        <h2 className="text-xl">This week</h2>
                    </div>
                    
                    <div className="flex flex-col border-l-4 rounded-lg border-blue-500 mb-10">
                        <table className="flex-grow">
                            <thead>
                                <tr>
                                    {createHeader()}
                                    <th onClick={() => setHeaders(prev => prev + 1)} className="hover:cursor-pointer">+</th>
                                </tr>
                            </thead>
                            <TableBody rows={rowsThisWeek} cols={selectedOptions?.length > 0 ? selectedOptions.length + 1 : headers + 1} setState={setRowsThisWeek} selectedOptions={selectedOptions} item={selectedItem}/>
                        </table>
                    </div>
                    
                    <div className="w-fit mb-3">
                        <div className="border-2 border-green-500 rounded-lg"></div>
                        <h2 className="text-xl">Next week</h2>
                    </div>

                    <div className="flex border-l-4 rounded-lg border-green-500">
                        <table className="flex-grow">
                            <thead>
                                <tr>
                                    {createHeader()}
                                    <th onClick={() => setHeaders(prev => prev + 1)} className="hover:cursor-pointer">+</th>
                                </tr>
                            </thead>
                            <TableBody rows={rowsNextWeek} cols={selectedOptions?.length > 0 ? selectedOptions.length + 1 : headers + 1} setState={setRowsNextWeek} selectedOptions={selectedOptions} item={selectedItem}/>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
