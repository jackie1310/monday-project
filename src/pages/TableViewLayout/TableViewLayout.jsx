import { useState } from "react";
import OptionSvg from "../../components/OptionSvg";
import Button from "../../components/Button";

export default function TableViewLayout({setSection, selectedView, handleView}) {
    const style = "absolute -left-1 -top-0.5 rounded-sm z-10 p-1.5 text-white w-6";

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
                <h1 className="text-3xl mb-5">Add a view layout</h1>
                <p>Transform the way you see and manage your work with more unique views. You can always add more later.</p>
                <form className="flex flex-wrap gap-5 mt-10">
                    <OptionSvg label="Table" value="Table" handleChange={handleView} categories={selectedView}>
                        <i className={`fa-solid fa-table bg-purple-600 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg label="Kanban" value="Kanban" handleChange={handleView} categories={selectedView}>
                        <i className={`fa-solid fa-chart-simple bg-blue-500 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg label="Cards" value="Cards" handleChange={handleView} categories={selectedView}>
                        <i className={`fa-solid fa-copy bg-orange-500 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg label="Gantt" value="Gantt" handleChange={handleView} categories={selectedView}>
                        <i className={`fa-solid fa-grip-lines bg-emerald-700 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg label="Calendar" value="Calendar" handleChange={handleView} categories={selectedView}>
                        <i className={`fa-regular fa-calendar bg-pink-300 ${style}`}></i>
                    </OptionSvg>
                    <OptionSvg label="Timeline" value="Timeline" handleChange={handleView} categories={selectedView}>
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
    )
}