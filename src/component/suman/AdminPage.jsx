import React,{ReactNode} from 'react'
import { AppContest } from './authContext/AuthContextProvider';
import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  // HStack,
  Avatar,
  // AvatarBadge,
  // IconButton,
  Center,Text,
  GridItem,Select
} from '@chakra-ui/react';
// import { SmallCloseIcon } from '@chakra-ui/icons';
import axios from "axios";
import { useToast } from '@chakra-ui/react'


import AdminNavbar from './AdminNavbar';


const AdminPage = () => {
  const toast = useToast()

  const [url,setUrl]=React.useState("")
const [title,setTitle]=React.useState("")
const [price,setPrice]=React.useState()
const [description,setDescription]=React.useState("")
const [category,setCategory]=React.useState("");
const [rating,setRating]=React.useState("")

const getData=()=>{

  // https://shines-node-deploy.onrender.com/products

  return axios({
      method:"POST",
      url:"",
      data:{url,title,price,description,category,rating}
  })
}

const handleAddProduct=()=>{
  getData()
  .then((res)=>{
    console.log(res.data)
    toast({
      title: 'Product added successfully.',
      description: "You can add more product",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  })
}


  return (
    <>

 
<AdminNavbar/>


    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
         Add New Product
        </Heading>
        <FormControl id="url" isRequired>
          <FormLabel>URL</FormLabel>
          <Input value={url} onChange={(e)=>setUrl(e.target.value)}
            placeholder="product url"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={title} onChange={(e)=>setTitle(e.target.value)}
            placeholder="product title"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Input value={description} onChange={(e)=>setDescription(e.target.value)}
            placeholder="description"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>

        <FormControl id="price" isRequired>
          <FormLabel>Price</FormLabel>
          <Input value={price} onChange={(e)=>setPrice(e.target.value)}
            placeholder="price"
            _placeholder={{ color: 'gray.500' }}
            type="number"
          />
        </FormControl>

        <FormControl id="rating" isRequired>
          <FormLabel>Rating</FormLabel>
          <Input value={rating} onChange={(e)=>setRating(e.target.value)}
            placeholder="rating"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Category
        </FormLabel>
        <Select value={category} onChange={(e)=>setCategory(e.target.value)}
          id="category"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          {/* <option value="Accessories">Accessories</option> */}
          <option value="Juicers">Juicers</option>
          <option value="mobiles">Mobiles</option>
          <option value="Makeup">Makeup</option>
          <option value="Iron">Iron</option>
          <option value="Camaras">Camaras</option>
          <option value="Computers">Computers</option>
        </Select>
      </FormControl>

        <Stack spacing={6} direction={['column', 'row']}>
       
          <Button  onClick={handleAddProduct}
            bg={'red.400'}
            color={'white'}
            w="100%"
            _hover={{
              bg: 'red.500',
            }}>
            Add Product
          </Button>
        </Stack>
      </Stack>
    </Flex>
    </>
  )
}

export default AdminPage;
