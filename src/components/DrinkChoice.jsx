import {
  Center,
  Heading,
  Image,
  Text,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";

export const DrinkChoice = ({ drink, onClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center flexDir={"column"} gap={4}>
      <Heading color="blue.700" fontSize="2rem">
        Your choice: {drink.name}
      </Heading>
      <Image src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
      <Text>Your drink will be ready in a few minutes</Text>
      <ButtonGroup
        colorScheme="blue"
        marginTop="1rem"
        borderRadius="2.5rem"
        border="none"
        padding="1rem"
        color="white"
        fontSize="1.25rem"
        fontWeight="bold"
      >
        <Button onClick={onOpen}>Confirm order</Button>
        <Button onClick={() => onClick()}>Change selection</Button>
      </ButtonGroup>

      <Modal size={["full", "md"]} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Are you sure you want to order</ModalHeader>
            <ModalBody
              height={["full", "fit-content"]}
              display="flex"
              justifyContent="center"
              alignItems={["center", "flex-start"]}
              flexDir="column"
            >
              <Text fontSize="1.25rem" fontWeight="bold">
                {drink.name}
              </Text>
            </ModalBody>
            <ModalFooter>
              <ButtonGroup colorScheme="blue" size="md" variant="solid">
                <Button>Confirm</Button>
                <Button onClick={onClose}>Cancel</Button>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Center>
  );
};
