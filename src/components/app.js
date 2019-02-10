import React from 'react';
import Table from './table'

const students = [
    {
        name: 'Paul D.',
        course: 'Databases',
        grade: 62
    },
    {
        name: 'Tom F.',
        course: 'Math',
        grade: 75
    },
    {
        name: 'Randell C.',
        course: 'Science',
        grade: 89
    }
];

export default () => {
    return (
        <div className='container'>
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    );
}
