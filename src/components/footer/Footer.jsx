import React from "react";
import { Text } from "@mantine/core";

const Footer = (props) => {
  return (
    <footer style={{width: '80%', maxHeight: '5px', margin: 'auto'}}>
      <Text pos="fixed" align="right" color="white" mt="lg">&copy; Whitehorse Bullyz</Text>
    </footer>
  )
};

export default Footer;