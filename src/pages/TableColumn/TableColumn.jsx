import { useState } from "react"
import TableBody from "../../components/TableView/Table";
import "./TableColumn.scss";
import OptionSvg from "../../components/OptionSvg";
import Button from "../../components/Button";
import TableView from "../../components/TableView/TableView";
import { Items } from "../../data/Items";

export default function TableColumn({setSection, categories, setCategories}) {
    const style = "absolute -left-1 -top-0.5 rounded-sm z-10 p-1.5 text-white w-6";
    // function createHeader() {
    //     const cols = []
    //     if (selectedOptions?.length > 0) {
    //         selectedOptions.map((option, index) => (
    //             cols.push(<th key={index}>{option}</th>)
    //         ))
    //     }
    //     else {
    //         for (let i = 0; i < 4; i++) {
    //             cols.push(<th key={i}>----</th>)
    //         }
    //     }
    //     return cols;
    // }
    console.log(categories);

    function handleChange(value) {
        if (categories.includes(value) && categories.length > 2) {
            setCategories(prev => prev.filter(option => option !== value));
        }
        else if (!categories.includes(value)){
            setCategories(prev => [...prev, value])
        }
    }
    function moveOn () {
        setSection(prev => prev + 1)
    }
    function moveBack () {
        setSection(prev => prev - 1)
    }
    return (
        <div className="md:w-1/2 w-full relative px-10 pt-8 mb-32">
            <div className="w-5/6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                <h1 className="text-3xl mb-2">Let's select relevant column for your board</h1>
                <p className="mb-5">Choose from the most popular column types for your work</p>
                <form className="flex flex-wrap gap-5">
                    <OptionSvg label="Owner" value="Owner" categories={categories} handleChange={handleChange}>
                        <i className={`fa-regular fa-user bg-blue-300 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg  label="Status" value="Status" categories={categories} handleChange={handleChange}>
                        <i className={`fa-solid fa-database bg-green-400 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg  label="Due date" value="Due date" categories={categories} handleChange={handleChange}>
                        <i className={`fa-solid fa-calendar bg-lime-600 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg  label="Budget" value="Budget" categories={categories} handleChange={handleChange}>
                        <i className={`fa-solid fa-list-ol bg-amber-400 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg  label="Priority" value="Priority" categories={categories} handleChange={handleChange}>
                        <i className={`fa-solid fa-turn-up bg-amber-400 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg  label="Notes" value="Notes" categories={categories} handleChange={handleChange}>
                        <i className={`fa-solid fa-t bg-blue-500 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg  label="Files" value="Files" categories={categories} handleChange={handleChange}>
                        <i className={`fa-solid fa-file bg-blue-300 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg  label="Timeline" value="Timeline" categories={categories} handleChange={handleChange}>
                        <i className={`fa-solid fa-timeline bg-purple-600 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg  label="Last updated" value="Last updated" categories={categories} handleChange={handleChange}>
                        <i className={`fa-solid fa-clock-rotate-left bg-rose-500 ${style}`}></i>
                    </OptionSvg>
                </form>
                <div className="mt-5 bg-gray-100 p-4 rounded-md text-sm text-gray-600">
                    <p>{Items[categories[categories.length - 1]]}</p>
                </div>
                <button onClick={moveBack} className="active:scale-75 transform transition duration-300 ease-in-out py-2 border border-gray-500 rounded-sm flex gap-1 items-center absolute -bottom-16 md:-bottom-14 left-10 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    Back
                </button>
                <button disabled={categories.length === 0} onClick={moveOn} className="active:scale-75 transform transition duration-300 ease-in-out py-2 bg-blue-500 text-white rounded-sm flex gap-1 items-center absolute -bottom-16 md:-bottom-14 right-10 px-4">
                    Next 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>      
            </div>
        </div>
    )
}
