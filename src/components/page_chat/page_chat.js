import { useState } from "react";
import arrowRight from "../../assets/arrowRight.svg";
import { callChatGpt } from "../../services/get_api_chat_gpt";
import { BoxMessage } from "./box_message";
import {
  ButtonChat,
  ContainerChat,
  HistoryChat,
  InputChat,
  InputFild,
  NavbarChat,
} from "./styles";

export function Chat() {
  const [inputValue, setInputValue] = useState({});
  const [messages, setMessages] = useState([]);
  async function handleMessage() {
    if (inputValue.msg.trim() !== "") {
      const response = await callChatGpt(inputValue.msg);
      const content = {
        msg: response.choices[0].message.content,
        isUser: false,
      };

      setMessages([...messages, inputValue, content]);
      setInputValue({ msg: "", isUser: true });
    }
  }

  return (
    <>
      <div className="col-8 d-flex align-items-center flex-column gap-3 my-5">
        <h1>Conheça nossa IA que esta em fase de teste!</h1>
        <h5>
          Digitando sua dúvida pertinente ao tema de cultivo de plantas e
          jardinagem você pode obter respostas surpreendentes.
        </h5>
      </div>
      <ContainerChat>
        <NavbarChat className="p-5">
          <h1>Fale com o NatureAI 🥦</h1>
        </NavbarChat>
        <HistoryChat>
          {messages?.map((item) => (
            <BoxMessage message={item.msg} isUser={item.isUser} />
          ))}
        </HistoryChat>

        <InputChat className="p-5">
          <InputFild
            placeholder="Digite sua dúvida"
            id="inputMessageId"
            value={inputValue.msg}
            onChange={(e) =>
              setInputValue({ msg: e.target.value, isUser: true })
            }
          />
          <ButtonChat name="button_chat" type="button" onClick={handleMessage}>
            <img src={arrowRight} />
          </ButtonChat>
        </InputChat>
      </ContainerChat>
    </>
  );
}
