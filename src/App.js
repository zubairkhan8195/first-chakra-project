import {Flex, Text, Button,Box, Input } from '@chakra-ui/react'
import React from 'react'

function App() {
  return (
      <>
        <Flex width='full' bg='#0F1317' height='100vh' align='center' justifyContent='space-between'>
            <Box bg='#1D242B' border='1px' borderColor='#586A7D' width='500px' height='100%' p='20px'>
                <Box>
                    <Text as='h6' fontSize='20px' paddingBottom='6px' color='#EDF2F7'>Action Title</Text>
                    <Input placeholder='My Action Title' bg='#28323B' color='#EDF2F7' border='none' size='lg'/>
                </Box>
                <Box paddingTop='20px' borderBottom='1px' borderColor='#586A7D' paddingBottom='15px'>
                    <Text as='h6' fontSize='20px' paddingBottom='6px' color='#EDF2F7'>Aspect Ratio</Text>
                    <Flex border='1px' borderRadius='4px' borderColor='#586A7D' w='45%' height='50px'>
                        <Box bg='#28323B' p='8px' width='70%'  border='1px'  textAlign='center' borderColor='#586A7D' color='#EDF2F7'>16.9</Box>
                        <Box bg='#3A4754' p='8px' width='100%'  border='1px' textAlign='center' borderColor='#586A7D' color='#EDF2F7' >9.16</Box>
                    </Flex>
                </Box>
                <Box paddingTop='20px'>
                    <Text as='h6' fontSize='20px' paddingBottom='6px' color='#EDF2F7'>Facecam</Text>
                    <Flex border='1px' borderRadius='4px' borderColor='#586A7D' w='55%' height='50px'>
                        <Box bg='#28323B' p='8px' width='70%'  border='1px'  textAlign='center' borderColor='#586A7D' color='#EDF2F7'>None</Box>
                        <Box bg='#3A4754' p='8px' width='100%'  border='1px' textAlign='center' borderColor='#586A7D' color='#EDF2F7' >Freedom</Box>
                    </Flex>
                </Box>
                <Box paddingTop='20px'>
                    <Text as='h6' fontSize='20px' paddingBottom='6px' color='#EDF2F7'>Preview Image</Text>
                    <Box border='1px' borderRadius='4px' borderColor='#586A7D'  height='200px'>
                        
                    </Box>
                </Box>

            </Box>
            <Flex width='full' border='1px' borderColor='#586A7D' p='10px' height='full' align='center' gap='15px'>
                   <Box bg='green.300' border='2px' borderColor='#586A7D' borderRadius='4px'  width='full' height='65%'></Box>
                   <Box bg='green.300' width='700px' border='2px' borderColor='#586A7D' borderRadius='4px' height='100%'></Box>
            </Flex>
        </Flex>
      </>
  )
}

export default App


{/* <Container maxWidth='container.xl' padding='10'>
      <Center  width={4}>
      </Center>
          <Flex h='100vh' py={20} >
             <VStack bg='red.300' w='full' h='full' p={10} align='flex-start'>
                 <Heading as="h4">Your Details</Heading>
                 <Spinner color='yellow' />
                 <Text>If you allready have an account, click here to login</Text>
                 <Button >Submit</Button>
             </VStack>
             <VStack bg='gray.200' w='full' h='full' p={10} spacing={10} align='flex-start'></VStack>
          </Flex>
      </Container> */}
