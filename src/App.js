import { Div, DivWhite } from "./global-styled-components";
import { callChatGpt } from "./services/get_api_chat_gpt";

function App() {

  // async function dataTeste() {
  //   try {
  //     let teste = await callChatGpt();
  //     return teste;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // console.log('dataTeste', dataTeste)

  return (
    <>
      <Div className="verde">
        HELLO WORLD!
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
