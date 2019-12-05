
import React from 'react'
import ReactDOM from 'react-dom'
import Example from './example'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import Pagination from './components/Pagination'
import * as Todos from './todos.json';
import 'drag-drop-touch-polyfill/DragDropTouch.js'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.backend = ("ontouchstart" in document.documentElement) ? TouchBackend : HTML5Backend;
		this.state = {
			list: Todos.default.filter(todo => todo.id <= 10),
			pageLimit: 10
		}
		this.dragSrcIndex = null
	}

	onPageChanged = (page) => {
		const { currentPage, pageLimit } = page;
		let start = (currentPage - 1) * pageLimit;
		this.setState({
			list: Todos.default.filter(todo => todo.id > start && todo.id <= start + pageLimit)
		})
	}

	onDragStart = (e, i) => {
		this.dragSrcIndex = i;
		var dt = e.dataTransfer;
		dt.effectAllowed = 'move';
		dt.setData('text', e.target.innerHTML);
		return false;
	}

	onDragOver = (e) => {
		if (this.dragSrcIndex!==null) {
			e.preventDefault();
			e.dataTransfer.dropEffect = 'move';
		}
	}

	onDrop = (e, i) => {
		let {list} = this.state;
		if (this.dragSrcIndex!==null) {
			e.stopPropagation();
			// e.stopImmediatePropagation();
			e.preventDefault();
			if (this.dragSrcIndex != i) {
					let el = list.splice(this.dragSrcIndex, 1);
					console.log(el)
					list.splice(i, 0, el[0]);
					this.setState({list})
			}
	}
	}
	onDragEnd = (e) => {
		this.dragSrcIndex = null
	}
	render() {
		const { list, pageLimit } = this.state;
		return (
			<div>
				<div className="container">
					{/* <DndProvider backend={this.backend}>
						<Example />
					</DndProvider> */}
					{
						list.map((todo, index) => {
							return (
								<div draggable={true} className="card"
									onDragStartCapture={(e) => this.onDragStart(e, index)}
									onDragOver={this.onDragOver}
									onDragEnd={this.onDragEnd}
									onDrop={(e) => this.onDrop(e, index)}>
									{todo.title.split(" ")[1]}
								</div>
							)
						})
					}
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
