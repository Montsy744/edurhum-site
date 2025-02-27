import DivAcc from "./acceuil";
import Carroussel from "./caroussel";
import ChooseMenu from "./choose";
import Footer from "./footer";
import Equipe from "./equipe";
import AProPos from "./apropos";
import { useState } from "react";
const WelcomePage = () => {
  return <Acceuille></Acceuille>;
};

const Acceuille = () => {
  const [viewBox, setViewBox] = useState(false);
  const [equipage, setEquipage] = useState(false);
  return (
    <div>
      <DivAcc></DivAcc>
      <Carroussel></Carroussel>
      <ChooseMenu
        viewBox={viewBox}
        setViewBox={setViewBox}
        Equipage={equipage}
        setEquipage={setEquipage}
      ></ChooseMenu>
      <Footer></Footer>
      <Equipe equipage={equipage} setEquipage={setEquipage}></Equipe>
      <AProPos viewBox={viewBox} setViewBox={setViewBox}></AProPos>
    </div>
  );
};

export default WelcomePage;
