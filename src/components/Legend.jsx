import { Card, Text } from "@nextui-org/react";
import React from "react";

const Legend = () => {
  return (
    <Card css={{ width: "70px", display:"flex", alignItems:"center"}}>
      <Card.Header>
        <Text h5>Legend</Text>
      </Card.Header>
      <Card.Body css={{ display: "flex", justifyContent: "space-between" }}>
        <div className="legend bg-green">
          <Text
            css={{
              fontSize: "$sm",
              color: "#fff",
            }}
          >
            Open
          </Text>
        </div>
      </Card.Body>
      <Card.Body css={{ display: "flex", justifyContent: "space-between" }}>
      <div className="legend bg-red">
          <Text
            css={{
              fontSize: "$sm",
              color: "#fff",
            }}
          >
            Occupied
          </Text>
        </div>
      </Card.Body>
      <Card.Body css={{ display: "flex", justifyContent: "space-between" }}>
      <div className="legend bg-orange">
          <Text
            css={{
              fontSize: "$sm",
              color: "#fff",
            }}
          >
            Partial
          </Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Legend;
