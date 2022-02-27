import React, {useState} from "react";
// Chakra imports
import { Separator } from "components/Separator/Separator";
import axios from "axios";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import ImageArchitect1 from "assets/img/ImageArchitect1.png";
import ImageArchitect2 from "assets/img/ImageArchitect2.png";
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
function Profile() {
  const [number, setNumber] = useState('');
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
        await axios.get("https://setuserver.herokuapp.com/consent/" + number, {mode: 'no-cors'}).then(response => window.location.replace(response.data))
  }
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );
  const emailColor = useColorModeValue("gray.400", "gray.300");

  return (
    <Flex direction="column">
      <Box
        
        
        px="0px"
        
        display="flex"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
        <Box
          bgImage={ProfileBgImage}
          w="98vw"
          h="98vh"
          margin="0px"
          
          
          bgRepeat="no-repeat"
          
          display="flex"
          justifyContent="center"
        >
          <Flex
            
            mx="1.5rem"
            maxH="330px"
            marginTop="50px"
            w={{ sm: "90%", xl: "95%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            align="center"
            backdropFilter="saturate(200%) blur(50px)"
            position="absolute"
            boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
            border="2px solid"
            borderColor={borderProfileColor}
            bg={bgProfile}
            p="24px"
            borderRadius="20px"
            transform={{
              sm: "translateY(45%)",
              md: "translateY(110%)",
              lg: "translateY(160%)",
            }}
          >
            <Flex
              align="center"
              mb={{ sm: "10px", md: "0px" }}
              direction="column"
              w={{ sm: "100%" }}
              
              textAlign={{ sm: "center", md: "start" }}
            >
              
              <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                <Text
                  fontSize="65px"
                  color={textColor}
                  fontWeight="bold"
                  
                >
                  SAHITYA 💸
                </Text>
            
                <Text as="sub" fontSize = "25px">
                  Enter Your Mobile Number
                </Text>
                <Separator/>
                <Text>
                  <input
                  type="text"
                  id="number"
                  name="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  >

                  </input>
              <button onClick={handleSubmit}>Next</button>
              </Text>
              </Flex>
            </Flex>
         
          </Flex>
        </Box>
      </Box>
      
      
    </Flex>
  );
}

export default Profile;

// const Home = () => {
//   const [number, setNumber] = useState('');
//   const [isLoading, setLoading] = useState(false);
// const mystyle = {
//   backgroundImage: 'url("https://images.unsplash.com/photo-1575516478880-7dfb1a114073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80")',
//   height: '100vh',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   margin:'-8px',
  
// }
// const extra = {
//   background: 'rgba(0,0,o,0.5)',
//   height: '100vh',
// }
//   const handleSubmit = async (e) => {
//     await axios.get("https://setuserver.herokuapp.com/consent/" + number, {mode: 'no-cors'}).then(response => window.location.replace(response.data))
    
//   }

//   return (
//     <>
//           <div style={mystyle} className='form-control'>
//             <div style={extra}>
//             <label htmlFor='number'>Enter your phone number : </label>
//             <input
//               type='number'
//               id='number'
//               name='number'
          
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//             />
//           <button onClick={handleSubmit} >add person</button>
//           </div>
//           </div>
        
//           </>  
     
   
//   );
// };

// export default Home;