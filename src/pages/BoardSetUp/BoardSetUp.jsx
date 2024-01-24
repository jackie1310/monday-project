import { useState } from "react"
import "./BoardSetUp.scss";
import TableBody from "../../components/TableView/Table";

export default function BoardSetUp({setSection, boardName, setBoardName}) {
    function moveOn () {
        setSection(prev => prev + 1);
    }
    return (
        <div className="md:w-1/2 w-full relative px-10 pt-8 mb-32">
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
            <button disabled={boardName === ""} onClick={moveOn} className="flex gap-3 items-center absolute -bottom-16 md:-bottom-24 right-6 bg-gray-100 px-4 py-2 rounded-sm text-slate-400 active:scale-75 transform transition duration-300 ease-in-out">
                Next
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>       
    )
}