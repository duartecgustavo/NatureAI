import { useState } from "react";
import CardDepositions from "./CardDepositions";
import { FormFC } from "./styles";
import img from "../../assets/farmer-amico.svg";

export function CultivationExperience() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [depoimento, setDepoimento] = useState("");
  const [containerDepositionsOpen, setContainerDepositionsOpen] =
    useState(false);
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    // onSubmit({ nome, email, depoimento });
    setNome("");
    setEmail("");
    setDepoimento("");
  };

  let array = [
    {
      title: "Titulo 1",
      deposition: ["LALALALAA1", "lelelel", "LULULULULU"],
      name: "Nome1",
    },
    {
      title: "Titulo 2",
      deposition: [
        "LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2",
        "dodododododod",
        "LULULULULU",
      ],
      name: "Nome2",
    },
    {
      title: "Titulo 3",
      deposition: ["LALALALAA3", "sususususus", "LULULULULU"],
      name: "Nome3",
    },
    {
      title: "Titulo 4",
      deposition: ["LALALALAA4", "bobobobobo", "LULULULULU"],
      name: "Nome4",
    },
    {
      title: "Titulo 4",
      deposition: [
        "LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2",
        "bobobobobo",
        "LULULULULU",
      ],
      name: "Nome4",
    },
    {
      title: "Titulo 4",
      deposition: ["LALALALAA4", "bobobobobo", "LULULULULU"],
      name: "Nome4",
    },
    {
      title: "Titulo 4",
      deposition: [
        "LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2",
        "bobobobobo",
        "LULULULULU",
      ],
      name: "Nome4",
    },
    {
      title: "Titulo 4",
      deposition: [
        "LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2",
        "bobobobobo",
        "LULULULULU",
      ],
      name: "Nome4",
    },
    {
      title: "Titulo 4",
      deposition: [
        "LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2 LALALALAA2",
        "bobobobobo",
        "LULULULULU",
      ],
      name: "Nome4",
    },
    {
      title: "Titulo 4",
      deposition: ["LALALALAA4", "bobobobobo", "LULULULULU"],
      name: "Nome4",
    },
  ];

  return (
    <>
      <div className="col-8 d-flex align-items-center flex-column gap-3 mb-5">
        <h1>Conte suas experiências de cultivo</h1>
        <h5>
          No formulário abaixo, compartilhe conosco experiências de cultivo,
          dicas ou conhecimentos relevantes que possam ajudar outras pessoas em
          seu cultivo particular.
        </h5>
      </div>
      <div className="row justify-content-center align-items-center col-12 gap-5 d-flex">
        <FormFC
          onSubmit={handleSubmit}
          className="d-flex flex-column col-7 bg-light"
        >
          <div>
            <label
              className="form-label pb-1"
              style={{ color: "black", fontSize: "18px" }}
            >
              Nome completo
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Digite seu nome completo.."
              aria-label="default input example"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label
              className="form-label pb-1"
              style={{ color: "black", fontSize: "18px" }}
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Digite seu e-mail.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              className="form-label pb-1"
              style={{ color: "black", fontSize: "18px" }}
            >
              Depoimento
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Nos conte o que você pensa sobre nós?"
              rows={3}
              value={depoimento}
              onChange={(e) => setDepoimento(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              color: "white",
              borderRadius: "4px",
              padding: "8px 24px 8px 24px",
            }}
          >
            ENVIAR DEPOIMENTO
          </button>
        </FormFC>
        <div className="d-flex flex-column col-4">
          <img src={img} width="400" height="400" alt="..."></img>
        </div>
      </div>

      <div className="col-8 d-flex align-items-center flex-column gap-3 my-5">
        <h1>Conheça outras experiências de cultivo</h1>
        <h5>
          Através dos cards abaixo, você pode aprender mais sobre outras
          experiências, dicas de cultivo e técnicas de plantio.
        </h5>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <div className="row col-4">
          <div className="col-12">
            {array.map(
              (item, index) =>
                index % 2 == 0 && (
                  <CardDepositions
                    key={index}
                    title={item.title}
                    deposition={item.deposition}
                    name={item.name}
                  />
                )
            )}
          </div>
        </div>
        <div className="row col-4">
          <div className="col-12">
            {array.map(
              (item, index) =>
                index % 2 == 1 && (
                  <CardDepositions
                    key={index}
                    title={item.title}
                    deposition={item.deposition}
                    name={item.name}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
