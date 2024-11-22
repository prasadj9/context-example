
import './App.css';
import NewComponent from './components/NewComponent';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <NewComponent/>
      </ThemeProvider>
    </div>
  );
}

export default App;
