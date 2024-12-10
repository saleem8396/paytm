import { Username } from "./UserName"

export function Appbar(){
    
    return<div className="flex justify-between  border-2 shodow-lg">
       <div className="pl-2 pt-2"> PayTm App</div> 
<div className="px-2">  
     <Username userName={"saleem"}></Username>
</div>
</div>
}