import React from "react";
import { Text } from "@nextui-org/react";

const Section = ({ number }) => {
  return <Text h2 css={{marginRight:"$20"}}>{number}</Text>;
};

export default Section;
