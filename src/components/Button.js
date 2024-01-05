export default function Button ({label, type, click}) {
    let style = "";
    switch (type) {
        case "none":
            style = "w-80 md:block hidden";
            break;
        case "responsive":
            style = "md:hidden bg-blue-500 text-white";
            break;
        case "front":
            style = "flex gap-1 items-center absolute -bottom-16 md:bottom-10 right-10 px-4 bg-blue-500 text-white";
            break;
        case "back":
            style = "flex gap-1 items-center absolute -bottom-16 md:bottom-10 left-10 px-4 border border-gray-400 bg-white text-black"
    }
    return (
        <button className={`active:scale-75 transform transition duration-300 ease-in-out ${style} py-2 rounded-sm`} onClick={() => click()}>
            {type === "back" && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            )}
            {label}
            {type === "front" && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            )}
        </button>
    )
}