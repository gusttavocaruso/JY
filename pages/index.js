import FirstBody from "./bodyOne";
import TirdBody from "./bodyThree";
import SecondBody from "./bodyTwo";
import NavBar from "./navBar";
import Title from "./title";

function Home() {
  return (
    <>
      <Title />
      <NavBar />
      <FirstBody />
      <SecondBody />
      <TirdBody />
    </>
  );
}

export default Home;
