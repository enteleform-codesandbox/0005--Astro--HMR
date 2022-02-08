import {useState} from "react"


export function Counter_1(){
	const [count, setCount] = useState(0)
	const add      = () => setCount((i) => i + 1)
	const subtract = () => setCount((i) => i - 1)

	return (
		<div className="counter">
			<button onClick={subtract}>–</button>
			<pre style={{color:"#87DDE7"}}>{count}</pre>
			<button onClick={add}>+</button>
		</div>
	)
}
