import React from "react";
import Squares from "./Squares";
import { useState } from "react";
import MyButton from "../Reuseable Components/MyButton";

const TicTacToe = () => {
  const [sqrArray, setSqrArray] = useState(new Array(9).fill(null));
  const [isXtrun, setIsXturn] = useState(true);
  const [winner, setWinner] = useState(null);

  // winning patterns
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //handle click
  const handleClick = (sqrIndex) => {
    if (winner) return;
    const sqrArrayCopy = [...sqrArray];
    if (sqrArrayCopy[sqrIndex]) return;
    isXtrun ? (sqrArrayCopy[sqrIndex] = "X") : (sqrArrayCopy[sqrIndex] = "O");
    setIsXturn(!isXtrun);
    setSqrArray(sqrArrayCopy);
    winningPatterns.map((ptrn) => {
      if (
        sqrArray[ptrn[0]] != null &&
        sqrArray[ptrn[0]] == sqrArray[ptrn[1]] &&
        sqrArray[ptrn[1]] == sqrArray[ptrn[2]]
      ) {
        setWinner(sqrArray[ptrn[0]]);
      }
    });
    console.log(winner);
    // console.log(sqrIndex);
  };

  //restart game
  const restartGame = () => {
    console.log("restarted");
    setSqrArray(new Array(9).fill(null));
    setWinner(null);
    setIsXturn(true);
  };

  return (
    <div className='bg-white flex flex-col items-center rounded-md overflow-hidden max-w-fit mx-auto dark:bg-grey-800 my-4'>
      <div className='flex gap-1 mb-1'>
        <Squares
          onCick={() => handleClick(0)}
          value={sqrArray[0]}
        />
        <Squares
          onCick={() => handleClick(1)}
          value={sqrArray[1]}
        />
        <Squares
          onCick={() => handleClick(2)}
          value={sqrArray[2]}
        />
      </div>
      <div className='flex gap-1 mb-1'>
        <Squares
          onCick={() => handleClick(3)}
          value={sqrArray[3]}
        />
        <Squares
          onCick={() => handleClick(4)}
          value={sqrArray[4]}
        />
        <Squares
          onCick={() => handleClick(5)}
          value={sqrArray[5]}
        />
      </div>
      <div className='flex gap-1'>
        <Squares
          onCick={() => handleClick(6)}
          value={sqrArray[6]}
        />
        <Squares
          onCick={() => handleClick(7)}
          value={sqrArray[7]}
        />
        <Squares
          onCick={() => handleClick(8)}
          value={sqrArray[8]}
        />
      </div>
      <div className='flex flex-col justify-center items-center my-3'>
        {winner ? (
          <h2 className='text-2xl dark:text-white'>
            Winner is "
            <span className='font-bold text-purple-700 dark:text-red-600'>
              {winner}
            </span>
            ". Click Button below to start new game...!!!
          </h2>
        ) : null}
        <MyButton
          text='Restart Game'
          onClick={restartGame}
        />
      </div>
    </div>
  );
};

export default TicTacToe;
