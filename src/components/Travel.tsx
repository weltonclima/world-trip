import { Center, Icon, Img, Text, useBreakpointValue, CenterProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
interface TravelProps extends CenterProps {
  srcImg: string;
  children: string;
}
export function Travel({
  srcImg, children, ...rest
}: TravelProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Center
      width={["45%", "35%", "50%", "auto"]}
      flexDirection={isWideVersion ? "column" : "row"}
      {...rest}
    >
      {isWideVersion ?
        <Img src={srcImg} alt="Vida" w="20" mb="4" />
        :
        <Icon as={VscDebugBreakpointData} color="#FFBA08" />}
      <Text
        fontWeight={["medium", "semibold"]}
        lineHeight={["1.68rem", "9"]}
        fontSize={["lg", "xl", "2xl"]}
      >
        {children}
      </Text>
    </Center>
  )
}