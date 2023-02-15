import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { availableDrinks } from "../utils/data";
import { DrinkItems } from "./DrinkItems";
import { TextInput } from "./ui/TextInput";

export const DrinkSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => setSearchField(event.target.value);

  return (
    <>
      <Text color="blue.700" fontWeight="bold" fontSize="1.25rem">
        Search for drinks
      </Text>
      <TextInput onChange={handleChange} w={200} mb={8} />
      <DrinkItems onClick={onClick} drinks={matchedDrinks} />
    </>
  );
};
