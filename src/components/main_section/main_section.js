import { ContentContainer, Nav } from "./styles";
import brasil from '../../assets/brasil.svg';
import img3 from '../../assets/img3.jpg';

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
          <div className="col-12 col-lg-6 bg-primary">
          <h1>Bem-vindo</h1>
          </div>
          <div className="col-12 col-lg-6 bg-secondary">
            <h1>Opa</h1>
          </div>
        </div>
      </ContentContainer>

      <ContentContainer className="container h-100">
        <div className="row h-100"> 
          <div className="col-12 col-lg-6">
          <img src={img3} 
          class="img-thumbnail"
          width="500"
          height="500"
          alt="...">
          </img>
          </div>
          <div className="col-12 col-lg-6">
            <h1>Pensando em agricultura sustentavel</h1>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus .</p>
          </div>
        </div>
      </ContentContainer>
    </>
  );
}
