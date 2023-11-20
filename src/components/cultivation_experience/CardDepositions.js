import { ContainerCardDepositionsFC } from "./styles";

const CardDepositions = ({ title, deposition, name, type }) => {
  return (
    <>
      <ContainerCardDepositionsFC>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "12px" }}>
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              lineHeight: "initial",
              pAlign: "left",
              fontWeight: "bold",
            }}
          >
            📌{type}
          </h3>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              lineHeight: "initial",
              pAlign: "left",
            }}
          >
            ❝{title}❞
          </h4>
        </div>
        <p style={{ display: "flex", pAlign: "left" }}>
          {deposition}
        </p>
        <p style={{ display: "flex", justifyContent: "end" }}>~ {name}</p>
      </ContainerCardDepositionsFC>
    </>
  );
};

export default CardDepositions;
