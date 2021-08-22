import { VStack } from "@chakra-ui/react";
import { LogoAlternative } from "../Logo";

const Sidebar = () => {
  return (
    <VStack left="0px" position="sticky" width="150px" flexDir="column">
      <LogoAlternative width="150px" />
    </VStack>
  );
};

export default Sidebar;
