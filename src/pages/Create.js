import { useState } from "react";
import CreateAccount from "./CreateAccount/CreateAccount";
import Role from "./Role";

export default function Create() {
    const [section, setSection] = useState(1);
    if (section === 1) return <CreateAccount/>
    else if (section === 2) return <Role/>
}