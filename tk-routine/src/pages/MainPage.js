import styled from "styled-components";
import FooterBar from "../component/FooterBar";
import HaderBar from "../component/HaederBar";


const Content = styled.div`
  width: 96%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const MainPage = () =>{
    return(
        <div>
            <HaderBar/>
            <Content/>
            <FooterBar/>
        </div>
    );
};

export default MainPage;
