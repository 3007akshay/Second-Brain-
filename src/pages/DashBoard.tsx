


import { Button } from "../components/Button"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Card } from "../components/Card"
import { CreateContentModel } from "../components/CreateContentModel"
import { useState } from "react"
import { SideBar } from "../components/SideBar"
export function DashBoard() {

  const [openModel, setopenModel] = useState(true)

  return <div>
    <SideBar />

    <div className="p-4 bg-gray-100 ml-76 m-h-screen ">
      <CreateContentModel open={openModel} onClose={() => setopenModel(false)}></CreateContentModel>
      <div className="flex justify-end gap-4 ">
        <Button onClick={() => setopenModel(true)} variant="primary" text="Add content" startIcon={<PlusIcon />}></Button>
        <Button variant="secondary" text="share Brain" startIcon={<ShareIcon />}></Button>
      </div>

      <div className="flex gap-4">
        <Card title="first tweet" link="https://x.com/elonmusk/status/2034168476559118401?s=20" type="twitter" ></Card>

        <Card title="first video" link="https://www.youtube.com/watch?v=uqpXAfNEY4g" type="youtube"
        ></Card>
      </div>
    </div>



  </div>


}


