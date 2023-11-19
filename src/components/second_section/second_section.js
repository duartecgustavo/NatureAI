import { ContentContainer, Nav } from "./styles";
import brasil from "../../assets/brasil.svg";
import img3 from "../../assets/environment-bro.svg";

export function SecondSection() {
  return (
    <>
      <div className="container h-100 mb-4">
        <div className="row h-100">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <img src={img3} width="500" height="500" alt="..."></img>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center gap-4">
            <h1>Pensando em agricultura sustentavel.</h1>
            <h4>
              A agricultura sustentável em casa envolve cultivo consciente de
              alimentos, minimizando o uso de recursos e produtos químicos.
            </h4>
            <h4>
              Ela promove a biodiversidade, uso eficiente de espaço, reciclagem
              de resíduos e alimentação saudável. É uma prática acessível para
              todos.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
