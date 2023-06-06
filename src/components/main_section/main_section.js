import { ContentContainer, Nav } from "./styles";
import brasil from "../../assets/brasil.svg";
import img3 from "../../assets/img3.jpg";
import img1 from "../../assets/img1.png";

export function MainSection() {
  return (
    <>
      <Nav className="navbar fixed-top">
        <div className="container-fluid">
          <h1>NatureAI</h1>
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
          <div className="col-12 col-lg-6 bg-transparent" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }}>
            <h1>Bem-vindo</h1>
            <p>Um novo jeito de pensar sobre cultivo  e agricultura</p>
          </div>
          <div className="col-12 col-lg-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={img1}
              width="500"
              height="500"
              alt="...">
            </img>
          </div>
        </div>
      </ContentContainer>
    </>
  );
}
