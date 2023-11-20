import brasil from "../../assets/brasil.svg";
import EnviromentBro from "../../assets/environment-bro1.svg";
import { ContentContainer, Nav } from "./styles";

export function MainSection() {
  return (
    <>
      <Nav className="navbar fixed-top">
        <div className="container-fluid">
          <h1><a style={{textDecoration: "none", color: "white"}} href="#">NatureAI 🥦</a></h1>
          <a className="navbar-brand" href="#">
            <img
              src={brasil}
              alt="Logo"
              width="65"
              height="55"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </Nav>

      <ContentContainer className="container h-100">
        <div className="row h-100">
          <div
            className="col-12 col-lg-6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "black" }}>Seja bem vindo ao NatureAI 🥦</h1>
            <p style={{ color: "black" }}>
              Um novo jeito de aprender sobre cultivo e agricultura!
            </p>
          </div>
          <div
            className="col-12 col-lg-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={EnviromentBro} width="500" height="500" alt="..."></img>
          </div>
        </div>
      </ContentContainer>
    </>
  );
}
