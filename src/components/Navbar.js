import React from "react";
import { Link } from "react-router-dom";
//Stack is a layout components that handles vertical or horizontal lists
import { Stack } from "@mui/material";
import Logo from "../assets/images/gym-logo2.webp";

const Navbar = () => {
  return (
    <Stack direction="row"
            justifyContent="space-around"
            sx={{gap:{sm:"122px", xs:"40px"}, mt:{sm:"32px", xs:"20px"}, justifyContent:"none"}}
            px="20px">
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "50px", height: "50px", margin: "5px 50px" }}
        />
      </Link>
      <Stack direction="row"
             gap="40px"
             fontSize="24px"
             alignItems="center"
      >
        <Link to="/" style={{textDecoration:"none", color: "#3A1212", borderBottom: '3px solid #0055FF'}}>Home</Link>
        <a href="#exercises" style={{textDecoration:"none", color:"#3A1212",borderBottom: '3px solid #0055FF'}}>Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
