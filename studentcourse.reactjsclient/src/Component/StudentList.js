import React, { useEffect } from 'react'

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
    let index = 1;

    useEffect(() => {
        fetch('https://localhost:44328/api/students')
            .then(response => response.json())
            .then(students => { setStudents(students)})
    }, [])


    return (
        <div>
            <h2>Список студентов: </h2>
            <ul>
                {students.map(item => (
                    <li style={styles.li} key={item.id}>
                        {index++}. {item.fullName} / {item.email}
                    </li>
                ))}
              </ul>
        </div>
    );
}


export default StudentList