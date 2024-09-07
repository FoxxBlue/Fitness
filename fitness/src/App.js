import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='bg-[#1F004B] h-screen m-0 p-8'>
      <div className='w-64 h-16 border-[#51CCDC] rounded-xl m-1 border-2 overflow-hidden flex'>
        <div className='py-2 px-4 border-green-300 border-2 border-t-transparent border-b-transparent border-l-transparent w-12  bg-[#600DB5] '>
          <p className='text-white font-bold text-xl'>1</p>
        </div>
        <div className='text-[#51CCDC] px-4 py-2 text-md text-center justify-center items-center flex gap-2'>
          <p>UPPER</p>
          <p>BICEPS</p>
          <p>CHEST</p>
        </div>
      </div>
    </div>
  );
}

export default App;
