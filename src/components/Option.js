export default function Option({type, label, value, selectedOption, setSelectedOption}) {
    return (
        <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
            <input type={type} id={value} name={value} value={value} checked={selectedOption === value} onChange={() => setSelectedOption(value)}/>
            <label>{label}</label>
        </div>
    )
}