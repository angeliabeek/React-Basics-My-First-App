import { Center, Image, Text } from "@chakra-ui/react";

export const DrinkItem = ({ drink, onClick }) => {
  return (
    <>
      <Center gap={8} cursor={"pointer"} onClick={() => onClick(drink)}>
        <Image src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
        <Text color="blue.700" fontSize="1rem">
          {drink.name}
        </Text>
      </Center>
    </>
  );
};
