import React, { useEffect } from 'react'
import Loader from '../Loader'
import AddStudent from './AddStudent'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    }
}

function StudentList() {
    const [students, setStudents] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    let index = 1;

    useEffect(() => {
        fetch('https://localhost:44328/api/students')
            .then(response => response.json())
            .then(students => {
                setStudents(students)
                setLoading(false)
            })
    }, [])

    function addStud(fullname, email) {
        setStudents(
            students.concat([
                {
                    fullName: fullname,
                    email: email
                }
            ])
        )
    }

    return (
        <div>
             <div>
                <AddStudent onCreate={addStud} />
            </div>
            <h2>Список студентов: </h2>
            {loading && <Loader />}
            <ul>
                {students.map(item => (
                    <li style={styles.li} key={item.id}>
                        {index++}. Id: {item.id} / ФИО: {item.fullName} / Email: {item.email}
                    </li>
                ))}
            </ul>
           
        </div>
    );
}

export default StudentList