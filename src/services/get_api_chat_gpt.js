import { API_CHAT_GPT, OPENAI_API_KEY } from '../constants/api_chat_gpt';

// CONECTADO AO CHAT
// export async function callChatGpt(msg) {

//     const url = API_CHAT_GPT
//     const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}`, }
//     const body = {
//         "model": "gpt-3.5-turbo",
//         "messages": [{ "role": "user", "content": `${msg}` }]
//     }

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: headers,
//             body: JSON.stringify(body)
//         })



//         const data = await response.json();

//         return data
//     } catch (err) {
//         console.log('error', err)
//     }
// }

// MOCK DO RETORNO DO CHAT
export async function callChatGpt(msg) {
    console.log('MENSAGE', msg)

    const data = {
        "id": "chatcmpl-7NUkNtf66RBkpbW09Y7jpPRPpYC58",
        "object": "chat.completion",
        "created": 1685834091,
        "model": "gpt-3.5-turbo-0301",
        "usage": {
            "prompt_tokens": 10,
            "completion_tokens": 10,
            "total_tokens": 20
        },
        "choices": [
            {
                "message": {
                    "role": "assistant",
                    "content": "Hi there, how may I assist you today?"
                },
                "finish_reason": "stop",
                "index": 0
            }
        ]
    }
    return data
}

