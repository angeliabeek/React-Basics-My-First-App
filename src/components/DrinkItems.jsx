import { SimpleGrid } from "@chakra-ui/react";
import { DrinkItem } from "./DrinkItem";

export const DrinkItems = ({ drinks, onClick }) => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} onClick={onClick} />
      ))}
    </SimpleGrid>
  );
};
