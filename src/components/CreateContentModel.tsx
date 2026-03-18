import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./Button";


interface CreateContentModelProps {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModel({ open, onClose }: CreateContentModelProps) {
  return <div>
    {open && <div onClick={onClose}
    className="h-screen w-screen bg-slate-500 fixed opacity-70 top-0 left-0 flex justify-center">
      <div className="justify-center flex flex-col">
        <span onClick={(e) => e.stopPropagation()} className="bg-white opacity-100 p-4 rounded-md">

          <div className="flex justify-end">
            <div className="cursor-pointer" onClick={onClose}>
              <CrossIcon />
            </div>
          </div>
          <div>
            <Input placeholder={"Title"} />
            <Input placeholder={"Link"} />


          </div>
          <div className="flex justify-center">
            <Button variant="primary" text="Submit" />
          </div>
        </span>
      </div>
    </div>}
  </div>


}