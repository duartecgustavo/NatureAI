import { ContainerCardDepositionsFC } from "./styles";

const CardDepositions = ({ title, deposition, name }) => {
  return (
    <>
      <ContainerCardDepositionsFC>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              lineHeight: "initial",
              pAlign: "left",
            }}
          >
            {title}
          </p>
        </div>
        {deposition.map((phrase, index) => (
          <p key={index} style={{ display: "flex", pAlign: "left" }}>
            {phrase}
          </p>
        ))}
        <p style={{ display: "flex", justifyContent: "end" }}>{name}</p>
      </ContainerCardDepositionsFC>
    </>
  );
};

export default CardDepositions;
