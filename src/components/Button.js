export default function Button ({label, type, click}) {
    let style = "";
    switch (type) {
        case "none":
            style = "w-80 md:block hidden";
            break;
        case "responsive":
            style = "md:hidden";
            break;
    }
    return (
        <button className={`active:scale-75 transform transition duration-300 ease-in-out ${style} py-2 bg-blue-500 text-white rounded-sm`} onClick={() => click()}>{label}</button>
    )
}