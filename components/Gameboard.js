import React, {useEffect, useState, useCallback} from 'react';
import { Text, View, Pressable } from 'react-native';
import Entypo from "@expo/vector-icons/Entypo";
import styles from '../style/style';

const START = 'plus';
const CROSS = 'cross';
const CIRCLE = 'circle';
const NBR_OF_COLS = 5;
const NBR_OF_ROWS = 5;
let initialBoard = new Array(NBR_OF_COLS * NBR_OF_ROWS).fill(START);

const NBR_OF_BOMBS = 15;
const NBR_OF_SHIPS = 3;
const TIME = 30;

export default function Gameboard() {
    const [board, setBoard] = useState(initialBoard);
    const [hits, setHits] = useState(0);
    const [bombsLeft, setBombsLeft] = useState(NBR_OF_BOMBS);
    const [shipsLeft, setShipsLeft] = useState(NBR_OF_SHIPS);
    const [ships, setShips] = useState([]);
    const [timeLeft, setTimeLeft] = useState(TIME); 
    const [isActive, setIsActive] = useState(false);
    const [statusText, setStatusText] = useState("Game has not started");
    const [buttonText, setButtonText] = useState("Start game");
    const [ , updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const items = [];
    for (let x = 0; x < NBR_OF_ROWS; x++) {
        const cols = [];
        for (let y = 0; y < NBR_OF_COLS; y++) {
            cols.push(
                <Pressable
                    key={x * NBR_OF_COLS + y}
                    style={styles.item}
                    onPress={() => dropBomb(x * NBR_OF_COLS + y)}>
                    <Entypo
                        key={x * NBR_OF_COLS + y}
                        name={board[x * NBR_OF_COLS + y]}
                        size={30}
                        color={chooseItemColor(x * NBR_OF_COLS + y)} />
                </Pressable>
            );
        }
        let row = 
            <View key={"row" + x}>
                {cols.map((item) => item)}
            </View>
        items.push(row);
    }
    
    useEffect(() => {
        checkWinner();
    });

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1);
            }, 1000);
        } else if (!isActive && timeLeft !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    function initGame() {
        let initialBoard = [...board];
        initialBoard = new Array(NBR_OF_COLS * NBR_OF_ROWS).fill(START);
        setBoard(initialBoard);
        setBombsLeft(NBR_OF_BOMBS);
        setShipsLeft(NBR_OF_SHIPS);
        setTimeLeft(TIME);
        setHits(0);
        initShips();
    }

    function startGame() {
        initGame();
        setStatusText("Game is on...");
        setButtonText("New game");
        placeShips();
        setIsActive(true);
    }

    function checkWinner() {
        if (hits === 3) {
            setStatusText("You sinked all ships!");
            setIsActive(false);
        } else if (bombsLeft === 0) {
            setStatusText("Game over. Ships remaining.");
            setIsActive(false);
        } else if (timeLeft === 0) {
            setStatusText("Timeout. Ships remaining.");
            setIsActive(false);
        }
    }

    function dropBomb(number) {
        if (isActive === false) {
            setStatusText("Click the start button first...");
        } 
        else if (isActive === true && board[number] === START && bombsLeft > 0) { 
            if (ships.indexOf(number) > -1) {
                board[number] = CIRCLE;
                setHits(hits+1);
                setShipsLeft(shipsLeft-1);
            } else {
                board[number] = CROSS;
            }
            setBombsLeft(bombsLeft-1);
            forceUpdate();
        }
    }

    function chooseItemColor(number) {
        if (board[number] === CROSS) {
            return "#FF3031";
        }
        else if (board[number] === CIRCLE) {
            return "#45CE30";
        }
        else {
            return "#111a00";
        }
    }

    function placeShips() {
        var min, max, n, p;
        min = 0;
        max = 24;

        for (let i = 0; i < NBR_OF_SHIPS; i++) {
            do {
                n = Math.floor(Math.random() * (max - min + 1)) + min;
                p = ships.includes(n);
                if (!p) {
                    ships.push(n);
                }
            }
            while(p);
        }
        setShips(ships);
    }

    function initShips() {
        ships.length = 0;
    }

    return (
        <View style={styles.gameboard}>
            <View style={styles.flex}>{items}</View>
            <Pressable style={styles.button} onPress={() => startGame()}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>
            <Text style={styles.gameinfo}>Hits: {hits} Bombs: {bombsLeft} Ships: {shipsLeft}</Text>
            <Text style={styles.gameinfo}>Time: {timeLeft} sec</Text>
            <Text style={styles.gameinfo}>Status: {statusText}</Text>
        </View>
    );
}
