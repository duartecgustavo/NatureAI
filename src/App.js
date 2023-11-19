import { Chat } from "./components/page_chat/page_chat";
import { Div } from "./global-styled-components";
import GlobalStyle from "./styles/global";
import { MainSection } from "./components/main_section/main_section";
import { SecondSection } from "./components/second_section/second_section";
import { DepoimentsSection } from "./components/depoiments_section/depoiments";
import { CultivationExperience } from "./components/cultivation_experience/cultivation_experience";
import Footer from "./components/footer/footer";
import { WhoWeAre } from "./components/who-we-are/WhoWeAre";

function App() {
  return (
    <>
      <GlobalStyle />
      <Div className="verde">
        <MainSection />
      </Div>
      <Div
        className="amarelo"
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WhoWeAre />
      </Div>
      <Div className="azul-claro">
        <SecondSection />
      </Div>
      <Div
        className="branco"
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CultivationExperience />
      </Div>
      <Div
        className="amarelo"
        style={{
          // height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Chat />
      </Div>
      <Div
        className="azul-claro"
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DepoimentsSection />
      </Div>
      <Footer />
    </>
  );
}

export default App;
