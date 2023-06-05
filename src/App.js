import { Chat } from "./components/page_chat/page_chat";
import { Div } from "./global-styled-components";
import GlobalStyle from "./styles/global";
import { MainSection } from "./components/main_section/main_section";

function App() {

  return (
    <>
      <GlobalStyle />
      <Div className="azul-claro">
        <Chat />
      </Div>
      <Div className="verde">
        <MainSection />
      </Div>
      <Div className="branco">
        VAI CURINTIA
      </Div>
    </>
  );
}

export default App;
