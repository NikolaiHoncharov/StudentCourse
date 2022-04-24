import { useState } from "react";

function AddStudent() {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://localhost:44328/api/students", {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullname: fullname,
                    email: email,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setFullName("");
                setEmail("");
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
            <h2>Добавление студента</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fullname} placeholder="Полное имя"
                    onChange={(e) => setFullName(e.target.value)}/>
                <input type="text" value={email} placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit">Добавить</button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    );
}

export default AddStudent;