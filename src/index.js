
import React from 'react'
import ReactDOM from 'react-dom'
import Example from './example'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import Pagination from './components/Pagination'
import * as Todos from './todos.json';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.backend = ("ontouchstart" in document.documentElement) ? TouchBackend : HTML5Backend;
		this.state = {
			list: Todos.default.filter(todo => todo.id <= 10),
			pageLimit: 10
		}
	}

	onPageChanged = (page) => {
		const { currentPage, pageLimit } = page;
		let start = (currentPage - 1) * pageLimit;
		console.log(start)
		this.setState({
			list: Todos.default.filter(todo => todo.id > start && todo.id<=start+pageLimit)
		})
	}
	render() {
		const { list, pageLimit } = this.state;
		return (
			<div>
				<div className="App">
					<DndProvider backend={this.backend}>
						<Example />
					</DndProvider>
				</div>
				<div>
					{
						list.map(todo => <p key={todo.id}>{todo.id} - {todo.title}</p>)
					}
				</div>
				<Pagination
					totalRecords={Todos.default.length}
					pageLimit={pageLimit}
					pageNeighbours={3}
					onPageChanged={this.onPageChanged}
				/>
			</div>
		)
	}
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
