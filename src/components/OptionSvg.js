import { Checkbox } from "antd";


export default function OptionSvg({children, label, value, selectedOptions, handleChange}) {
    return (
        <div className={`flex text-sm border p-2 rounded-sm ${selectedOptions.includes(value) ? "border-blue-400 border-2" : "border-slate-400"}`}>
            <Checkbox 
                id={value} 
                name={value}  
                value={value} 
                checked={selectedOptions.includes(value)} 
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
