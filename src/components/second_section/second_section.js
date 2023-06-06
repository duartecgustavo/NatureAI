import { ContentContainer, Nav } from "./styles";
import brasil from '../../assets/brasil.svg';
import img3 from '../../assets/img3.jpg';

export function SecondSection() {
  return (
    <>

      <ContentContainer className="container h-100 mb-4">
        <div className="row h-100">
          <div className="col-12 col-lg-6">
            <img src={img3}
              class="img-thumbnail"
              width="400"
              height="400"
              alt="...">
            </img>
          </div>
          <div className="col-12 col-lg-6">
            <h1>Pensando em agricultura sustentavel</h1>
            <h4>A agricultura sustentável em casa envolve cultivo consciente de alimentos, minimizando o uso de recursos e produtos químicos. Ela promove a biodiversidade, uso eficiente de espaço, reciclagem de resíduos e alimentação saudável. É uma prática acessível para todos.</h4>
          </div>
        </div>
      </ContentContainer>
    </>
  );
}
