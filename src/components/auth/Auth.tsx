import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react";

interface AuthProps {
  submitLabel : string;
  onSubmit : (credentials : {email : string , password : string}) => Promise<void>
}
const Auth = ({submitLabel , onSubmit} : AuthProps) => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

    return(
    <Stack 
    spacing={2} 
    sx={{
      height : "100vh" ,
      maxWidth: {xs : "80%" , md : "40%"} ,
      margin : "0 auto" ,
      justifyContent : "center"}}>
      <TextField type="email" label="EMAIL" variant="standard" value={email} onChange={(event) => setEmail(event.target.value)}/>
      <TextField type="password" label="PASSWORD" variant="standard" value={password} onChange={(event) => setPassword(event.target.value)}/>
      <Button variant="text" onClick={() => onSubmit({email , password})}>{submitLabel}</Button>
    </Stack>
  )
}

export default Auth;