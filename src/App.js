import './App.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';

const searchStyle = {
  fontSize : '30px',
  marginTop : '16px'
};

function App() {
  return (
    <div className="App">
      <div className="circle-with-search">
        <SearchIcon style = {searchStyle} />
      </div>
      <div className="circle-with-border">
        <div className="border-circle" />
      </div>
      <div className="input-box">
        <div className="text-container">
          <h1>Pyramid Developers</h1>
          <div className="arrow-container">
            <ArrowForwardIcon style = {{fontSize : 20}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
