import './App.css';
import CardInput from '../components/CardInput';
import CardInput2 from '../components/CardInput2';
import { useState } from 'react';

function App() {
	// const foods = ['피자', '불고기', '삼겹살'];
	const [foods, setFoods] = useState(['피자', '불고기', '삼겹살'])
	return (
		<div className='card'>
			<ul>내가 좋아하는 음식</ul>
			{
				foods.map((food, idx) => (
					<li key='idx'>{food}</li>
				))
			}
			<br />
			<button onClick={() =>{
				const item = prompt(('좋아하는 음식을 입력하세요'));
				setFoods([...foods, item]);
			}}>메뉴 추가</button>
		</div>
	);
}

export default App;
