import TableBody from "../Table";
import './TableView.scss';

export default function TableView({setHeaders, headers, createHeader, rowsThisWeek, setRowsThisWeek, rowsNextWeek, setRowsNextWeek, selectedOptions, selectedItem, groups}) {
    return (      
        <div className="text-sm overflow-x-scroll">
            <div className="w-fit mb-3">
                {groups[0] === ''
                    ? <div className="border-4 w-40 border-blue-500 rounded-lg"></div>
                    : <h2 className="text-xl text-gray-500">{groups[0]}</h2>
                }
            </div>
            <div className="tables">
                <div className="flex flex-col border-l-4 rounded-lg border-blue-500 mb-10">
                    <table className="flex-grow">
                        <thead>
                            <tr>
                                {createHeader()}
                                <th onClick={() => setHeaders(prev => prev + 1)} className="hover:cursor-pointer">+</th>
                            </tr>
                        </thead>
                        <TableBody rows={rowsThisWeek} cols={selectedOptions?.length > 0 ? selectedOptions.length + 1 : headers + 1} setState={setRowsThisWeek} selectedOptions={selectedOptions} item={selectedItem}/>
                    </table>
                </div>
                    
                <div className="w-fit mb-3">
                    {groups[1] === ''
                        ? <div className="border-4 w-40 border-green-500 rounded-lg"></div>
                        : <h2 className="text-xl text-gray-500">{groups[1]}</h2>
                    }
                </div>

                <div className="flex border-l-4 rounded-lg border-green-500">
                    <table className="flex-grow">
                        <thead>
                            <tr>
                                {createHeader()}
                                <th onClick={() => setHeaders(prev => prev + 1)} className="hover:cursor-pointer">+</th>
                            </tr>
                        </thead>
                        <TableBody rows={rowsNextWeek} cols={selectedOptions?.length > 0 ? selectedOptions.length + 1 : headers + 1} setState={setRowsNextWeek} selectedOptions={selectedOptions} item={selectedItem}/>
                    </table>
                </div>
            </div>
        </div>
    )
}