import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import IconBox from "components/Icons/IconBox";
import React from "react";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, ...rest } = props;
  return (
    <Flex
      borderRadius="15px"
      flexDirection="column"
      bgImage={SidebarHelpImage}
      justifyContent="flex-start"
      alignItems="start"
      boxSize="border-box"
      p="16px"
      h="100px"
      w="100%"
    >
      
      <Text fontSize="sm" color="white" fontWeight="bold">
          Need Help?
      </Text>
      <Text fontSize="xs" color="white" mb="10px">
        Email me on hansonnnnnnn@gmail.com
      </Text>
      
        
    </Flex>
  );
}
