import TableBody from "./Table";

export default function TableView({setHeaders, headers, createHeader, rowsThisWeek, setRowsThisWeek, rowsNextWeek, setRowsNextWeek, selectedOptions, selectedItem}) {
    return (
        <div className="md:w-1/2 bg-gray-100 py-10 pl-5 h-screen">
            <div className="flex flex-col w-full bg-white pl-5 py-4 md:mt-6 pl-1 shadow-2xl shadow-blue-300">

                <h1 className="text-2xl mb-10">My demo board</h1>
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
                        <TableBody rows={rowsThisWeek} cols={selectedOptions?.length > 0 ? selectedOptions.length + 1 : headers + 1} setState={setRowsThisWeek} selectedOptions={selectedOptions} item={selectedItem}/>
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
                        <TableBody rows={rowsNextWeek} cols={selectedOptions?.length > 0 ? selectedOptions.length + 1 : headers + 1} setState={setRowsNextWeek} selectedOptions={selectedOptions} item={selectedItem}/>
                    </table>
                </div>
                    
            </div>
        </div>
    )
}