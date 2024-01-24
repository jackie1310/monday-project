import { useState } from "react";
import Button from "../../components/Button";
import { Input } from "antd";

export default function CreateTasks({setSection, itemNames, setItemNames}) {
    // const style = "absolute -left-1 -top-0.5 rounded-sm z-10 p-1.5 text-white w-6";

    function moveOn () {
        setSection(prev => prev + 1)
    }
    function moveBack () {
        setSection(prev => prev - 1)
    }

    function singleChange(value, index) {
        const newData = [...itemNames]
        newData[index].name = value
        setItemNames(newData)
    }
    console.log(itemNames)
    return (
            <div className="md:w-1/2 w-full relative px-10 pt-20 mb-32">
                <div className="w-5/6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                    <h1 className="text-3xl mb-7">List your Tasks</h1>
                    <form className="flex flex-wrap gap-5 mt-10">
                        {itemNames?.map((item, index) => (
                            <div className="relative w-full">
                                <Input value={item.name} onChange={e => singleChange(e.target.value, index)} type="text"/>
                                <svg onClick={() => singleChange('', index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-3.5 h-3.5 absolute right-2 top-2 text-gray-600 ${itemNames[index].name === '' && "hidden"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        ))}
                    </form>
                    <Button label="Back" type="back" click={moveBack} />
                    <Button label="Next" type="front" click={moveOn} />
                </div>
            </div>
    )
}