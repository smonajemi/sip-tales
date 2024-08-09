import MainContainer from "../components/MainContainer";
import { useEffect } from "react";


interface Props {}

const Home = ({}: Props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MainContainer title={'Error'} >
 
    </MainContainer>
  );
};

export default Home;
