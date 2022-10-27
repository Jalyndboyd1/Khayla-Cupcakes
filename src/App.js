import './App.css';
import Nav from './components/Nav';
import Main from './components/Main'
import Items from './components/Items';
// Main #f9ebbe
// Secondary #fff
// third #b80026
function App() {
  return (
    <div className="app">
      {/* nav */}
      <Nav />
      {/* main */}
      <Main />
      {/* items */}
      <Items />
    </div>
  );
}

export default App;
