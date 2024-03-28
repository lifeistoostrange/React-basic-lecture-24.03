import { useState } from 'react';
import '../apps/App.css';

export default function User2() {
	const initUsers = [
		{ id: 1, name: 'admin', email: 'admin@human.com' },
		{ id: 2, name: 'james', email: 'james@gmail.com' }
	];
	const [users, setUsers] = useState(initUsers);
	const [form, setForm] = useState({ id: '', name: '', email: '' });
	const handleSubmit = (event) => {
		event.preventDefault();   // submit button을 누르면 페이지가 자동적으로 바뀌는 것을 방지
		console.log(form);
		let user = users.find(val => val.id == form.id);
		const newUsers = [];
		if (user) {
			for (let val of users) {
				if(val.id == form.id) {
					newUsers.push(form);
				} else {
					newUsers.push(val);
				}
			}
			setUsers(newUsers);
		} else {
			// 값을 추가
			setUsers([...users, form]);
		}
	}
	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	}
	return (
		<div className="card">
			<h1>사용자 목록</h1>
			<table border={1}>
				<thead>
					<tr><th>ID</th><th>name</th><th>email</th></tr>
				</thead>
				<tbody>
					{
						users.map(user => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
							</tr>
						))
					}
				</tbody>
			</table>
			<br />
			<form onSubmit={handleSubmit}>
				<label htmlFor='id'>ID:</label>
				<input type='text' id='id' name='id' value={form.id}
					onChange={handleChange}
				/><br />
				<label htmlFor='name'>이름:</label>
				<input type='text' id='name' name='name' value={form.name}
					onChange={handleChange}
				/><br />
				<label htmlFor='email'>이메일:</label>
				<input type='text' id='email' name='email' value={form.email}
					onChange={handleChange}
				/><br />
				<button>제출</button>
			</form>
		</div>
	);
}

