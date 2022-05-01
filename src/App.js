import logo from './logo.svg';
import {Provider} from 'react-redux'
import store from './redux/Store'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import DashboardPage from './components/DashboardPage';
import PostsPage from './components/PostPage';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div>Application</div>
      <Routes>
        <Route path='/' element={<DashboardPage/>} />
        <Route path='/posts' element={<PostsPage/>} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
