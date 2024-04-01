import { useState } from 'react';
import '../apps/App.css';

export default function User() {
  const initUsers = [
    {id:1, name:'admin', email:'admin@human.com'},
    {id:2, name:'james', email:'james@naver.com'}
  ];
  const [users, setUsers] = useState(initUsers);
  return (
    <div className="card">    
      <h1>사용자 목록</h1>
      <table border={1}>
        <tr><th>ID</th><th>name</th><th>email</th></tr>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </table>
      <br />
      <button onClick={() => {
        const id = prompt('Id 값을 입력하세요');
        const name = prompt('이름을 입력하세요');
        const email = prompt('E-mail을 입력하세요');
        setUsers([...users, {id, name, email}]);
      }}>추가</button>
      <button onClick={() => {
        const id = prompt('Id 값을 입력하세요');
        const newUsers = users.filter(user => user.id != id);
        // const newUsers = [];
        // for (let user of users)
        //   if (user.id != id)
        //     newUsers.push(user);
        setUsers(newUsers);
      }}>삭제</button>
    </div>
  );
}

