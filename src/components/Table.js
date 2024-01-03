export default function TableBody({rows, cols, className, setState}) {
    function createBoard() {
        const table = [];

        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols - 1; j++) {
                row.push(<td key={j}>....</td>)
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