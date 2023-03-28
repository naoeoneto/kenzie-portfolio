// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
  AboutMe,
  AboutDiv,
  AboutImage,
} from "./style";

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Sou estudante de programação na Kenzie Academy Brasil, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
              <Button as="a" href="#sobre_mim" type="btLink" color="grey5">
                Sobre mim
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <AboutMe id="sobre_mim">
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
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus processos diários e
                os resultados obtidos ao desenvolver esses projetos. Estou
                disposto a trocar algumas ideias por lá.
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text
                as="h4"
                type="heading2"
                color="grey2"
                css={{ marginBottom: "$2" }}
              >
                Projetos
              </Text>
              <Text as="h3" type="heading4" color="grey1">
                Originalidade, disposição e{" "}
                <Text as="span" color="brand1" type="heading4">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
