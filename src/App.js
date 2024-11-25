
import './App.css';
import Parent from './components/memocallback/Parent';
import NewComponent from './components/NewComponent';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <NewComponent/>
      </ThemeProvider>
      <Parent/>
    </div>
  );
}

export default App;
