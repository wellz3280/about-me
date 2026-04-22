import { Typography } from 'antd';
import GenericHtml from '../components/GenericHtml';

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <GenericHtml>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Title level={2}>Sobre mim</Title>
        <Paragraph>
          Meu nome é José e atuo na área de tecnologia desde 2022, com foco no desenvolvimento
          de APIs RESTful.
        </Paragraph>
        <Paragraph>
          Atualmente, trabalho com as stacks de .NET e PHP utilizando o framework Laravel,
          desenvolvendo e mantendo aplicações.
        </Paragraph>
        <Paragraph>
          Ao longo da minha trajetória, adquiri experiência na construção e manutenção de
          serviços, incluindo o desenvolvimento de consumers utilizando AWS Lambda e
          integração com serviços como S3.
        </Paragraph>
        <Paragraph>
          Tenho vivência com diferentes bancos de dados, como MongoDB, PostgreSQL, SQL Server
          e MySQL, além de experiência na criação de ambientes de desenvolvimento local com
          Docker e Docker Compose, garantindo padronização e eficiência no fluxo de trabalho.
        </Paragraph>
        <Paragraph>
          Também trabalhei com sistemas de mensageria, utilizando RabbitMQ e SNS, contribuindo
          para arquiteturas orientadas a eventos.
        </Paragraph>
        <Paragraph>
          Além disso, possuo experiência com manutenção e integração de sistemas legados,
          especialmente em aplicações desenvolvidas com Laravel, onde atuei tanto na evolução
          do sistema quanto na criação de novas APIs para consumo de seus endpoints.
        </Paragraph>
        <Paragraph>
          Atualmente, também estou envolvido em um projeto de migração de dados, desenvolvendo
          scripts em Python para garantir a consistência e integridade das informações durante
          o processo.
        </Paragraph>
        <Paragraph>
          Estou sempre em busca de evoluir tecnicamente e contribuir com soluções eficientes,
          escaláveis e bem estruturadas.
        </Paragraph>
      </div>
    </GenericHtml>
  );
}
