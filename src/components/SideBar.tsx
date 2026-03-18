
import { TwitterIcon } from "../icons/TwittterIcon"
import { YouTubeIcon } from "../icons/YoutubeIcon"
import { SideBarItems } from "./SideBarItems"
import { BrainIcon } from "../icons/BrainIcon"

export function SideBar() {
  return <div className="h-screen w-72 bg-white fixed border-r left-0 top-0 pl-6"> 
  <h1 className="flex text-2xl pt-4 items-center">
    <div className="pr-2 text-purple-600">
      <BrainIcon/>
    </div>
    Brainly</h1>
    <div className="pt-4">
  <SideBarItems
  text="Twitter"
  icon={<TwitterIcon/>}/>
  <SideBarItems
  text="Youtube"
  icon={<YouTubeIcon/>}/>
  </div>
  
   </div>
}