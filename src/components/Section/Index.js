import React from 'react';
import Card from '../Card/Index';
import { Highlight, Info } from '../Card/styles';
import Projects from '../Projects/Index';
import Skills from '../Skills/Index';
import SocialMedias from '../SocialMedias/Index';
import Title from '../Title/Index';
import { SectionHeading } from '../Title/styles';
import { Sections } from './styles';

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title texto="Olá pessoal, sou o" />
      <SectionHeading>
        {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
      </SectionHeading>
      <Info>
        {profile.cidade} - {profile.estado} - {profile.contato} -{' '}
        <Highlight> {profile.email}</Highlight>
      </Info>
      <p>{profile.biografia}</p>
      <div id="contacts">
        <Title texto="Contatos" />
        <SocialMedias
          linkedin={profile.redes_sociais.linkedin}
          github={profile.redes_sociais.github}
        />
      </div>
    </Sections>
    <Sections id="experience">
      <Title texto="Experiência" />
      {profile.experiencia.map((val) => (
        <Card
          key={val.id}
          subTitle={val.cargo}
          subTitleH3={val.empresa}
          date={val.periodo}
          info={val.atividades}
        />
      ))}
    </Sections>
    <Sections id="skills">
      <Title texto="Habilidades" />
      <Skills habilidades={profile.habilidades} />
    </Sections>
    <Sections id="projects">
      <Title texto="Projetos" />
      <Projects projetos={profile.projetos} />
    </Sections>
  </>
);

export default Section;
