import React, { useEffect, useState } from "react";
import { CodeOutlined, DownloadOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, MoonOutlined, RobotOutlined, SunOutlined } from "@ant-design/icons";
import styles from './styles.module.css';
import { Link } from "react-router-dom";

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
        <Link to='/about' className={styles.navLink} aria-label='sobre' title='sobre'><RobotOutlined /> Sobre</Link>
        <a className={styles.navLink} href="#" aria-label='Contato' title='Contato'><MailOutlined /> Contato</a>
        <a className={styles.navLink} href="#" aria-label='Habilidades' title='Habilidades'><CodeOutlined /> Habilidades</a>
        <a className={styles.navLink} href="https://www.linkedin.com/in/jose-weliton-554617b2" target="_blank" aria-label='linkedin' title='linkedin'><LinkedinOutlined /> LinkedIn</a>
        <a className={styles.navLink} href="https://github.com/wellz3280" target="_blank" aria-label='GitHub' title='GitHub'><GithubOutlined /> GitHub</a>
        <button className={styles.curriculoBtn}><DownloadOutlined /> Curriculo</button>

        <a className={styles.navLink} onClick={handleThemeChange} href="#" aria-label='Alterar tema' title='Alterar tema'>
            {nextThemeIcon[theme]}
        </a>
    </nav>;

};