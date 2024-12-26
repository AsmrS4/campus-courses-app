import React from 'react';
import { useParams } from 'react-router-dom';
import GroupCard from '../components/GroupCard';
import Header from '../components/Header';

const GroupPage = () => {
    const { id } = useParams();
    return (
        <>
            <Header />
            <section className='pageContent'>
                <GroupCard />
            </section>
        </>
    );
};

export default GroupPage;
