import {
  Box, Img, Flex, Text, Heading, Center, SimpleGrid, Divider,
  Link as ChakraLink, Stack
} from '@chakra-ui/react'
import Head from 'next/head'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';
import { GetStaticProps } from 'next';
import Link from "next/link";
import { continents } from '../utils/continents';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

interface IContinent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface IHomeProps {
  continents: IContinent[];
}

export default function Home({ continents }: IHomeProps) {
  console.log(continents)
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>
      <Flex w="100%"
        align="center"
        justify="center"
      >
        <Box w="100vw" maxW={1440} >
          <Box bgGradient="linear(to-t, #072E4B, #01162B)" >
            <Center
              justifyContent="space-between"
              mx="32" bgImg="url('assets/stars.png')"
            >
              <Stack h="335px" justify="center" spacing="4">
                <Heading
                  color="#F5F8FA"
                  fontWeight="medium"
                  fontSize="4xl"
                  lineHeight="3.375rem"
                >
                  5 Continentes,<br /> infinitas possibilidades.
                </Heading>
                <Text
                  color="#DADADA"
                  fontSize="xl"
                >
                  Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou.
                </Text>
              </Stack>
              <Img src="assets/airplane.png" alt="Airplane" mb="-32" w={417} h={270} />
            </Center>
          </Box>
          <SimpleGrid minChildWidth="80px" my="20">
            <Center flexDirection="column">
              <Img src="assets/cocktail.png" alt="Vida" w="20" h="20" mb="4" />
              <Text fontWeight="semibold" lineHeight="9" fontSize="2xl" >vida noturna</Text>
            </Center>
            <Center flexDirection="column">
              <Img src="assets/surf.png" alt="Vida" w="20" h="20" mb="4" />
              <Text fontWeight="semibold" lineHeight="9" fontSize="2xl" >praia</Text>
            </Center>
            <Center flexDirection="column">
              <Img src="assets/building.png" alt="Vida" w="20" h="20" mb="4" />
              <Text fontWeight="semibold" lineHeight="9" fontSize="2xl" >moderno</Text>
            </Center>
            <Center flexDirection="column">
              <Img src="assets/museum.png" alt="Vida" w="20" h="20" mb="4" />
              <Text fontWeight="semibold" lineHeight="9" fontSize="2xl" >clássico</Text>
            </Center>
            <Center flexDirection="column">
              <Img src="assets/earth.png" alt="Vida" w="20" h="20" mb="4" />
              <Text fontWeight="semibold" lineHeight="9" fontSize="2xl" >e mais...</Text>
            </Center>
          </SimpleGrid>
          <Center>
            <Divider border="2px" borderColor="#47585B" w="20" />
          </Center>
          <Heading
            textAlign="center"
            fontFamily="body"
            fontWeight="medium"
            lineHeight="3.375rem"
            my="12"
          >
            Vamos nessa?<br /> Então escolha seu continente
          </Heading>
          <Center>
            <Box align="center" w="100%" maxW={1240} h={450} mb="10">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
              >
                {continents?.map(con => (
                  <SwiperSlide key={con.id}>
                    <Flex
                      backgroundImage={`url(${con.callImage})`}
                      justify="center"
                      align="center"
                      direction="column"
                      color="#F5F8FA"
                      h={450}
                    >
                      <Link href={`/${con.id}`} passHref>
                        <ChakraLink
                          _hover={{ color: "#FFBA08" }}
                          justify="center"
                          align="center"
                        >
                          <Heading fontSize="5xl" lineHeight="4.5rem" >
                            {con.name}
                          </Heading>
                          <Text
                            color="#DADADA"
                            fontWeight="bold"
                            fontSize="2xl"
                            lineHeight="9"
                          >
                            {con.call}
                          </Text>
                        </ChakraLink>
                      </Link>
                    </Flex>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Center>
        </Box>
      </Flex>
    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      continents: continents.map((continent) => ({
        id: continent.id,
        name: continent.name,
        call: continent.call,
        callImage: continent.callImage,
      })),
    },
  };
};
