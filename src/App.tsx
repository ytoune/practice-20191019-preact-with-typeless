import { h } from 'preact'
import { DefaultTypelessProvider } from 'typeless'
import { Counter } from './comps/Counter'
import { SetCount } from './comps/SetCount'

export const App = () => {
	return (
		<DefaultTypelessProvider>
			<p>hello, world!!</p>
			<Counter />
			<Counter />
			<SetCount />
		</DefaultTypelessProvider>
	)
}
