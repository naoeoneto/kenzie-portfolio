import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { userData } from "@/utils/userData";
import { AboutDiv, AboutImage, AboutMe } from "./style";

export const About = () => {
  return (
    <AboutMe>
      <Container>
        <Text as="h4" type="heading3" color="grey1">
          Sobre mim
        </Text>
        <AboutDiv>
          <AboutImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
          />
          <Text as="h3" type="body1" color="grey1">
            Minha relação com a tecnologia começou por acaso numa tentativa de
            transicionar de carreira e acabei me encontrando, pois ela permite
            que o profissional esteja em constante aprendizado e atualização,
            repleto de desafios e novidades.
            <br></br>
            <br></br>
            Durante seis meses, aprendi como desenvolver aplicações front-end.
            Nos quatro meses seguintes, me introduzi no back-end. Agora, estou
            desenvolvendo aplicações fullstack e colocando em prática o
            conhecimento adquirido durante os últimos meses.
            <br></br>
            <br></br>
            Busco agregar o que aprendi em experiências anteriores em outras
            áreas, conseguir uma oportunidade de me inserir no mercado e poder
            aprender e contribuir com o time que fizer parte.
          </Text>
        </AboutDiv>
      </Container>
    </AboutMe>
  );
};
