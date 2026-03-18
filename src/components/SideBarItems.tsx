import type { ReactElement } from "react"

export function SideBarItems({text, icon}: {
  text:string,
  icon: ReactElement
}) {
  return <div className="flex
  gap-2 text-gray-600 py-2 cursor-pointer hover:bg-gray-100 rounded max.w-46 pl-4 pr-4 transition-all duration-150" >
    <div className="pr-2 ">{icon} </div>
    <div >{text}</div>
     
  </div>
}