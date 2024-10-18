import { useEffect, useState } from "react";

// 기본 구조
function App() {

    const [list, setList] = useState([]);

    useEffect(() => {
        async function userList() {
            const res = await fetch("https://jsonplaceholder.org/users");
            const result = await res.json();
            console.log(result);
            setList(result); // 상태 업데이트
        }
        userList();
    }, []);

    return (
        <>
             <table>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>생일</th>
                    </tr>
                </thead>
                <tbody>    
                    {list.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.firstname}</td>
                            <td>{item.email}</td>
                            <td>{item.birthDate}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default App;
