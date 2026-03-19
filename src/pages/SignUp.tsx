
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useRef } from "react"
import axios from "axios"
import { BACKEND_URL } from "../../config"


export function SignUp() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function SignUp() {
    const username = usernameRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        email,
        password
    })
    alert(" you have been signed up")
    
  }
  return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
    <div className="bg-white rounded-xl border min-w-48 p-8">
      <Input ref={usernameRef} placeholder="username" />
      <Input ref={emailRef} placeholder="email" />
      <Input ref={passwordRef} placeholder="password" />
      <div className=" flex justify-center pt-4">
      <Button onClick={SignUp} variant="primary" text="SignUp" fullWidth={true} loading={false} />
      </div>
    </div>
  </div> 
}