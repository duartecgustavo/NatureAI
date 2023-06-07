import { ButtonChat, ContainerChat, HistoryChat, InputChat, InputFild, NavbarChat } from "./styles";
import { callChatGpt } from "../../services/get_api_chat_gpt";
import { useState } from "react";
import { BoxMessage } from "./box_message";
import { useEffect } from "react";
import arrowRight from '../../assets/arrowRight.svg';

export function Chat() {

    const [inputValue, setInputValue] = useState({});
    const [messages, setMessages] = useState([])

    async function handleMessage() {
        if (inputValue.msg.trim() !== "") {

            const response = await callChatGpt(inputValue.msg);
            const content = { msg: response.choices[0].message.content, isUser: false };

            setMessages([...messages, inputValue, content]);
            setInputValue({ msg: "", isUser: true });
        }
    }

    return (
        <>
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
                        onChange={(e) => setInputValue({ msg: e.target.value, isUser: true })}
                    />
                    <ButtonChat name="button_chat" type="button" onClick={handleMessage}><img src={arrowRight} /></ButtonChat>
                </InputChat>
            </ContainerChat>
        </>
    );
}
