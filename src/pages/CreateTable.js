import { useState } from "react"
import BoardSetUp from "./TableColumn/TableColumn";
import TableColumn from "./TableColumn/TableColumn";

export default function CreateTable() {
    const [section, setSection] = useState(1);
    if (section === 1) return <BoardSetUp/>
    else if (section === 2) return <TableColumn/>
}