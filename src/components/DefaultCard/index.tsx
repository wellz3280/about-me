import { Descriptions, Divider } from 'antd';
import styles from './styles.module.css';
import type React from 'react';

type DefaultCardProps = {
    icon: React.ReactNode;
    title: string;
    content: string;
};

export default function DefaultCard({ icon, title, content }: DefaultCardProps) {
    return <>
        <div className={styles.card}>
            <h2 className={styles.title}>{icon} {title}</h2>
            <Divider />
            <p className={styles.content}>{content}</p>
        </div>
    </>;
};