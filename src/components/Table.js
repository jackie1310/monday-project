
import { Status } from "../data/Status";
import { Month } from "../data/Month";

export default function TableBody({rows, cols, className, setState, selectedOptions}) {
    function createBoard() {
        const table = [];

        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols - 1; j++) {
                row.push(<td key={j}>....</td>)
            if (selectedOptions?.length > 0) {
                selectedOptions.map((option, index) => {
                    if (option === "Owner") {
                        row.push(<td key={index}>
                            <i className="fa-regular fa-user bg-black rounded-full p-2 text-white"></i>
                        </td>)
                    }
                    if (option === "Status") {
                        row.push(<td key={index} className={`${Status[i].style} text-white`}>{Status[i].name}</td>)
                    }
                    if (option === "Due date") {
                        const currentDate = new Date();
                        row.push(<td key={index}>{Month[currentDate.getMonth()]} {currentDate.getDate() + 1}</td>)
                    }
                })
            } else {
                for (let j = 0; j < cols - 1; j++) {
                    row.push(<td key={j}>....</td>)
                }
            }
            row.push(<th key={cols}></th>)
            table.push(<tr key={i}>{row}</tr>);
        }}
        return table;
    }
    return (
        <tbody className={className}>
            {createBoard()}
            <td colSpan={cols} className="opacity-50 hover:cursor-pointer" onClick={() => setState(prev => prev + 1)}>+</td>
        </tbody>
    )
}