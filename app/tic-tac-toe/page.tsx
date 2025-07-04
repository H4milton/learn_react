"use client";

import clsx from "clsx";
import { useState } from "react";
import type { SquareProps } from "@/types";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";

export default function TicTacToePageHome() {
  return (
    <div>
      <h1 className={clsx(title({ size: "md" }), "text-primary-800")}>
        Tic Tac Toe
      </h1>

      <Card className="py-4 mt-10 w-[500px]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Turno actual</p>
          <h4 className="font-bold text-large">X</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Board />
        </CardBody>
      </Card>
    </div>
  );
}

// export function Square({ value }: SquareProps) {
//   return <button className="square">{value}</button>;
// }

export const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className="square" type="button" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState<"X" | "O">("X");

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (turn === "X" ? "O" : "X");
  }

  function handleClick(i: number) {
    if (squares[i] !== null || calculateWinner(squares)) return;

    //Creamos una copia de la matriz actual
    const nextSquares = [...squares];
    // const nextSquares = squares.slice();

    //Asignamos el valor segun el turno
    if (turn === "X") {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    //Cambiamos el turno
    setTurn(turn === "X" ? "O" : "X");

    //Almacenamos es cambio(estado) en la matriz
    setSquares(nextSquares);

    console.info("Nueva matriz después de asignar el valor de X:", nextSquares);
    console.info("Matriz original:", squares);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="flex flex-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex flex-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex flex-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares: number[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
