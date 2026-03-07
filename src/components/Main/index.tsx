
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About';
import styles from './styles.module.css';

export default function Main() {
    return (
        <>
            <div className={styles.content}>
            <Routes>
              <Route index element={<About />} />
              <Route element={<About />} path='/about' />

            </Routes>
            </div>
        </>
    );
};