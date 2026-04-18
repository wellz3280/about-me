
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About';
import styles from './styles.module.css';
import Contact from '../../pages/Contact';
import Skills from '../../pages/Skills';

export default function Main() {
    return (
        <>
            <div className={styles.content}>
                <Routes>
                    <Route index element={<About />} />
                    <Route element={<About />} path='/about' />
                    <Route element={<Contact />} path='/contact' />
                    <Route element={<Skills />} path='/skills' />

                </Routes>
            </div>
        </>
    );
};