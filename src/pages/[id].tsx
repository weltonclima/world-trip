import {
  Box, Flex, Text, Heading, Center, SimpleGrid, HStack, Img, Icon, Tooltip, Stack, useBreakpointValue
} from '@chakra-ui/react'
import { CircleFlag } from 'react-circle-flags'
import { GetStaticPaths, GetStaticProps } from 'next';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { continents } from '../utils/continents';
import Head from 'next/head'
import { Info } from '../components/Info';

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
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <>
      <Head>
        <title>WorldTrip | {continent.name}</title>
      </Head>
      <Flex w="100%" justify="center">
        <Flex
          w="100vw"
          align="center"
          justify="center"
          maxW={1440}
          flexDir="column"
        >
          <Flex
            bgImg={continent.bannerImage}
            bgPosition="center"
            bgSize="contain"
            bgRepeat="no-repeat"
            w="100%"
            h={["150px", "300px", "500px"]}
            justify={["center", "center", "center", "start"]}
            align={["center", "center", "center", "flex-end"]}
          >
            <Heading
              color="#F5F8FA"
              fontWeight="semibold"
              fontSize={["1.75rem", "2.25rem", "3rem"]}
              lineHeight={["2.62rem", "3.25rem", "4.5rem"]}
              ml={["0", "0", "0", "8.75rem"]}
              mb={["0", "0", "0", "3.68rem"]}
            >
              {continent.name}
            </Heading>
          </Flex>
          <Stack
            direction={["column", "column", "row"]}
            my={["6", "9", "20"]}
            mx={["4", "4", "0"]}
            justify="center"
            spacing={["1rem", "2rem", "4.37rem"]}
          >
            <Text
              fontSize={["sm", "md", "2xl"]}
              lineHeight={["1.31rem", "1.75rem", "2.25rem"]}
              textAlign="justify"
              w={isWideVersion && "37.5rem"}
            >
              {continent.about}
            </Text>
            <HStack spacing="2.62rem" justifyContent="center">
              <Info continent={continent.countries}>
                países
              </Info>
              <Info continent={continent.languages}>
                línguas
              </Info>
              <Info
                continent={continent.cities100}
                tooltip={true}
              >
                cidades +100
              </Info>

            </HStack>
          </Stack>
          <Box
            w="100%"
            align="center"
            justify="center"
            maxW={1165}
          >
            <Text
              fontWeight="medium"
              fontSize={["2xl", "3xl", "4xl"]}
              lineHeight={["2.25rem", "2.75rem", "3.37rem"]}
              textAlign="left"
              mb={["1.25rem", "1.75rem", "2.75rem"]}
              mx={["4", "4", "0"]}
            >
              Cidades +100
            </Text>
            <SimpleGrid
              justifyItems="center"
              columns={1}
              minChildWidth="15.8rem"
              spacingX="3.12rem"
              spacingY="2.75rem"
            >
              {continent.cities.map(city => (
                <Box w="16rem" h="17.43rem" key={city.id}>
                  <Img src={city.image}
                  />
                  <Flex justify="space-between" mx="6">
                    <Box >
                      <Text
                        color="#47585B"
                        fontWeight="semibold"
                        fontSize="xl"
                        lineHeight="6"
                        mt="1.12rem"
                      >
                        {city.name}
                      </Text>
                      <Text
                        color="#999999"
                        fontWeight="medium"
                        fontSize="md"
                        lineHeight="1.62rem"
                        mt="3"
                      >
                        {city.country}
                      </Text>
                    </Box>
                    <Box mt="2.37rem">
                      <CircleFlag
                        countryCode={city.code}
                        width="38px"
                      />
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