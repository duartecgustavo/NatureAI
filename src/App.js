import { MainSection } from "./components/main_section/main_section";
import { Div } from "./global-styled-components";
import { callChatGpt } from "./services/get_api_chat_gpt";

function App() {

  return (
    <>
      <Div className="verde">
        <MainSection/>
      </Div>
      <Div className="branco">
        VAI CURINTIA
      </Div>
      <Div className="branco">
        VAI santos
      </Div>
    </>
  );
}

export default App;
