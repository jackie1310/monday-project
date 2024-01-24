import { Status } from "../../data/Status";
import { Month } from "../../data/Month";
import { Priority } from "../../data/Prority";
import { Timeline} from "../../data/Timeline";
import './TableView.scss';
import { budget } from "../../data/budget";
import { notes } from "../../data/notes";

export default function TableBody({rows, cols, className, setState, categories, items, item, add}) {
    
    function createBoard() {
        const table = [];
        let numOfItem = 1;
        const currentDate = new Date();

        for (let i = 0; i < rows; i++) {
            const row = [];
            if (categories?.length > 1) {
                categories.map((option, index) => {
                    if (option === item) {
                        // if (typeof items === 'string'){
                        //     row.push(<td key={index} className="pr-4">{option === "Project" ? `${item === "" ? "Task" : item} ${numOfItem}` : <div className="border-2 w-12 border-gray-400 my-3 ml-3 rounded-lg"></div>}</td>)
                        //     numOfItem++;
                        // }
                        // else {
                        if (items?.length > 0) {
                            row.push(<td key={index} className="pr-4">{items[numOfItem - 1].name === '' ? `Task ${numOfItem}` : items[numOfItem - 1].name}</td>)
                            numOfItem++;
                        }
                            
                        // }
                    }
                    else if (option === "Owner") {
                        row.push(<td key={index}>
                            <i className="fa-regular fa-user bg-black rounded-full p-2 text-white"></i>
                        </td>)
                    }
                    else if (option === "Status") {
                        row.push(<td key={index} className={`${Status[i].style} text-white`}>{Status[i].name}</td>)
                    }
                    else if (option === "Due date") {
                        row.push(<td key={index}>{Month[currentDate.getMonth()]} {currentDate.getDate()}</td>)
                    }
                    else if (option === "Priority") {
                        row.push(<td key={index} className={`${Priority[i].style} text-white`}>{Priority[i].name}</td>)
                    }
                    else if (option === "Timeline") {
                        row.push(<td key={index} className="px-2"><p className={`${Timeline[i].style} text-white rounded-xl`}>{currentDate.getDate()} - {currentDate.getDate() + 1} {Month[currentDate.getMonth()]}</p></td>)
                    } else if (option === "Files") {
                        row.push(<td key={index} className="px-2"></td>)
                    } else if (option === "Budget") {
                        row.push(<td key={index} className="px-2">${budget[i]}</td>)
                    } else if (option === "Last updated"){
                        row.push(<td key={index} className="px-2">3 days ago</td>)
                    } else if (option === "Notes") {
                        row.push(<td key={index} className="px-2">{notes[i]}</td>)
                    }
                })
            } else {
                for (let j = 0; j < cols - 1; j++) {
                    row.push(<td key={j} className="p-4"><div className="border-2 w-16 border-gray-400 rounded-lg"></div></td>)
                }
            }
            row.push(<th key={cols}></th>)
            table.push(<tr style={{
                gridTemplateColumns : `repeat(${cols}, minmax(120px,1fr))`
            }} key={i}>{row}</tr>);
        }
        table.push(
            <tr>
                <tfoot colSpan={cols} className="opacity-50 hover:cursor-pointer flex py-2 pl-7 h-10 border border-gray-400" onClick={() => setState(prev => prev + 1)}>
                    {add === false
                        ? <div className="border-2 w-32 border-gray-400 my-3 ml-3 rounded-lg"></div>
                        : `+ Add ${item}`
                    }
                </tfoot>
            </tr>
        )

        return table;
    }
    return (
        <tbody className={`${className} table`}>
            {createBoard()}
        </tbody>
    )
}