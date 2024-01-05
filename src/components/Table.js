import { Status } from "../data/Status";
import { Month } from "../data/Month";
import { Priority } from "../data/Prority";
import { Timeline} from "../data/Timeline";

export default function TableBody({rows, cols, className, setState, selectedOptions, item}) {
    function createBoard() {
        const table = [];
        let numOfItem = 1;
        const currentDate = new Date();

        for (let i = 0; i < rows; i++) {
            const row = [];
            if (selectedOptions?.length > 0) {
                selectedOptions.map((option, index) => {
                    if (option === "Project") {
                        row.push(<td key={index} className="pr-4">{item} {numOfItem}</td>)
                        numOfItem++;
                    }
                    else if (option === "Owner") {
                        row.push(<td key={index}>
                            <i className="fa-regular fa-user bg-black rounded-full p-2 text-white"></i>
                        </td>)
                    }
                    else if (option === "Status") {
                        row.push(<td key={index} className={`${Status[i].style} text-white w-fit`}>{Status[i].name}</td>)
                    }
                    else if (option === "Due date") {
                        row.push(<td key={index}>{Month[currentDate.getMonth()]} {currentDate.getDate()}</td>)
                    }
                    else if (option === "Priority") {
                        row.push(<td key={index} className={`${Priority[i].style} text-white`}>{Priority[i].name}</td>)
                    }
                    else if (option === "Timeline") {
                        row.push(<td key={index} className="px-2"><p className={`${Timeline[i].style} text-white rounded-xl`}>{currentDate.getDate()} - {currentDate.getDate() + 1} {Month[currentDate.getMonth()]}</p></td>)
                    }
                })
            } else {
                for (let j = 0; j < cols - 1; j++) {
                    row.push(<td key={j}>....</td>)
                }
            }
            row.push(<th key={cols}></th>)
            table.push(<tr key={i}>{row}</tr>);
        }

        return table;
    }
    return (
        <tbody className={className}>
            {createBoard()}
            <td colSpan={cols} className="opacity-50 hover:cursor-pointer" onClick={() => setState(prev => prev + 1)}>+</td>
        </tbody>
    )
}