import { Chat } from "./components/page_chat/page_chat";
import { Div } from "./global-styled-components";
import GlobalStyle from "./styles/global";

function App() {

  return (
    <>
      <GlobalStyle />
      <Div className="azul-claro">
        <Chat />
      </Div>
      <Div className="verde">
        HELLO WORLD!
      </Div>
      <Div className="branco">
        VAI CURINTIA
      </Div>
    </>
  );
}

export default App;
