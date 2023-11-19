import ex1 from "../../assets/ex1.png";
import ex2 from "../../assets/ex2.png";
import ex3 from "../../assets/ex3.png";

export function DepoimentsSection() {
  return (
    <div
      style={{
        gap: "30px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Exemplos de uso/perguntas para se fazer 🌱
      </h2>
      <div className="text-center">
        <img
          src={ex1}
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
            borderRadius: 8,
            padding: 20,
          }}
        />
      </div>
      <div className="text-center">
        <img
          src={ex2}
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
            borderRadius: 8,
            padding: 20,
          }}
        />
      </div>
      <div className="text-center">
        <img
          src={ex3}
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
            borderRadius: 8,
            padding: 20,
          }}
        />
      </div>
    </div>
  );
}
