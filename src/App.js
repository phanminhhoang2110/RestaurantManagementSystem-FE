import logo from './assets/img/HuongKitchen.png';
import './App.css';
import Login from './components/screens/login/Login'
import Table from './components/screens/table/table';

function App() {
  return (
    <div className="App">
      <Table label='Bàn 1' id={'1234'}></Table>
    </div>
  );
}

export default App;
