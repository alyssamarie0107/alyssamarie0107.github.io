import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/animated-routes/AnimatedRoutes';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* switch component makes sure that only one route shows one at a time */}
        {/* all Route components go inside the Switch component*/}
        <AnimatedRoutes/>
      </div>
    </Router>
  );
}

export default App;
