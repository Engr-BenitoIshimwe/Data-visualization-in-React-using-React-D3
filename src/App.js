import './App.css';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';

const data1 = [12, 36, 15, 25, 35, 10, 40];
const data2 = [5, 10, 15, 20, 25, 30];
const data3 = [10, 5, 10, 5, 10, 5];

const w = 500;
const h = 400;

function App() {
  return (
    <div className='App'>
      <div className='bg-circle1'> </div>
      <div className='bg-circle1'></div>
      <header className='App-header'>
        <h1>Data visualization in React using React D3</h1>
        <Chart1 />
        <Chart2 />
        <Chart3 data={data1} w={w} h={h} color='green' />
        <Chart3 data={data2} w={w} h={h} color='orange' />
        <Chart3 data={data3} w={w} h={h} color='cyan' />
      </header>
    </div>
  );
}

export default App;
