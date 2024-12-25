import React, { useEffect, useState } from 'react';
import { getCourses } from '../api/groups/groups';
import Header from '../components/Header';

const GroupsPage = () => {
    const [courses, setCourses] = useState([]);
    const loadData = async () => {
        const result = await getCourses();
        console.log(result);
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <>
            <Header />
            <section></section>
        </>
    );
};

export default GroupsPage;
