import { useState } from "react";
import Container from "./Container";
import BackgroundLight from "./BackgroundLight";
import ModalReserved from "./ModalReserved";

const MainContainer = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <>
      {isTrue && <ModalReserved setIsTrue={setIsTrue} />}
      <BackgroundLight />
      <Container setIsTrue={setIsTrue} />
    </>
  );
};

export default MainContainer;
