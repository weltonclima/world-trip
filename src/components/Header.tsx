import { Flex, Image, Center } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
  return (
    <Flex w="100%"
      as="header"
      align="center"
      justify="center"
      my="6"
    >
      <Link href="/">
        <a>
          <Image src='assets/logo.png' alt='Logo' />
        </a>
      </Link>
    </Flex>
  )
}