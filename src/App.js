import './App.css';
import {SearchField} from './SearchField'
import {SortFilterField} from './SortFilterField'
import {GifField} from './GifField'
import {useState} from 'react'

function App() {
  const [gifSearch, setSearch] = useState("")
  const [gifList, setList] = useState([])
  const [gifData, setData] = useState(undefined)

  return (
  <>
  <SearchField gifData={gifData} gifList={gifList} gifSearch={gifSearch} setSearch={setSearch} setList={setList} setData={setData}/>
  <SortFilterField gifData={gifData} gifList={gifList} setList={setList} setData={setData}/>
  <GifField gifList={gifList}/>
  </>)
}

export default App;
