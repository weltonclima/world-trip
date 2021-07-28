import {
  Box, Img, Flex, Text, Heading, Center, Divider,
  Link as ChakraLink, Stack, useBreakpointValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';
import { GetStaticProps } from 'next';
import Link from "next/link";
import { continents } from '../utils/continents';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Travel } from '../components/Travel';

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
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
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
              mx={["4", "8", "32"]} bgImg="url('assets/stars.png')"
            >
              <Stack h={["10.18rem", "15.15rem", "20.93rem"]} justify="center" spacing="4">
                <Heading
                  color="#F5F8FA"
                  fontWeight="medium"
                  fontSize={["xl", "2xl", "4xl"]}
                  lineHeight={["1.87rem", "3.37rem"]}
                >
                  5 Continentes,<br /> infinitas possibilidades.
                </Heading>
                <Text
                  color="#DADADA"
                  fontSize={["sm", "md", "xl"]}
                  lineHeight={["1.31rem", "1.87rem"]}
                >
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
              </Stack>
              {isWideVersion &&
                <Img
                  src="assets/airplane.png"
                  alt="Airplane"
                  mb="-32"
                  w={417}
                />}
            </Center>
          </Box>
          <Flex
            align="center"
            justify={["center", "center", "center", "space-between"]}
            flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
            my={["9", "14", "20"]}
            px={["0", "0", "8.75rem"]}
          >
            <Travel srcImg="assets/cocktail.png" >
              vida noturna
            </Travel>
            <Travel srcImg="assets/surf.png" >
              praia
            </Travel>
            <Travel srcImg="assets/building.png" mt={["1.68rem", "1rem", "1rem", "0"]}>
              moderno
            </Travel>
            <Travel srcImg="assets/museum.png" mt={["1.68rem", "1rem", "1rem", "0"]}>
              clássico
            </Travel>
            <Travel srcImg="assets/earth.png" mt={["1.68rem", "1rem", "1rem", "0"]}>
              e mais...
            </Travel>
          </Flex>
          <Center flexDir="column">
            <Divider border="2px" borderColor="#47585B" w={["14", "16", "20"]} />
            <Heading
              textAlign="center"
              fontWeight="medium"
              fontSize={["xl", "2xl", "4xl"]}
              lineHeight={["1.87rem", "2.25rem", "3.37rem"]}
              my={["1.25rem", "2.50rem", "3.25rem"]}
            >
              Vamos nessa?<br /> Então escolha seu continente
            </Heading>
          </Center>
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
                      bgPosition="center"
                      bgSize="contain"
                      bgRepeat="no-repeat"
                      justify="center"
                      align="center"
                      direction="column"
                      color="#F5F8FA"
                      h={["300px", "350px", "450px"]}
                    >
                      <Link href={`/${con.id}`} passHref>
                        <ChakraLink
                          _hover={{ color: "#FFBA08" }}
                          justify="center"
                          align="center"
                        >
                          <Heading
                            fontSize={["2xl", "3xl", "5xl"]}
                            lineHeight={["2.25rem", "3rem", "4.5rem"]}
                          >
                            {con.name}
                          </Heading>
                          <Text
                            color="#DADADA"
                            fontWeight="bold"
                            fontSize={["sm", "large", "2xl"]}
                            lineHeight={["1.31rem", "1.8rem", "2.25rem"]}
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
