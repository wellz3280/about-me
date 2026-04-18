import styles from './styles.module.css';
import avatar from '../../assets/avatar.jpg';
import Nav from '../Nav';

export default function Header() {
    return (
        <div className={styles.top}>
            <div className={styles.introRow}>
                <div className={styles.avatar}>
                    <img src={avatar} alt="José Silva Profile" />
                </div>

                <div className={styles.text}>
                    <h1>José Weliton da Silva</h1>
                    <p>Desenvolvedor Backend | PHP | Lavarel | APIs Rest | MIcro serviços | C# | .NET</p>
                </div>
            </div>
            <div className={styles.navSlot}>
                <Nav />
            </div>
        </div>
    );
};