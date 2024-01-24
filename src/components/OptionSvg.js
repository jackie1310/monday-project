import { Checkbox } from "antd";


export default function OptionSvg({children, label, value, categories, handleChange}) {
    let checked;
    if (typeof categories == "string" && categories === value) {
        checked = true;
    }
    else if (categories.includes(value)) {
        checked = true
    }
    return (
        <div className={`flex text-sm border p-2 rounded-sm ${categories.includes(value) ? "border-blue-400 border-2" : "border-slate-400"}`}>
            <Checkbox 
                id={value} 
                name={value}  
                value={value} 
                checked={checked} 
                onChange={() => handleChange(value)}
                className="relative active:scale-75 transform transition duration-300 ease-in-out"
            >
                {children}
                {label}
            </Checkbox>
            {/* <input type={type} id={value} name={value}  value={value} checked={selectedOption === value} onChange={() => setSelectedOption(value)}/>
            <label>{label}</label> */}
        </div>
    )
}
