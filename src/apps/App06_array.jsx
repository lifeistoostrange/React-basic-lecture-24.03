import './App.css';
import CardInput from '../components/CardInput';
import CardInput2 from '../components/CardInput2';

function App() {
  const foods = ['피자', '불고기', '삼겹살'];
  return (
    <>
      <ul>내가 좋아하는 음식</ul>
      {
        foods.map((food, idx) => (
          <li>${food}</li>
        ))
      }
    </>
  );
}

export default App;
