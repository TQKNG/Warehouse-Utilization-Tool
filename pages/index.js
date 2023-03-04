import Section from "@/src/components/Section";
import BinInfo from "@/src/components/BinInfo";
import _, { set } from "lodash";
import Functionality from "@/src/components/Functionality";
import Title from "@/src/components/Title";
import Legend from "@/src/components/Legend";
import { Row, Tooltip, Text, Container, Col } from "@nextui-org/react";
import { useState, useRef } from "react";
import { useAtom } from "jotai";
import { toast } from "react-toastify";
import {
  isBinView,
  isShowEmpty,
  isShowDangerousGood,
  isPartView,
  binMasterData,
} from "@/store";

const Home = () => {
  const [binMaster, setBinMaster] = useState(binMasterData);
  const [currentBin, setCurrentBin] = useState(null);
  const chunkedData = _.chunk(binMaster.init, 5);
  const [binInfo, setBinInfo] = useState("");
  const [showBinView, setShowBinView] = useAtom(isBinView);
  const [showEmpty, setShowEmpty] = useAtom(isShowEmpty);
  const [showDangerousGood, setShowDangerousGood] =
    useAtom(isShowDangerousGood);
  const [showPartView, setShowPartView] = useAtom(isPartView);
  const focusToOutput = useRef(null);

  const colorCell = (category, status) => {
    if (showDangerousGood) {
      if (category === "dg") return "bg-orange";
    }

    if (showBinView) {
      if (status === "occupied") return "bg-red";
      else if (status === "partial") return "bg-orange";
      else if (status === "open") return "bg-green";
      else return null;
    }

    if (showEmpty) {
      if (status === "open") return "bg-green";
    }
  };

  const handOver = (bin) => {
    setBinInfo(bin);
  };

  const dragStartHandler = (e, bin) => {
    setCurrentBin(bin);
  };
  const dragEndHandler = (e) => {
    e.preventDefault();
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
  };
  const dropHandler = (e, bin) => {
    e.preventDefault();
    setBinMaster((prevBinMaster) => ({
      ...prevBinMaster,
      init: prevBinMaster.init.map((item) => {
        if (item.id === bin.id) {
          return {
            ...item,
            partInfo: currentBin.partInfo,
            status: currentBin.status,
          };
        }

        if (item.id === currentBin.id) {
          return { ...item, partInfo: bin.partInfo, status: bin.status };
        }
        return item;
      }),
    }));
    toast.success("Part moved to new location");
  };

  return (
    <>
      <Container display="flex" align="center" css={{ mt: 50 }}>
        <Row css={{ marginBottom: "$10" }}>
          <Col>
            <Title text="Warehouse Utilization Tool" />
          </Col>
        </Row>
        <Text h2>Feature</Text>
        <Row css={{ marginBottom: "$10" }}>
          <Col lg={12} md={12} sm={12}>
            <Functionality focusToOutput={focusToOutput} />
          </Col>
        </Row>
        <Row>
          <Text ref={focusToOutput} h2>Output</Text>
        </Row>
        <Row>
          <Col>
            <Legend />
          </Col>
          {chunkedData.map((chunk, rowIndex) => (
            <Container key={rowIndex}>
              <Section number={rowIndex} />
              {chunk.map((bin) => (
                <Tooltip
                  key={bin.id}
                  trigger="click"
                  content={<BinInfo bin={binInfo} />}
                  color="invert"
                  placement="top"
                >
                  <div
                    draggable={true}
                    onDragStart={(e) => dragStartHandler(e, bin)}
                    onDragLeave={(e) => dragEndHandler(e, bin)}
                    onDragEnd={(e) => dragEndHandler(e, bin)}
                    onDragOver={(e) => dragOverHandler(e, bin)}
                    onDrop={(e) => dropHandler(e, bin)}
                    className={`cell ${colorCell(bin.category, bin.status)}`}
                    onClick={() => handOver(bin)}
                  >
                    {showPartView ? (
                      <Text span>{bin.partInfo.sku}</Text>
                    ) : (
                      <Text span>{bin.binNumber}</Text>
                    )}
                  </div>
                </Tooltip>
              ))}
            </Container>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
