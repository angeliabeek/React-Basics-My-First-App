import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const [userDrink, setUserDrink] = useState();

  const greeting = "Welcome in our cafe";

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice drink={userDrink} onClick={setUserDrink} />
      ) : (
        <>
          <Heading marginBottom="2rem" fontSize="3xl" color="blue.400">
            {greeting}
          </Heading>
          <DrinkSearch onClick={setUserDrink} />
        </>
      )}
    </div>
  );
};
