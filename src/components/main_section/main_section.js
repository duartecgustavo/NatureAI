import { ContentContainer, Nav } from "./styles";
import brasil from '../../assets/brasil.svg';

export function MainSection() {
  return (
    <>
      <Nav className="navbar fixed-top">
        <div className="container-fluid">
          <h1>NatureAIIII</h1>
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
          <div className="col-12 col-lg-6 bg-primary">
          <h1>Bem-vindo</h1>
          </div>
          <div className="col-12 col-lg-6 bg-secondary">
            <h1>Opa</h1>
          </div>
        </div>
      </ContentContainer>
    </>
  );
}
