import { Route, Routes } from 'react-router-dom';

import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import GroupsPage from './pages/GroupsPage';
import GroupPage from './pages/GroupPage';
import './styles/index.scss';
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <>
            <main className='main'>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/registration' element={<RegistrationPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/groups' element={<GroupsPage />} />
                    <Route path='/groups/:id' element={<GroupPage />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
