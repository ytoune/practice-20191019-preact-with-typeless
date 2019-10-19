import { h, render } from 'preact'
import { App } from './App'

const main = () => {
	const el = document.querySelector('main')
	if (!el) return
	render(<App />, el)
}

try {
	main()
} catch (x) {
	console.log('# something happens.')
	console.error(x)
}
