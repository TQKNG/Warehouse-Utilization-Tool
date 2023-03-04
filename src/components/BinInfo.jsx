import { Container, Text, Badge} from "@nextui-org/react";
import {useState, useEffect} from 'react'
import React from "react";

const BinInfo = ({ bin }) => {
  const [remainQty,setRemainQty] = useState(0)
  const [onHandQty,setOnhandQty] = useState(bin.partInfo.onHand)
  const [maxQty,setMaxQty] = useState(bin.maxLoad)

  useEffect(()=>{
    const remain = maxQty - onHandQty;
    setRemainQty(remain);
  },[onHandQty, maxQty])

  return (
    <Container>
      <Text h3 color="orange">
        Bin No: {bin.binNumber}
      </Text>
      <Text h5 color="white">
        SKU:{" "}
          {bin.partInfo.sku}
      </Text>
      <Text h5 color="white">
        On hand:{" "}
          {onHandQty}
      </Text>
      <Text h5 color="white">
        Max:{" "}
          {maxQty}
      </Text>
      <Text h5 color="white">
        Avail:{" "}
          {remainQty}
      </Text>
      <Text h5 color="white">
        Status:
          {" "}
          <Badge
            size="md"
            enableShadow
            disableOutline
            variant="dot"
            color={
              bin.status === "occupied"
                ? "error"
                : bin.status === "partial"
                ? "warning"
                : "success"
            }
          >
            {bin.status}
          </Badge>
      </Text>
    </Container>
  );
};

export default BinInfo;
