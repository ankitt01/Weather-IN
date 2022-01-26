// import Weather from './components/Weather'
import './index.css'
function App() {
  const api = {
    key: "f2db5a456819ebf40cda3295573c317a",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  return (
    <div>
        <main className="app">
            <div className="search-box">
                <input type="text" className="search-bar" placeholder='Search..'/>
            </div>
        </main>
    </div>
  );
}

export default App;
