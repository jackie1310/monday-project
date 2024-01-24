import TableBody from "./Table";
import './TableView.scss';

export default function TableView({rowsFirstTable, setRowsFirstTable, rowsSecondTable, setRowsSecondTable, categories, itemNames, itemName, groups, add}) {
    function createHeaders() {
        const cols = []
        if (categories?.length > 1) {
            categories.map((option, index) => (
                cols.push(<th key={index}>{option}</th>)
            ))
        }
        else {
            for (let i = 0; i < 4; i++) {
                cols.push(<th key={i} className="p-4"><div className="border-2 w-16 border-gray-400 rounded-lg "></div></th>)
            }
        }
        cols.push(<th className="hover:cursor-pointer">+</th>)
        return cols;
    }
    return (      
        <div className="text-sm overflow-x-scroll">
            <div className="w-fit mb-3">
                {groups[0] === ''
                    ? <div className="border-4 w-28 border-blue-500 rounded-lg"></div>
                    : <h2 className="text-xl text-blue-500">{groups[0]}</h2>
                }
            </div>
            <div className="min-w-[560px]">
                <div className="flex flex-col border-l-4 rounded-lg border-blue-500 mb-10">
                    <table >
                        <thead className="table">
                            <tr style={{
                                gridTemplateColumns : `repeat(${categories?.length > 1 ? categories?.length + 1 : 5}, minmax(120px,1fr))`
                            }}>
                                {createHeaders()}
                            </tr>
                        </thead>
                        <TableBody rows={rowsFirstTable} cols={categories?.length > 1 ? categories.length + 1 : 5} setState={setRowsFirstTable} categories={categories} items={itemNames} item={itemName} add={add}/>
                    </table>
                </div>
                    
                <div className="w-fit mb-3">
                    {groups[1] === ''
                        ? <div className="border-4 w-28 border-green-500 rounded-lg"></div>
                        : <h2 className="text-xl text-green-500">{groups[1]}</h2>
                    }
                </div>

                <div className="flex border-l-4 rounded-lg border-green-500">
                    <table className="flex-grow">
                        <thead className="table">
                            <tr style={{
                                gridTemplateColumns : `repeat(${categories?.length > 1 ? categories?.length + 1 : 5}, minmax(120px,1fr))`
                            }}>
                                {createHeaders()}
                            </tr>
                        </thead>
                        <TableBody rows={rowsSecondTable} cols={categories?.length > 1 ? categories?.length + 1 : 5} setState={setRowsSecondTable} categories={categories} items={itemNames} item={itemName} add={add}/>
                    </table>
                </div>
            </div>
        </div>
    )
}