import {useState} from "react"


export function Counter_2(){
	const [count, setCount] = useState(0)
	const add      = () => setCount((i) => i + 1)
	const subtract = () => setCount((i) => i - 1)

	return (
		<div className="counter">
			<button onClick={subtract}>–</button>
			<pre style={{color:"#92EDAD"}}>{count}</pre>
			<button onClick={add}>+</button>
		</div>
	)
}
