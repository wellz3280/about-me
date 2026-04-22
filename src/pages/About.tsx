import { Tag, Typography } from 'antd';
import type { TagProps } from 'antd';
import GenericHtml from '../components/GenericHtml';

const { Title, Paragraph } = Typography;

const TECH_TERMS = [
  'Docker Compose',
  'SQL Server',
  'AWS Lambda',
  'PostgreSQL',
  'MongoDB',
  'RabbitMQ',
  'RESTful',
  'Laravel',
  'Docker',
  'MySQL',
  'Python',
  '.NET',
  'PHP',
  'SNS',
  'S3',
  'APIs',
] as const;

const techTagStyles: TagProps['styles'] = {
  root: {
    backgroundColor: 'var(--gray-500)',
    marginInlineEnd: 6,
    marginBlock: 2,
    verticalAlign: 'baseline',
  },
  content: {
    color: 'var(--text-default)',
  },
};

function escapeRegExp(value: string) {
  return value.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
}

const techTermRegex = new RegExp(
  `(${[...TECH_TERMS]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join('|')})`,
  'gi',
);

const techTermsLower = new Set(TECH_TERMS.map((t) => t.toLowerCase()));

function highlightTechTerms(text: string) {
  return text.split(techTermRegex).map((part, index) => {
    if (techTermsLower.has(part.toLowerCase())) {
      return (
        <Tag key={`${index}-${part}`} styles={techTagStyles}>
          {part}
        </Tag>
      );
    }
    return part;
  });
}

export default function About() {
  return (
    <GenericHtml>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Title level={2}>Sobre mim</Title>
        <Paragraph>
          {highlightTechTerms(
            'Meu nome é José e atuo na área de tecnologia desde 2022, com foco no desenvolvimento de APIs RESTful.',
          )}
        </Paragraph>
        <Paragraph>
          {highlightTechTerms(
            'Atualmente, trabalho com as stacks de .NET e PHP utilizando o framework Laravel, desenvolvendo e mantendo aplicações.',
          )}
        </Paragraph>
        <Paragraph>
          {highlightTechTerms(
            'Ao longo da minha trajetória, adquiri experiência na construção e manutenção de serviços, incluindo o desenvolvimento de consumers utilizando AWS Lambda e integração com serviços como S3.',
          )}
        </Paragraph>
        <Paragraph>
          {highlightTechTerms(
            'Tenho vivência com diferentes bancos de dados, como MongoDB, PostgreSQL, SQL Server e MySQL, além de experiência na criação de ambientes de desenvolvimento local com Docker e Docker Compose, garantindo padronização e eficiência no fluxo de trabalho.',
          )}
        </Paragraph>
        <Paragraph>
          {highlightTechTerms(
            'Também trabalhei com sistemas de mensageria, utilizando RabbitMQ e SNS, contribuindo para arquiteturas orientadas a eventos.',
          )}
        </Paragraph>
        <Paragraph>
          {highlightTechTerms(
            'Além disso, possuo experiência com manutenção e integração de sistemas legados, especialmente em aplicações desenvolvidas com Laravel, onde atuei tanto na evolução do sistema quanto na criação de novas APIs para consumo de seus endpoints.',
          )}
        </Paragraph>
        <Paragraph>
          {highlightTechTerms(
            'Atualmente, também estou envolvido em um projeto de migração de dados, desenvolvendo scripts em Python para garantir a consistência e integridade das informações durante o processo.',
          )}
        </Paragraph>
        <Paragraph>
          Estou sempre em busca de evoluir tecnicamente e contribuir com soluções eficientes,
          escaláveis e bem estruturadas.
        </Paragraph>
      </div>
    </GenericHtml>
  );
}
