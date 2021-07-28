import { Flex, Img } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
  return (
    <Flex w="100%"
      as="header"
      align="center"
      justify="center"
      my={["4","5","6"]}
    >
      <Link href="/">
        <a>
          <Img
            w={["5.06rem","8rem","11.56rem"]}
            src='assets/logo.png'
            alt='Logo'
          />
        </a>
      </Link>
    </Flex>
  )
}