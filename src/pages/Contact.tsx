import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import DefaultCard from "../components/DefaultCard";
import { Descriptions, type DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
    {
        label: 'Telefone',
        span: 3,
        children: '+55 (11) 97634-0280',
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
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {/* <p style={{ color: 'var(--text-default)', textAlign: 'center' }}>
                    Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
                </p> */}
                {/* <DefaultCard title="Telefone" content="+55 (11) 97634-0280" icon={<PhoneOutlined />} />
                <DefaultCard title="Email" content="welingtonzsilva@gmail.com" icon={<MailOutlined />} />
                <DefaultCard title="Localização" content="São Paulo - SP" icon={<EnvironmentOutlined />} /> */}

                <Descriptions bordered title="Contato" items={items} />
            </div >
        </>
    );
};