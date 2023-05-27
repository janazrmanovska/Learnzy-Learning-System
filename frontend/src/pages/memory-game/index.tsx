import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { SimpleGrid, Center, Box } from "@chakra-ui/react";
import {
  cardStyle,
  cardImgStyle,
  cardFrontStyle,
  flippedFrontStyle,
  cardBackStyle,
  flippedBackStyle,
} from "./MemoryCardStyle";

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

const MemoryCard = ({
  sourceFront,
  card,
  flipped,
  disabled,
  handleChoice,
}: Props) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div style={cardStyle}>
      <div className={flipped ? "flipped" : ""}>
        <img
          src={sourceFront}
          style={{
            ...cardImgStyle,
            ...cardFrontStyle,
            ...(flipped ? flippedFrontStyle : {}),
          }}
          alt="ss"
        />

        <img
          src="/backgroundMemory.png"
          style={{
            ...cardImgStyle,
            ...cardBackStyle,
            ...(flipped ? flippedBackStyle : {}),
          }}
          onClick={handleClick}
          alt=""
        />
      </div>
    </div>
  );
};

const cardValues = [
  { src: "/circle.png", matched: false },
  { src: "/triangle.png", matched: false },
  { src: "/square.png", matched: false },
  { src: "/rectangle.png", matched: false },
  { src: "/diamond.png", matched: false },
  { src: "/star.png", matched: false },
];

const Memory: NextPage = () => {
  const [cards, setCards] = useState<
    { id: number; src: string; matched: boolean }[]
  >([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: any) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        console.log("no match");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <Box backgroundColor="#FFCDB8" w="100vw" h="100vh">
      <Center>
        <button
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            backgroundColor: "#F47458",
            color: "white",
            padding: "10px",
            borderRadius: "15px",
          }}
          onClick={shuffleCards}
        >
          New Game
        </button>
      </Center>
      <Center>
        <SimpleGrid columns={4} spacingX="10px" gridGap="10px">
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <MemoryCard
                sourceFront={card.src}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            </div>
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};
export default Memory;
