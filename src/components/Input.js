export default function Input({label, category, type, placeholder, value, setState, helper}) {
    return (
        <div className="flex flex-col gap-1 input-group">
            <label htmlFor={category}>{label}</label>
            <input type={type} id={category} name={category} value={value} onChange={e => setState(e.target.value)} placeholder={placeholder} className="focus:border-red-500 focus:border-1 focus:outline-none px-4 py-2 border border-gray-400 rounded-sm"/>
            <h1 className="helper-text">{helper}</h1>
        </div>
    )
}