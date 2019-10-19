import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { useActions } from 'typeless'
import { useModule, CounterActions, getCounterState } from '~/store'

const useSetCount = () => {
	useModule()
	const acts = useActions(CounterActions)
	const state = getCounterState.useState()
	const count = state?.count || 0
	const countReset = acts.resetCount
	const setCount = acts.countDone
	return { count, countReset, setCount }
}

export const SetCount = () => {
	const { count, setCount, countReset } = useSetCount()
	const onChange = useCallback(
		(e: Event) => {
			if (!(e.target instanceof HTMLInputElement)) return
			countReset()
			setCount(Math.floor(Number(e.target.value)))
		},
		[countReset, setCount],
	)
	return (
		<div>
			<p>
				{'count is '}
				<input type="number" value={`${count}`} onChange={onChange} />
				{'.'}
			</p>
		</div>
	)
}
