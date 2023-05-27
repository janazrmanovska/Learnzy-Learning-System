import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Image, SimpleGrid, Center } from "@chakra-ui/react";
import { cardStyle, cardImgStyle, cardFrontStyle, flippedFrontStyle, cardBackStyle, flippedBackStyle } from "./MemoryCardStyle"


interface Card {
  src: string;
  matched: boolean;
  id: number;
}


interface Props {
  sourceFront: string;
  card: Card;
  flipped: boolean;
  disabled: boolean;
  handleChoice: (card: Card) => void;
}


const MemoryCard = ({sourceFront, card, flipped, disabled, handleChoice} : Props) => {
  const [showFace, setShowFace] = useState(false)

  const handleClick = () => {
    // setShowFace(!showFace)
    if (!disabled) {
      handleChoice(card)
    }
  };

  return (
    <div style={cardStyle}>
      <div className={flipped ? "flipped" : ""}>
        {/* <Image className="front" src={sourceFront} w="sm" h="sm" /> :
        <Image className="back" onClick={() => handleClick()} src="/testImg.png" w="sm" h="sm"/> */}
        <img
          src={sourceFront} 
          style={{
            ...cardImgStyle, 
            ...cardFrontStyle,
            ...(flipped ? flippedFrontStyle : {})
          }} 
          alt="fuck you"
        />

        <img
          src="/testImg.png"
          style={{
            ...cardImgStyle, 
            ...cardBackStyle,
            ...(flipped ? flippedBackStyle : {})
          }} 
          onClick={handleClick}
          alt="fuck you"
        />

        {/* <img className="back" onClick={() => handleClick} src="/testImg.png"/> */}
      </div>
    </div>
  //   <div>
  //     {showFace ? 
  //         <Image onClick={() => setShowFace(!showFace)} src={sourceFront} w="sm" h="sm" /> :
  //         <Image onClick={() => handleClick()} src="/testImg.png" w="sm" h="sm"/>
  //     }
  // </div>
  );
};

const cardValues = [ 
  {src: "https://via.placeholder.com/600/24f355", matched: false}, 
  {src: "https://via.placeholder.com/600/771796", matched: false}, 
  {src: "https://via.placeholder.com/600/d32776", matched: false}, 
  {src: "https://via.placeholder.com/600/56a8c2", matched: false}, 
  {src: "https://via.placeholder.com/600/810b14", matched: false}, 
  {src: "https://via.placeholder.com/600/fdf73e", matched: false}, 
]

const Memory: NextPage = () => {

  const [cards, setCards] = useState<{ id: number; src: string; matched: boolean }[]>([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false)


  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards)
      setTurns(0)
  };

  const handleChoice = (card:any) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card;
            }
          })
        })
        resetTurn()
      } else {
        console.log("no match")
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  };

  useEffect(() => {
    shuffleCards()
  }, []);

  return (
    <div style={{backgroundColor: "#FFCDB8"}}>
      <Center>
        <button style={{marginTop:"10px", 
                        marginBottom:"10px",
                        backgroundColor: "purple", 
                        color: "white", 
                        padding:"10px", 
                        borderRadius:"15px"}}  
                onClick={shuffleCards}>
              New Game
          </button>
      </Center>
      <Center>
        <SimpleGrid columns={4} spacingX="10px" gridGap="10px">
        {cards.map(card => (
         <div className="card" key={card.id}>
          <MemoryCard 
            sourceFront={card.src} 
            card={card} 
            handleChoice={handleChoice}  
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
         </div>
        ))}
        </SimpleGrid>
      </Center>
    </div>
  );
};
export default Memory