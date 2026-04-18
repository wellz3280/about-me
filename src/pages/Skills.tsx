import { Descriptions, type DescriptionsProps } from "antd";
import { useViewport } from "../hooks/useViewport";
import GenericHtml from "../components/GenericHtml";

const skills: DescriptionsProps['items'] = [
  {
    label: 'Backend & APIs',
    span: 3,
    children:
      'APIs RESTful, .NET, PHP com Laravel — desenvolvimento, manutenção e novas APIs sobre sistemas legados',
  },
  {
    label: 'Cloud (AWS)',
    span: 3,
    children: 'AWS Lambda (consumers), integração com Amazon S3',
  },
  {
    label: 'Banco de dados',
    span: 3,
    children: 'MongoDB, PostgreSQL, SQL Server, MySQL',
  },
  {
    label: 'Mensageria',
    span: 3,
    children: 'RabbitMQ, Amazon SNS, arquiteturas orientadas a eventos',
  },
  {
    label: 'Ambiente local',
    span: 3,
    children: 'Docker, Docker Compose, padronização de fluxo de trabalho',
  },
  {
    label: 'CI/CD',
    span: 3,
    children:
      'Pipelines de integração e entrega contínua — automação de build, testes e deploy (ex.: GitHub Actions, GitLab CI)',
  },
  {
    label: 'Testes unitários',
    span: 3,
    children:
      'PHPUnit (PHP/Laravel), xUnit (.NET) — escrita e manutenção de testes automatizados',
  },
  {
    label: 'Dados & automação',
    span: 3,
    children: 'Python — scripts de migração de dados, consistência e integridade da informação',
  },
];
  export default function Skills() {
    const { isNarrow } = useViewport();

    return (
        <GenericHtml>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Descriptions
          bordered
          title="Habilidades"
          column={isNarrow ? 1 : 3}
          items={skills}
          />
      </div>
          </GenericHtml>
    );
};