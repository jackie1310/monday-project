import { useState } from "react"
import "./BoardSetUp.scss";
import TableBody from "../../components/Table";

export default function BoardSetUp() {
    const [boardName, setBoardName] = useState("");
    const [headers, setHeaders] = useState(3);
    const [rowsThisWeek, setRowsThisWeek] = useState(0);
    const [rowsNextWeek, setRowsNextWeek] = useState(0);
    function createHeader() {
        const cols = []
        for (let i = 0; i < headers; i++) {
            cols.push(<th key={i}>----</th>)
        }
        return cols
    }
    return (
        <div className="md:flex block">
            <div className="md:w-1/2 w-full relative px-10 pt-20 mb-32">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                <h1 className="text-2xl mb-8">Let's start working together</h1>
                <p>Give your board a name, e.g marketing plan, sales pipeline, quarterly roadmap...</p>
                <form className="mt-5">
                    <input 
                        type="text" 
                        id="board-name" 
                        name="board-name" 
                        value={boardName} 
                        onChange={e => setBoardName(e.target.value)} 
                        placeholder="My first board" 
                        className="border border-gray-500 px-4 py-2 rounded-sm w-full focus:outline-none focus:border-indigo-500"
                    />
                </form>
                <p className="bg-gray-100 p-4 mt-10 rounded-sm">In monday.com, "boards" are the place where all your content lives.</p>
                <button className="flex gap-3 items-center absolute -bottom-16 md:-bottom-24 right-6 bg-gray-100 px-4 py-2 rounded-sm text-slate-400 active:scale-75 transform transition duration-300 ease-in-out">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
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
                            <TableBody rows={rowsThisWeek} cols={headers + 1} setState={setRowsThisWeek}/>
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
                            <TableBody rows={rowsNextWeek} cols={headers + 1} setState={setRowsNextWeek}/>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}