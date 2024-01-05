import { Radio } from "antd";

export default function Option({value}) {
    return (
        <Radio label={value} value={value} className="flex text-sm gap-1 items-center border px-4 py-2 rounded-3xl border-slate-400">{value}</Radio>
    )
}