import React from "react";
import { CodeOutlined, DownloadOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, MoonOutlined, RobotOutlined, SunOutlined } from "@ant-design/icons";
import styles from './styles.module.css';
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

export default function Nav() {
    const { theme, toggleTheme } = useTheme();

    const nextThemeIcon = {
        dark: <SunOutlined />,
        light: <MoonOutlined />
    }

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault();
        toggleTheme();
    };

    return <nav className={styles.nav}>
        <Link className={styles.navLink} to='/about' aria-label='sobre' title='sobre'><RobotOutlined /> Sobre</Link>
        <Link className={styles.navLink} to='/contact' aria-label='Contato' title='Contato'><MailOutlined /> Contato</Link>
        <Link className={styles.navLink} to='/skills' aria-label='Habilidades' title='Habilidades'><CodeOutlined /> Habilidades</Link>
        <a className={styles.navLink} href="https://www.linkedin.com/in/jose-weliton-554617b2" target="_blank" aria-label='linkedin' title='linkedin'><LinkedinOutlined /> LinkedIn</a>
        <a className={styles.navLink} href="https://github.com/wellz3280" target="_blank" aria-label='GitHub' title='GitHub'><GithubOutlined /> GitHub</a>
        <button onClick={() => {
            window.open("https://drive.google.com/file/d/1gtPvmPTM4gnpMdjH_wQwU9MxCKiVMK9l/view?usp=drive_link");
        }} className={styles.curriculoBtn}><DownloadOutlined /> Curriculo</button>

        <a className={styles.navLink} onClick={handleThemeChange} href="#" aria-label='Alterar tema' title='Alterar tema'>
            {nextThemeIcon[theme]}
        </a>
    </nav>;

};