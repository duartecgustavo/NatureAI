import { useEffect, useState } from "react";
import img from "../../assets/farmer-amico.svg";
import { getDicas, postDicas } from "../../services/dicas";
import CardDepositions from "./CardDepositions";
import { FormFC } from "./styles";

export function CultivationExperience() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [dica, setDica] = useState("");
  const [dicas, setDicas] = useState([]);

    async function fetchData() {
      try {
        const data = await getDicas();
        console.log("dicas", data);
        setDicas(data)
      } catch (error) {
      }
    }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postDicas({ nome, email, tipo, dica, titulo });
      fetchData();
      setNome("");
      setEmail("");
      setTitulo("");
      setTipo("");
      setDica("");
    } catch (error) {
      console.log("Não foi")
    }
  };

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
          style={{ borderRadius: 10 }}
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
              Titulo
            </label>
            <input
              type="titulo"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Digite o titulo de sua mensagem.."
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div>
            <label
              className="form-label pb-1"
              style={{ color: "black", fontSize: "18px" }}
            >
              Tipo de dica
            </label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="" disabled>Escolha o tipo de dica</option>
              <option value="jardinagem">Dicas de Jardinagem</option>
              <option value="plantio">Dicas de Plantio</option>
              <option value="arvores">Dicas sobre Árvores</option>
              <option value="adubagem">Dicas de Adubagem</option>
              <option value="regadura">Dicas de Regadura</option>
              <option value="pragas">Dicas de Controle de Pragas</option>
              <option value="solo">Dicas sobre Preparo do Solo</option>
              <option value="ferramentas">Dicas sobre Ferramentas de Jardinagem</option>
              <option value="cuidados">Dicas Gerais de Cuidados com Plantas</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div>
            <label
              className="form-label pb-1"
              style={{ color: "black", fontSize: "18px" }}
            >
              Suas dicas e conhecimentos
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Nos conte o que você considera relevante"
              rows={3}
              value={dica}
              onChange={(e) => setDica(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              borderRadius: "8px",
              borderWidth: "0px",
              padding: 12,
              backgroundColor: "#ADFFB0"
            }}
          >
            ENVIAR CONHECIMENTO
          </button>
        </FormFC>
        <div className="d-flex flex-column col-4">
          <img src={img} width="400" height="400" alt="..."></img>
        </div>
      </div>

      <div style={{ width: "80vw", border: '1px solid rgba(0, 0, 0, 0.2)', margin: "100px 0px" }}></div>

      <div className="col-8 d-flex align-items-center flex-column gap-3 mb-5">
        <h1>Conheça outras experiências de cultivo</h1>
        <h5>
          Através dos cards abaixo, você pode aprender mais sobre outras
          experiências, dicas de cultivo e técnicas de plantio.
        </h5>
      </div>
      <div className="d-flex justify-content-center gap-3 col-5">
        <div className="row col-12">
          <div>
            {dicas.map(
              (dica, index) =>
                index % 2 == 0 && (
                  <CardDepositions
                    key={index}
                    title={dica.titulo}
                    type={dica.tipo}
                    deposition={dica.dica}
                    name={dica.nome}
                  />
                )
            )}
          </div>
        </div>
        <div className="row col-12">
          <div>
            {dicas.map(
              (dica, index) =>
                index % 2 == 1 && (
                  <CardDepositions
                    key={index}
                    title={dica.tipo}
                    type={dica.tipo}
                    deposition={dica.dica}
                    name={dica.nome}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
