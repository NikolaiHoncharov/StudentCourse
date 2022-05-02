import React, { useEffect } from 'react'
import StudentList from './Component/StudentList'
import CourseList from './Component/CourseList'
import AddCourse from './Component/AddCourse'



function App() {
    return (
        <div className='wrapper'>
            <h1>Курсы студентов</h1>
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