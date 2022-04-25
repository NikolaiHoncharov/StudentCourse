import React, { useEffect } from 'react'
import Loader from '../Loader'


function CourseList() {
    const [courses, setCourses] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    let index = 1;

    useEffect(() => {
        fetch('https://localhost:44328/api/courses')
            .then(response => response.json())
            .then(students => {
                setCourses(students)
                setLoading(false)
            })
    }, [])


    return (
        <div>
            <h2>Список курсов: </h2>
            {loading && <Loader />}
            <ul>
                {courses.map(item => (
                    <li key={item.id}>
                        {index++}. studentsId: {item.studentsId}
                        / startDate: {new Date(item.startDate).toLocaleDateString()} / endDate: {new Date(item.endDate).toLocaleDateString()}
                    </li>
                ))}
              </ul>
        </div>
    );
}


export default CourseList