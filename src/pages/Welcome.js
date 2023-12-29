import { useState } from "react";
import SignUp from "./SignUp";
import CreateAccount from "./CreateAccount/CreateAccount";

export default function Welcome() {
    const [section, setSection] = useState(1);

    if (section === 1) return <CreateAccount setSection={setSection}/>
}