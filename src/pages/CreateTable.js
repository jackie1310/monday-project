import { useState } from "react"
import BoardSetUp from "./BoardSetUp/BoardSetUp";
import TableColumn from "./TableColumn/TableColumn"

export default function CreateTable() {
    const [section, setSection] = useState(1);
    if (section === 1) return <BoardSetUp setSection={setSection}/>
    else if (section === 2) return <TableColumn setSection={setSection}/>
}