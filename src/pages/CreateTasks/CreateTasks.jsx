import { useState } from "react";
import Button from "../../components/Button";
import TableView from "../../components/TableView/TableView";
import { Input } from "antd";

export default function CreateTasks({setSection}) {
    const [headers, setHeaders] = useState(3);
    const [rowsThisWeek, setRowsThisWeek] = useState(3);
    const [rowsNextWeek, setRowsNextWeek] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState(["Project", "Owner", "Status", "Due date", "Priority", "Timeline"]);
    const [selectedView, setSelectedView] = useState("Table");
    const [listOfView, setListOfView] = useState(["Table"]);
    const [selectedItems, setSelectedItems] = useState(["Task 1", "Task 2", "Task 3"]);
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

    function handleChange(value, index) {
        setSelectedItems(prev => {
            let current = [...prev];
            current[index] = value;
            return current;
        })

    }
    return (
        <div className="md:flex block h-screen">
            <div className="md:w-1/2 w-full relative px-10 pt-20 mb-32">
                <div className="w-5/6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                    <h1 className="text-3xl mb-7">List your Tasks</h1>
                    <form className="flex flex-wrap gap-5 mt-10">
                        {selectedItems.map((item, index) => (
                            <div className="relative w-full">
                                <Input value={item} onChange={e => handleChange(e.target.value, index)} type="text"/>
                                <svg onClick={() => handleChange('', index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-3.5 h-3.5 absolute right-2 top-2 text-gray-600 ${selectedItems[index] === '' && "hidden"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        ))}
                    </form>
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
                        <TableView setHeaders={setHeaders} headers={headers} createHeader={createHeader} rowsThisWeek={rowsThisWeek} setRowsThisWeek={setRowsThisWeek} rowsNextWeek={rowsNextWeek} setRowsNextWeek={rowsNextWeek} selectedOptions={selectedOptions} selectedItem={selectedItems}/>
                    </div>
                </div>
            </div>
        </div>
    )
}