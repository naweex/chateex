import { Button, Stack, TextField } from "@mui/material"

const Auth = () => {
    return(
    <Stack spacing={4} sx={{height : "100vh" , maxWidth: "60%" , margin : "0 auto" , justifyContent : "center"}}>
      <TextField type="email" label="EMAIL"/>
      <TextField type="password" label="PASSWORD"/>
      <Button>LOGIN</Button>
    </Stack>
  )
}

export default Auth;