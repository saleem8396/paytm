export function InputBox({label,placeholder}){
    return<div>
        <div className="font-medium text-left py-1 pt-3">
        {label}
        </div>
        <div>
           <input placeholder={placeholder} className="w-full pl-2 px-1 py-2 border rounded-md border-slate-900"></input>
           </div>
    </div>
}