import { useState } from "react"
import BoardSetUp from "./BoardSetUp/BoardSetUp";
import TableColumn from "./TableColumn/TableColumn"
import TableItem from "./TableItem/TableItems";
import TableViewLayout from "./TableViewLayout/TableViewLayout";

export default function CreateTable() {
    const [section, setSection] = useState(4);
    if (section === 1) return <BoardSetUp setSection={setSection}/>
    else if (section === 2) return <TableColumn setSection={setSection}/>
    else if (section === 3) return <TableItem setSection={setSection}/>
    else if (section === 4) return <TableViewLayout setSection={setSection}/>
}