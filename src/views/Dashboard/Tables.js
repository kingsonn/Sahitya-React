import React, {useState} from "react";
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
import { mutualfunds, lesson0, etfs, insurance, equity, debtRatio } from "education";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesProjectData, tablesTableData } from "variables/general";

function Tables() {
  const [title, setTitle] = useState("Benefits of Financial Literacy")
  const [lesson, setLesson] = useState(lesson0.data)
 
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Flex direction="Column" pt={{ base: "120px", md: "75px" }}>
      <Card  overflowX={{ sm: "scroll", xl: "hidden" }} >
        <CardHeader p="6px 0px 22px 0px">
        
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Topics you need to know
          </Text>
         
          
        </CardHeader>
        <CardBody>
          
              
                    <Flex direction="row"  >
                    <Button margin= "5PX" onClick={() => {setTitle("Mutual Funds"); setLesson(mutualfunds.Content)}}>
                    <Text>
                      Mutual Funds 
                    </Text>
                    </Button>
                    <Button margin= "5PX" onClick={() => {setTitle("Exchange Traded Funds"); setLesson(etfs.Content)}}>
                    <Text>
                    Exchange Traded funds
                    </Text>
                    </Button>
                    <Button margin= "5PX" onClick={() => {setTitle("Equity Shares"); setLesson(equity.Content)}}>
                    <Text>
                      Equity Shares
                    </Text>
                    </Button>
                    <Button margin= "5PX" onClick={() => {setTitle("Debt Ratio"); setLesson(debtRatio.Content)}}>
                    <Text>
                      Debt Ratio
                    </Text>
                    </Button >
                    <Button margin= "5PX" onClick={() => {setTitle("Waiver of premium"); setLesson(insurance.Content)}}>
                    <Text>
                      Insurance Policy
                    </Text>
                    </Button >
                    
          </Flex>
        </CardBody>
      </Card>
      <Card
       
      >
        <CardHeader p="6px 0px 22px 0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              {title}
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          {lesson}
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
