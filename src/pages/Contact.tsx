import { Descriptions, type DescriptionsProps } from 'antd';
import { useViewport } from '../hooks/useViewport';
import GenericHtml from '../components/GenericHtml';

const items: DescriptionsProps['items'] = [
  {
    label: 'Telefone',
    span: 3,
    children: '+55 (11) 99999-9999',
  },
  {
    label: 'Email',
    span: 3,
    children: 'welingtonzsilva@gmail.com',
  },
  {
    label: 'Localização',
    span: 3,
    children: 'São Paulo - SP',
  },
];

export default function Contact() {
  const { isNarrow } = useViewport();

  return (
    <GenericHtml>
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Descriptions
        bordered
        title="Contato"
        column={isNarrow ? 1 : 3}
        items={items}
      />
    </div>
    </GenericHtml>
  );
}
