import { h } from 'preact'
import { useActions } from 'typeless'
import { useModule, CounterActions, getCounterState } from '~/store'

const useCounter = () => {
	useModule()
	const acts = useActions(CounterActions)
	const state = getCounterState.useState()
	const count = state?.count || 0
	const countUp = acts.startCount
	const countReset = acts.resetCount
	return { count, countUp, countReset }
}

export const Counter = () => {
	const { count, countUp, countReset } = useCounter()
	return (
		<div>
			<p>count is {count}.</p>
			<p>
				<button onClick={countUp}>count up</button>
				<button onClick={countReset}>reset</button>
			</p>
		</div>
	)
}
