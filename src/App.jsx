import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './containers/Home/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route index path="/" element={<Home />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;