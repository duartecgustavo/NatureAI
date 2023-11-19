import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .div-row-footer {
    padding: 30px;
    display: flex;
    gap: 40px;
  }

  p {
    font-size: 18px;
    letter-spacing: 0.5px;
    padding: 12px;
    margin-bottom: 30px !important;
    color: "black";
  }
  a {
    font-size: 18px;
    letter-spacing: 0.5px;
    padding: 12px;
    margin-bottom: 0px !important;
    text-decoration: none;
    color: "black";
    &:hover {
      color: blue !important;
    }
  }

  @media (max-width: 768px) {
    .div-row-footer {
      text-align: center;
      padding: 20px;
      gap: 0px;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="row div-row-footer">
          <a className="col" href="/home">
            Sobre nós
          </a>
          <a className="col" href="/home">
            Contato
          </a>
          <a className="col" href="/home">
            Newsletter
          </a>
          <a className="col" href="/home">
            Mapa
          </a>
        </div>
      </div>
      <p>©2023 • NatureAI • Todos os direitos reservados.</p>
    </FooterStyle>
  );
}
