export default function InviteUser({value}) {
    return (
        <form className="flex pr-32 my-1">
            <input type="email" placeholder="Add email here" className="px-2 py-1 border border-gray-400 rounded-sm flex-grow text-sm"/>
            <select className="w-32 text-center border border-gray-500 relative text-sm">
                <option value="admin">
                    Admin
                </option>
                <option value="member">
                    Member
                </option>
            </select>
        </form>
    )
}