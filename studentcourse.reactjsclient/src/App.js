import React from 'react'
import StudentList from './Component/StudentList'
import AddStudent from './Component/AddStudent'
import CourseList from './Component/CourseList'
import AddCourse from './Component/AddCourse'



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
            <div>
                <CourseList />
            </div>
            {/*<div>*/}
            {/*    <AddCourse />*/}
            {/*</div>*/}
        </div>
    );
}
export default App;