import logo from './logo.svg';
import './App.css';
import DateCard from './Components/DateCard';

function App() {
  return (
    <div className='bg-[#1F004B] h-screen m-0 p-8'>
      <div className='flex flex-col md:flex-row flex-wrap gap-4'>
        <DateCard day={1} abs={"Up"} small={"Biceps"} large={"Back"} />
        <DateCard day={2} abs={"Low"} small={"Triceps"} large={"Legs"} />
        <DateCard day={3} abs={"Side"} small={"Shoulders"} large={"Chest"} />
        <DateCard day={4} abs={"Up"} small={"Biceps"} large={"Back"} />
        <DateCard day={5} abs={"Low"} small={"Triceps"} large={"Legs"} />
        <DateCard day={6} abs={"Side"} small={"Shoulders"} large={"Chest"} />
        <DateCard day={7} abs={"Side"} small={"Shoulders"} large={"Chest"} />
      </div>
    </div>
  );
}

export default App;
