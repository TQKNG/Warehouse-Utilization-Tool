import { Card, Container, Row, Text } from "@nextui-org/react";
import { useAtom } from "jotai";
import {
  isBinView,
  isShowEmpty,
  isShowDangerousGood,
  isPartView,
} from "@/store";

export default function Functionality(props) {
  const [binView, setShowBinView] = useAtom(isBinView);
  const [showEmpty, setShowEmpty] = useAtom(isShowEmpty);
  const [showDangerousGood, setShowDangerousGood] =
    useAtom(isShowDangerousGood);
  const [showPartView, setShowPartView] = useAtom(isPartView);
  const list = [
    {
      title: "Bin View",
      img: "https://img.freepik.com/free-vector/warehouse-interior-with-cardboard-boxes-shelves_107791-1132.jpg?w=1380&t=st=1677816292~exp=1677816892~hmac=ffa60eb91811effd95f66e119aa24ca35dea9e41e6b9bf2813ef2d6d36307473",
      feature:
        "This feature allows user to view whether the bin is occupied or partially occupied or open.",
    },
    {
      title: "Part View",
      img: "https://img.freepik.com/free-vector/machinery-parts-set_1284-14474.jpg?w=740&t=st=1677889605~exp=1677890205~hmac=9ddf9db01c8d89f94e59aa4feb428f85997141119c1f22067d180801065be1d9",
      feature:
        "This feature allows user to view whether the bin is occupied or open with part information.",
    },
    {
      title: "Empty",
      img: "https://img.freepik.com/free-vector/showcase-with-glass-wall-shelves-spotlights_107791-666.jpg?w=1060&t=st=1677816609~exp=1677817209~hmac=7a1cbc054bf89137bc021483771035f2d31e48df04286d598cf94acebcd7b335",
      feature:
        "This feature allows user to view whether the bin is occupied or open.",
    },
    {
      title: "Dangerous Goods",
      img: "https://img.freepik.com/free-vector/safe-storage-waste-abstract-concept-illustration-chemical-waste-management-hazardous-material-storage-safe-container-sorting-recycling-dangerous-substance_335657-3430.jpg?w=740&t=st=1677817109~exp=1677817709~hmac=2f9f919f1c227708475e80f9f0bd34f2a907a8fc701aa5bff48f83b294d3a1a7",
      feature:
        "This feature allows user to visualize which bin can store dangerous goods.",
    },
    {
      title: "Drag and Drop",
      img:"https://cdn-icons-png.flaticon.com/512/498/498924.png?w=826&t=st=1677938951~exp=1677939551~hmac=3a7b3072afb09ef6bfdd0e630ef0d5b9a53d71c67954df752546c0ea3f21348c",
      feature:
        "This feature allows user to move part from one bin to another",
    },
    {
      title: "Tooltip",
      img: "https://img.freepik.com/free-vector/speech-bubble-vector-halftone-style_53876-126726.jpg?w=826&t=st=1677939136~exp=1677939736~hmac=828064fabbfc7ca032e21a70d65222707aca8c1ed0f9b92574305c2449f0909c",
      feature:
        "This feature allows user to click on any bin to view more information.",
    },
  ];

  const handleClick = (item) => {
    switch (item.title) {
      case "Bin View":
        setShowBinView(true);
        setShowEmpty(false);
        setShowDangerousGood(false);
        setShowPartView(false);
        props.focusToOutput.current.scrollIntoView({behavior:"smooth"});
        break;
      case "Empty":
        setShowBinView(false);
        setShowEmpty(true);
        setShowDangerousGood(false);
        setShowPartView(false);
        props.focusToOutput.current.scrollIntoView({behavior:"smooth"});
        break;
      case "Dangerous Goods":
        setShowBinView(false);
        setShowEmpty(false);
        setShowDangerousGood(true);
        setShowPartView(false);
        props.focusToOutput.current.scrollIntoView({behavior:"smooth"});
        break;
      case "Part View":
        setShowBinView(true);
        setShowEmpty(false);
        setShowDangerousGood(false);
        setShowPartView(true);
        props.focusToOutput.current.scrollIntoView({behavior:"smooth"});
        break;
      default:
        setShowBinView(false);
        setShowEmpty(false);
        setShowDangerousGood(false);
        setShowPartView(false);
        props.focusToOutput.current.scrollIntoView({behavior:"smooth"});
    }
  };

  return (
    <Container display="flex" align="center" justify="center">
      {list.map((item, index) => (
        <Card
          key={index}
          isPressable
          isHoverable
          onClick={() => handleClick(item)}
          css={{ marginBottom: "$10", marginLeft: "$10", width: "200px" }}
        >
          <Card.Header>
            <Row>
              <Text b>{item.title}</Text>
            </Row>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={item.img}
              objectFit="cover"
              width="100%"
              height={140}
            />
          </Card.Body>
          <Card.Footer css={{ marginTop: "0px", paddingTop: "0px" }}>
            <Row alignItems="flex-start" justifyContent="flex-start">
              <Text css={{ fontSize: "15px", margin: "0px", padding: "0px" }}>
                {item.feature}
              </Text>
            </Row>
          </Card.Footer>
        </Card>
      ))}
    </Container>
  );
}
