import {
  Box, Image, Flex, Text, Heading, Center, SimpleGrid, Divider, Stack, HStack, Img
} from '@chakra-ui/react'
import { CircleFlag } from 'react-circle-flags'
import { GetStaticPaths, GetStaticProps } from 'next';
import { continents } from '../utils/continents';
import Head from 'next/head'

interface ICity {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}

interface IContinentProps {
  continent: {
    id: string;
    name: string;
    call: string;
    callImage: string;
    bannerImage: string;
    about: string;
    countries: number;
    languages: number;
    cities100: number;
    cities: ICity[];
  };
}

export default function Continent({ continent }: IContinentProps) {
  console.log(continent)
  return (
    <>
      <Head>
        <title>WorldTrip | {continent.name}</title>
      </Head>
      <Flex w="100%" justify="center">
        <Flex w="100%" align="center" justify="center" maxW={1440} flexDir="column">
          <Flex
            bgImg={continent.bannerImage}
            w="100%"
            h={500}
            justify="start"
            align="flex-end"
          >
            <Heading
              color="#F5F8FA"
              fontWeight="semibold"
              fontSize="5xl"
              lineHeight="4.5rem"
              ml="8.75rem"
              mb="3.68rem"
            >
              {continent.name}
            </Heading>
          </Flex>
          <HStack w="100%" maxW={1160} my="20" justify="center" spacing="4.37rem">
            <Text fontSize="2xl" lineHeight="9" textAlign="justify" w="37.5rem">
              {continent.about}
            </Text>
            <HStack spacing="2.62rem" >
              <Center flexDir="column">
                <Heading
                  color="#FFBA08"
                  fontWeight="semibold"
                  fontSize="5xl"
                  lineHeight="4.5rem"
                >
                  {continent.countries}
                </Heading>
                <Text lineHeight="9" fontSize="2xl">
                  países
                </Text>
              </Center>
              <Center flexDir="column">
                <Heading
                  color="#FFBA08"
                  fontWeight="semibold"
                  fontSize="5xl"
                  lineHeight="4.5rem"
                >
                  {continent.languages}
                </Heading>
                <Text lineHeight="9" fontSize="2xl">
                  línguas
                </Text>
              </Center>
              <Center flexDir="column">
                <Heading
                  color="#FFBA08"
                  fontWeight="semibold"
                  fontSize="5xl"
                  lineHeight="4.5rem"
                >
                  {continent.cities100}
                </Heading>
                <Text lineHeight="9" fontSize="2xl">
                  cidades +100
                </Text>
              </Center>
            </HStack>
          </HStack>
          <Box w="100%" align="center" justify="center" maxW={1165} >
            <Text
              fontWeight="medium"
              fontSize="4xl"
              lineHeight="3.37rem"
              textAlign="left"
              mb="2.75rem"
            >
              Cidades +100
            </Text>
            <SimpleGrid columns={4} minChildWidth="15.8rem" spacingX="3.12rem" spacingY="2.75rem">
              {continent.cities.map(city => (
                <Box w="16rem" h="17.43rem">
                  <Img src={city.image}
                  />
                  <Flex justify="space-between" mx="6">
                    <Box >
                      <Text color="#47585B" fontWeight="semibold" fontSize="xl" lineHeight="6" mt="1.12rem">
                        {city.name}
                      </Text>
                      <Text color="#999999" fontWeight="medium" fontSize="md" lineHeight="1.62rem" mt="3">
                        {city.country}
                      </Text>
                    </Box>
                    <Box mt="2.37rem">
                      <CircleFlag countryCode={city.code} width="38px" />
                    </Box>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: continents.map(cont => {
      return {
        params: {
          id: cont.id,
        }
      }
    }),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  return {
    props: {
      continent: continents.find(con => con.id === id)
    }
  }
}