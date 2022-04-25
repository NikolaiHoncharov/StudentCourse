import { useState } from "react";

function AddCourse() {
    const [studentsid, setstudentsId] = useState("");
    const [startdate, setstartDate] = useState("");
    const [enddate, setendDate] = useState("");
    const [message, setMessage] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://localhost:44328/api/courses", {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "studentsId": studentsid,
                    "startDate": "2022-08-22T00:00:00",
                    "endDate": "2022-09-02T00:00:00"
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setstudentsId("");
                setstartDate("");
                setendDate("");

                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div>
            <h2>Добавление курса студету</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={studentsid} placeholder="Id студента"
                    onChange={(e) => setstudentsId(e.target.value)}/>
                <input type="date" value={startdate} placeholder="Начало курса"
                    onChange={(e) => setstartDate(e.target.value)} />
                <input type="date" value={enddate} placeholder="Конец курса"
                    onChange={(e) => setendDate(e.target.value)} />
                <button type="submit">Добавить</button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    );
}

export default AddCourse;