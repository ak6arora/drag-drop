import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'
import  "./App.css";
const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Java',
      },
      {
        id: 2,
        text: 'C++',
      },
      {
        id: 3,
        text: 'ASP.NET',
      },
      {
        id: 4,
        text: 'Javascript',
      },
      {
        id: 5,
        text:
          'Python',
      },
      {
        id: 6,
        text: 'Node.js'
      }
    ])
    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex]
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        )
      },
      [cards],
    )
    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      )
    }
    return (
      <>
        <div className="container">{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}
export default Container
