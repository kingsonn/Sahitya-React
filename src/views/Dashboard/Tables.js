import React from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesProjectData, tablesTableData } from "variables/general";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="Column" pt={{ base: "120px", md: "75px" }}>
      <Card  overflowX={{ sm: "scroll", xl: "hidden" }} >
        <CardHeader p="6px 0px 22px 0px">
        
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Topics
          </Text>
         
          
        </CardHeader>
        <CardBody>
          
              
                    <Flex direction="row" >
                    <Button>
                    <Text>
                      hello
                    </Text>
                    </Button>
                    <Button>
                    <Text>
                      hello
                    </Text>
                    </Button>
                    <Button>
                    <Text>
                      hello
                    </Text>
                    </Button>
                    <Button>
                    <Text>
                      hello
                    </Text>
                    </Button>
                    <Button>
                    <Text>
                      hello
                    </Text>
                    </Button>
                    <Button>
                    <Text>
                      hello
                    </Text>
                    </Button>
                    <Button>
                    <Text>
                      hello
                    </Text>
                    </Button>
                    <Button>
                    <Text>
                      hello
                    </Text>
                    </Button>
                    <Button>
                    <Text>
                      hello
                    </Text>
                    </Button>
                    <Button>
                    <Text>
                      hello
                    </Text>
                    </Button>
                    <Button>
                    <Text>
                      hello
                    </Text>
                    </Button>
          </Flex>
        </CardBody>
      </Card>
      <Card
       
      >
        <CardHeader p="6px 0px 22px 0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              Projects Table
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          Hello
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
