import React from 'react';
import { Text,Container } from "@nextui-org/react";

const Title = ({text}) => {
  return (
      <Text
        h1
        size={40}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        {text}
      </Text>
  )
}

export default Title