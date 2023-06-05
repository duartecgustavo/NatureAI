import { Chat } from "./components/page_chat/page_chat";
import { Div } from "./global-styled-components";
import GlobalStyle from "./styles/global";
import { MainSection } from "./components/main_section/main_section";
import ex1 from './assets/ex1.png';
import ex2 from './assets/ex2.png';
import ex3 from './assets/ex3.png';

function App() {

  return (
    <>
      <GlobalStyle />
      <Div className="verde">
        <MainSection />
      </Div>
      <Div className="azul-claro" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          gap: '30px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h2 style={{ textAlign: 'center' }}>
            Exemplos de uso/perguntas para se fazer 🌱
          </h2>
          <img src={ex1} />
          <img src={ex2} />
          <img src={ex3} />
        </div>
      </Div>
      <Div className="azul-claro">
        <Chat />
      </Div>
    </>
  );
}

export default App;
