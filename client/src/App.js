import './App.css';
import Header from './components/Header';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  if (userId) {
    localStorage.setItem('userId', userId);
  }
  return (
    <>
      <Header />
      <p className='text-yellow-700'>Hello World</p>
    </>
  );
}

export default App;
