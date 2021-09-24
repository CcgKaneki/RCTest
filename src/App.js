import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          百度热搜
          1哈尔滨确诊女孩被骂“毒王”热498万
          2局长工作群发不雅消息被免职热485万
          3马走目!象棋大师全运会离奇失误热475万
          43学生嫖娼被开除 复旦回应热463万
          5清华大学将压缩文科博士生规模457万
          6许昕爆冷输球无缘全运会男单4强热448万
          7洛阳强降雨致5人死亡新434万
          8三里屯苹果店外顾客冒雨排队热423万
          9中纪委评交警查酒驾放行公安人员热418万
          1031省区市新增本土确诊30例热409万

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
