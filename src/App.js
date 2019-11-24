import React, { Component } from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  console.log(startIndex, endIndex)
  const result = [...list];
  result.splice(startIndex, 1);
  result.splice(endIndex, 0, list[startIndex]);
  return result;
};

class App extends Component {
  state = {
    list: ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix", "itemSeven", "itemEight", "itemNine"]
  }

  dragEnd = result => {
    console.log(result)
    if (!result.source || !result.destination)
      return
    const list = reorder(this.state.list, result.source.index, result.destination.index)
    this.setState({
      list
    });
  }
  render() {
    let { list } = this.state;
    return (
      <DragDropContext onDragEnd={this.dragEnd}>
        <Droppable droppableId="test" direction="horizontal">
          {
            (provided, snapshot) => (

              <div className="App"
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {
                  list.map((item, index) => {
                    return (
                      <Draggable key={item} draggableId={item} index={index}>
                        {
                          (provided, snapshot) => (
                            <span
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                             >{item}</span>
                          )
                        }
                      </Draggable>
                    )
                  })
                }
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
      </DragDropContext>
    );
  }
}

export default App;
