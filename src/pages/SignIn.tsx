
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/login`, {
                username,
                password
            })
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/dashboard")
        } catch (e) {
            alert("Error while signing in")
        }
    }



  return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
    <div className="bg-white rounded-xl border min-w-48 p-8">
      <Input ref={usernameRef} placeholder="username"></Input>
      <Input ref={passwordRef} placeholder="password"></Input>
            <div className=" flex justify-center pt-4">
                <Button onClick={signin} variant="primary" text="SignIn" fullWidth={true} loading={false} />
            </div>
    </div>
  </div> 
}