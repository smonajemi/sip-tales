import MainContainer from "../components/MainContainer";
import { useEffect } from "react";
import CocktailList from "./components/CocktailList";


interface Props {}

const Home = ({}: Props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MainContainer title={'Home'} >
      <CocktailList />
    </MainContainer>
  );
};

export default Home;
