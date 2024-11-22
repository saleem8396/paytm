export function inputBox({label,placeholder}){
    return<div>
        <div className="font-bold text-left py-2 text-slate-500">
        {label}
        </div>
        <div>
           <input placeholder={placeholder} className="w-full font-light px-1 py-2 border rounded-md border-slate-500"></input>
           </div>
    </div>
}