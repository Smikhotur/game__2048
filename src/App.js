import React, { useEffect } from 'react';
import { Board } from './components/Board/Board';
import useLocalStorage from './useLocalStorage';
import cloneDeep from 'lodash/cloneDeep';
import { rotateLeft, rotateRight } from './boardLogic';
import getNewPosition from './helpers';
import './App.scss';
import { Game } from './components/Game/Game';

function App() {
  const INITIAL_DATA = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]
  const WIN = 'win';
  const GAME_OVER = 'gameover';
  const PLAYING = 'playing';

  const [data, setData] = useLocalStorage("initial", INITIAL_DATA);
  const [score, setScore] = useLocalStorage("score", 0);
  const [gameOver, setGameOver] = useLocalStorage("gameover", false);
  const [restart, setRestart] = useLocalStorage("restart", true);
  const [win, setWin] = useLocalStorage("win", false);
  const [history, setHistory] = useLocalStorage("history", []);
  const [scorelist, setScoreList] = useLocalStorage("scorelist", []);
  const [overlay, setOverlay] = useLocalStorage("overlay", PLAYING);

  const initBoard = () => {
    let board = cloneDeep(data);
    placeRandom(board);
    placeRandom(board);
    setData(board);
    setRestart(false);
  };

  useEffect(() => {
    if (restart) {
      initBoard();
    } // eslint-disable-next-line
  }, [restart]);

  const placeRandom = (newGrid) => {
    let [rand1, rand2] = getNewPosition(newGrid);
    while (newGrid[rand1][rand2] !== null) {
      [rand1, rand2] = getNewPosition(newGrid);
    }
    newGrid[rand1][rand2] = Math.random() > 0.9 ? 4 : 2;
    return newGrid;
  };

  const boardMoved = (original, updated) => {
    return JSON.stringify(updated) !== JSON.stringify(original) ? true : false;
  };

  function flatted(board) {
    return [].concat.apply([], board);
  }

  const shiftLeft = arr => {
    const result = arr
      .filter(Boolean)
      .concat([null, null, null, null])
      .slice(0, 4);

    for (let i = 0; i < arr.length; i++) {
      if (result[i] && result[i + 1] && result[i] === result[i + 1]) {
        result[i] *= 2;
        result[i + 1] = null;
        setScore(score + result[i]);
      }
    }
    return result
      .filter(Boolean)
      .concat([null, null, null, null])
      .slice(0, 4);
  };

  const handleLeft = (checkDead = true) => {
    let oldData = cloneDeep(data);
    if (win) {
      setOverlay(true);
      return;
    }

    let newData = cloneDeep(data).map(item => shiftLeft(item));
    if (boardMoved(oldData, newData)) {
      setHistory([...history, oldData]);
      if (flatted(newData).includes(2048)) {
        setWin(true);
        setData(newData);
        setOverlay(WIN)
        return;
      } else placeRandom(newData);
    } else if (!flatted(oldData).includes(null) && checkDead && checkForGameOver(newData)) {
      setOverlay(GAME_OVER)
      setGameOver(true);
    }
    if (checkDead) {
      setData(newData);
    }
    return newData;
  };

  const shiftRight = arr => {
    arr = arr.filter(Boolean);
    let result = [];

    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] > 0 && arr[i - 1] === arr[i]) {
        arr[i] *= 2;
        arr[i - 1] = null;
        setScore(score + arr[i]);
      }
    }
    result = [null, null, null, null].concat(arr.filter(Boolean));
    result = result.slice(result.length - 4);
    return result;
  };

  const handleRight = (checkDead = true) => {
    let oldData = data;
    if (win) {
      setOverlay(true);
      return;
    }

    let newData = cloneDeep(data).map(item => shiftRight(item));
    if (boardMoved(oldData, newData)) {
      setHistory([...history, oldData]);
      if (flatted(newData).includes(2048)) {
        setWin(true);
        setData(newData);
        setOverlay(WIN)
        return;
      } else placeRandom(newData);
    } else if (!flatted(oldData).includes(null) && checkDead && checkForGameOver(newData)) {
      setOverlay(GAME_OVER)
      setGameOver(true);
    }
    if (checkDead) {
      setData(newData);
    }
    return newData
  };

  const handleUp = (checkDead = true) => {
    let oldData = cloneDeep(data);
    if (win) {
      setOverlay(true);
      return;
    }

    let newData = cloneDeep(data);
    newData = rotateLeft(rotateRight(newData).map(item => shiftRight(item)));
    if (boardMoved(oldData, newData)) {
      setHistory([...history, oldData]);
      if (flatted(newData).includes(2048)) {
        setWin(true);
        setData(newData);
        setOverlay(WIN);
        return
      } else placeRandom(newData);
    } else if (!flatted(oldData).includes(null) && checkDead && checkForGameOver(newData)) {
      setOverlay(GAME_OVER);
      setGameOver(true);
    }
    if (checkDead) {
      setData(newData);
    }
    return newData;
  }

  const handleDown = (checkDead = true) => {
    let oldData = cloneDeep(data);
    if (win) {
      setOverlay(true);
      return;
    }

    let newData = cloneDeep(data);
    newData = rotateLeft(rotateRight(newData).map(item => shiftLeft(item)));
    if (boardMoved(oldData, newData)) {
      setHistory([...history, oldData]);
      if (flatted(newData).includes(2048)) {
        setWin(true);
        setData(newData);
        setOverlay(WIN)
        return;
      } else placeRandom(newData);
    } else if (!flatted(oldData).includes(null) && checkDead && checkForGameOver(newData)) {
      setOverlay(GAME_OVER);
      setGameOver(true);
    }
    if (checkDead) {
      setData(newData);
    }
    return newData;
  }

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 38:
        handleUp();
        break;
      case 40:
        handleDown();
        break;
      case 37:
        handleLeft();
        break;
      case 39:
        handleRight();
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const onClickNewGame = () => {
    setScoreList([...scorelist, score]);
    setHistory([]);
    setGameOver(false);
    setOverlay(PLAYING);
    setRestart(true);
    setScore(0);
    setData(INITIAL_DATA);
  }

  const onClickKeepGoing = () => {
    setOverlay(PLAYING);
    setData(data);
    setWin(false);
  }

  const checkForGameOver = data => {
    let moves = [
      boardMoved(data, handleUp(false)),
      boardMoved(data, handleDown(false)),
      boardMoved(data, handleRight(false)),
      boardMoved(data, handleLeft(false))
    ];
    return moves.includes(true) ? false : true;
  };

  return (
    <div>
      <div className="App">
        {win || gameOver

          ?

          <Game
            onClickNewGame={onClickNewGame}
            overlay={overlay}
            onClickKeepGoing={onClickKeepGoing} />
          :
          <>
            <Board
              data={data}
              score={score}
              onClickNewGame={onClickNewGame}
              initBoard={initBoard}
            />
            <div className="app__contents">

            </div>
          </>
        }
      </div>
    </div>
  );
}

export default App;
