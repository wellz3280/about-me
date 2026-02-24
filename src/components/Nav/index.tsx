import { Menu, type MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { CodeOutlined, DownloadOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, MoonOutlined, RobotOutlined, StarOutlined, SunOutlined } from "@ant-design/icons";
import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export default function Nav() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        return localStorage.getItem('theme') as AvailableThemes || 'dark';
    });

    const nextThemeIcon = {
        dark: <SunOutlined />,
        light: <MoonOutlined />
    }

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault();
        setTheme(prevTheme => {
            return prevTheme === 'dark' ? 'light' : 'dark';
        });
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return <nav className={styles.nav}>
        <a className={styles.navLink} href="#" aria-label='sobre' title='sobre'><RobotOutlined /> Sobre</a>
        <a className={styles.navLink} href="#" aria-label='Contato' title='Contato'><MailOutlined /> Contato</a>
        <a className={styles.navLink} href="#" aria-label='Habilidades' title='Habilidades'><CodeOutlined /> Habilidades</a>
        <a className={styles.navLink} href="#" aria-label='linkedin' title='linkedin'><LinkedinOutlined /> LinkedIn</a>
        <a className={styles.navLink} href="#" aria-label='GitHub' title='GitHub'><GithubOutlined /> GitHub</a>
        <button className={styles.curriculoBtn}><DownloadOutlined /> Curriculo</button>

        <a className={styles.navLink} onClick={handleThemeChange} href="#" aria-label='Alterar tema' title='Alterar tema'>
            {nextThemeIcon[theme]}
        </a>
    </nav>;

};