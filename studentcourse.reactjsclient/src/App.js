import React from 'react'
import StudentList from './Component/StudentList'
import AddStudent from './Component/AddStudent'


function App() {
    return (
        <div className='wrapper'>
            <h1>Курсы студентов</h1>
            <div>
                <AddStudent />
            </div>
            <div>
                <StudentList />
            </div>
        </div>
    );
}
export default App;