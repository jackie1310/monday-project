import { useState } from "react"
import TableBody from "../../components/Table";
import "./TableColumn.scss";
import OptionSvg from "../../components/OptionSvg";
import Button from "../../components/Button";

export default function TableColumn({setSection}) {
    const [boardName, setBoardName] = useState("");
    const [headers, setHeaders] = useState(3);
    const [rowsThisWeek, setRowsThisWeek] = useState(3);
    const [rowsNextWeek, setRowsNextWeek] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState([]);
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
    console.log(selectedOptions);

    function createBody() {

    }

    function handleChange(value) {
        if (selectedOptions.includes(value)) {
            setSelectedOptions(prev => prev.filter(option => option !== value));
        }
        else {
            setSelectedOptions(prev => [...prev, value])
        }
    }
    function moveOn () {
        setSection(prev => prev + 1)
    }
    function moveBack () {
        setSection(prev => prev - 1)
    }
    return (
        <div className="md:flex block">
            <div className="md:w-1/2 w-full relative px-10 pt-20 mb-32">
                <div className="w-5/6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                    <h1 className="text-3xl mb-2">Let's select relevant column for your board</h1>
                    <p className="mb-8">Choose from the most popular column types for your work</p>
                    <form className="flex flex-wrap gap-5">
                        <OptionSvg label="Owner" value="Owner" selectedOptions={selectedOptions} handleChange={handleChange}>
                            <i className={`fa-regular fa-user bg-blue-300 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg  label="Status" value="Status" selectedOptions={selectedOptions} handleChange={handleChange}>
                            <i className={`fa-solid fa-database bg-green-400 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg  label="Due date" value="Due date" selectedOptions={selectedOptions} handleChange={handleChange}>
                            <i className={`fa-solid fa-calendar bg-lime-600 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg  label="Budget" value="Budget" selectedOptions={selectedOptions} handleChange={handleChange}>
                            <i className={`fa-solid fa-list-ol bg-amber-400 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg  label="Priority" value="Priority" selectedOptions={selectedOptions} handleChange={handleChange}>
                            <i className={`fa-solid fa-turn-up bg-amber-400 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg  label="Notes" value="Notes" selectedOptions={selectedOptions} handleChange={handleChange}>
                            <i className={`fa-solid fa-t bg-blue-500 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg  label="Files" value="Files" selectedOptions={selectedOptions} handleChange={handleChange}>
                            <i className={`fa-solid fa-file bg-blue-300 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg  label="Timeline" value="Timeline" selectedOptions={selectedOptions} handleChange={handleChange}>
                            <i className={`fa-solid fa-timeline bg-purple-600 ${style}`}></i>
                        </OptionSvg>
                        <OptionSvg  label="Last updated" value="Last updated" selectedOptions={selectedOptions} handleChange={handleChange}>
                            <i className={`fa-solid fa-clock-rotate-left bg-rose-500 ${style}`}></i>
                        </OptionSvg>
                    </form>
                    <button onClick={moveBack} className="active:scale-75 transform transition duration-300 ease-in-out py-2 border border-gray-500 rounded-sm flex gap-1 items-center absolute -bottom-16 md:-bottom-14 left-10 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        Back
                    </button>
                    <button onClick={moveOn} className="active:scale-75 transform transition duration-300 ease-in-out py-2 bg-blue-500 text-white rounded-sm flex gap-1 items-center absolute -bottom-16 md:-bottom-14 right-10 px-4">
                        Next 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    
                </div>
            </div>
            {/* Board */}
            <div className="md:w-1/2 bg-gray-100 py-10 pl-10 h-screen">
                <div className="flex flex-col w-full bg-white pl-10 py-4 md:mt-6 pl-1 shadow-2xl shadow-blue-300">

                    <h1 className="text-2xl mb-10">{boardName}</h1>
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
                            <TableBody rows={rowsThisWeek} cols={selectedOptions?.length > 0 ? selectedOptions.length + 1 : headers + 1} setState={setRowsThisWeek} selectedOptions={selectedOptions}/>
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
                            <TableBody rows={rowsNextWeek} cols={selectedOptions?.length > 0 ? selectedOptions.length + 1 : headers + 1} setState={setRowsNextWeek} selectedOptions={selectedOptions}/>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
