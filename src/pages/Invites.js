import Layout from "../components/Layout";
import img5 from "../assets/img5.png";
import dev from "../assets/monday-dev.png";
import InviteUser from "../components/InviteUser";
import { useState } from "react";

export default function Invites() {
    const [users, setUsers] = useState([{}, {}]);
    function addNewUser() {
        setUsers(prev => {
            return [...prev, {email: '', role: ''}];
        });
    }
    function moveToCreateTable() {
        window.location = '/column';
    }
    return (
        <Layout img={img5}>
            <div className="mx-10 mt-6">
                <img src={dev} alt='logo' className="w-32 h-28 mb-3"/>
                <h1 className="text-3xl mb-2">Invite your teammates</h1>
                <h3 className="mb-7">Collaborate with your team to get the most out of monday.com</h3>
                {users.length > 0 && users.map((user) => (
                    <InviteUser/>
                ))}
                <button className="flex gap-2 text-sm mt-3 items-center mx-4" onClick={addNewUser}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add another
                </button>
            </div>
            <button onClick={moveToCreateTable} className="bg-blue-500 text-white px-4 py-2 absolute right-10 md:bottom-10 -bottom-16 rounded-sm active:scale-75 transform transition duration-300 ease-in-out">
                Invite your team
            </button>
            <button className="px-4 py-2 absolute left-10 md:bottom-10 -bottom-16 rounded-sm active:scale-75 transform transition duration-300 ease-in-out">
                Remind me later
            </button>
        </Layout>
    )
}