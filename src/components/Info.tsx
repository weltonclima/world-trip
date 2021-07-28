import { Center, Heading, Icon, Text, Tooltip, CenterProps } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
interface InfoProps extends CenterProps {
  continent: number;
  children: string;
  tooltip?: boolean;
}
export function Info({
  tooltip = false, children, continent, ...rest
}: InfoProps) {
  return (
    <Center
      flexDir="column"
      {...rest}
    >
      <Heading
        color="#FFBA08"
        fontWeight="semibold"
        fontSize={["2xl", "4xl", "5xl"]}
        lineHeight={["2.25rem", "3rem", "4.5rem"]}
      >
        {continent}
      </Heading>
      {tooltip ? (
        <Tooltip
          hasArrow
          label="Cidades entre as 100 mais visitadas do mundo"
          bg="gray.300" color="black"
          placement="top"
        >
          <Text
            lineHeight={["1.68rem", "1.8rem", "2.25rem"]}
            fontSize={["lg", "xl", "2xl"]}
          >
            {children} <Icon
              as={AiOutlineInfoCircle}
              color="rgba(153, 153, 153, 0.5)"
              w={["10px", "4"]}
            />
          </Text>
        </Tooltip>
      ) : (
        <Text
          lineHeight={["1.68rem", "1.8rem", "2.25rem"]}
          fontSize={["lg", "xl", "2xl"]}
        >
          {children}
        </Text>
      )}
    </Center>
  )
}