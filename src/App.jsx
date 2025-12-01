import {useState} from 'react'
import {Grid} from './components/grid/Grid.jsx'

function App() {
const [count, setCount] = useState(0)

return (
<>
<div id="main">
<a href="#">Link</a>
<Grid/>
</div>
</>
)
}

export default App
