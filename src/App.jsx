import { Route, Routes } from 'react-router-dom';

import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import GroupsPage from './pages/GroupsPage';
import './styles/index.scss';

function App() {
    return (
        <>
            <main className='main'>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/registration' element={<RegistrationPage />} />
                    <Route path='/groups' element={<GroupsPage />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
