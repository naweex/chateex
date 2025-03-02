import { Button, Stack, TextField } from "@mui/material"

const Auth = () => {
    return(
    <Stack 
    spacing={2} 
    sx={{
      height : "100vh" ,
      maxWidth: {xs : "80%" , md : "40%"} ,
      margin : "0 auto" ,
      justifyContent : "center"}}>
      <TextField type="email" label="EMAIL" variant="standard"/>
      <TextField type="password" label="PASSWORD" variant="standard"/>
      <Button variant="text">LOGIN</Button>
    </Stack>
  )
}

export default Auth;