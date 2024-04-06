import './App.css';

export default function App() {
  const handleClick = () => {
    window.location.replace('https://bobbyhadz.com');
  };
  return (
    <div>
      <button onClick={handleClick}>Click to redirect</button>
    </div>
  );
}
