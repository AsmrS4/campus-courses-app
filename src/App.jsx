import { Route, Routes } from 'react-router-dom';

import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import './styles/index.scss';

function App() {
    return (
        <>
            <main className='main'>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/registration' element={<RegistrationPage />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
