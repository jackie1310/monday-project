import { useState } from "react"
import "./TableItem.scss";
import { Radio } from "antd";
import TableView from "../../components/TableView/TableView";

export default function TableItem({setSection, itemName, setItemName, itemNames, setItemNames, setCategories}) {
    const [current, setCurrent] = useState("");
    const style = "flex items-center";
    function moveOn () {
        setSection(prev => prev + 1);
    }
    function moveBack() {
        setSection(prev => prev - 1);
    }
    function handleChange(value) {
        setItemName(value);
        setCategories(prev => {
            const newData = [...prev];
            newData[0] = value
            return newData;
        })
        if (value !== "Project" && value !== "Task") {
            setCurrent(value);
        }
        totalChange(value);
    }

    function deleteCurrent() {
        setCurrent("");
        setItemName("");
        totalChange("");
    }
    function totalChange (value)
    {
        value = value === "" ? "Task" : value;
        const newData = [...itemNames]
        newData.forEach((item,index)=>{
            item.name = `${value} ${index +1}`
        })
        setItemNames(newData)
    }
    console.log(itemName)
console.log(itemName !== "Project" && itemName !== "Task" )
    return (
        <div className="md:w-1/2 w-full relative px-10 pt-8 mb-32">
            <div className="w-5/6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                <h1 className="text-3xl mb-7">Select one of the items you'd like to manage</h1>
                <Radio.Group value={itemName !== "Project" && itemName !== "Task" ?current  : itemName} onChange={e => {handleChange(e.target.value); totalChange(e.target.value)}} className="flex gap-5 justify-between mb-5">
                    <Radio value="Task" className={style} checked={itemName === "Task"}>Tasks</Radio>
                    <Radio value="Project" className={style} checked={itemName === "Project"}>Projects</Radio>
                    <Radio value={current}>
                        {itemName !== "Project" && itemName !== "Task" 
                            ? (
                                <div className="relative">
                                    <input type="text" value={itemName} placeholder="Custom" onChange={e => handleChange(e.target.value)} className="border pl-3 py-1 pr-5 rounded-md"/>
                                    {current !== "" && (<i className="fa-solid fa-xmark absolute right-2 top-2" onClick={deleteCurrent}></i>)}
                                </div>
                            ) 
                            : (
                                <div className="relative">
                                    <input type="text" placeholder="Custom" value={current} onChange={e => handleChange(e.target.value)} className="border pl-3 py-1 pr-5 rounded-md"/>
                                    {current !== "" && (<i className="fa-solid fa-xmark absolute right-2 top-2" onClick={deleteCurrent}></i>)}
                                </div>
                            )
                        }
                    </Radio>
                </Radio.Group>
                <p className="bg-gray-100 p-4 text-center rounded-md">"Items" are rows in your board which hold all the relevant information to your tasks, projects, campaigns, and more.</p>
                <button onClick={moveBack} className="active:scale-75 transform transition duration-300 ease-in-out py-2 border border-gray-500 rounded-sm flex gap-1 items-center absolute -bottom-16 md:-bottom-14 left-10 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    Back
                </button>
                <button disabled={itemName === ""} onClick={moveOn} className="active:scale-75 transform transition duration-300 ease-in-out py-2 bg-blue-500 text-white rounded-sm flex gap-1 items-center absolute -bottom-16 md:-bottom-14 right-10 px-4">
                    Next 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>        
            </div>
        </div>
    )
}
