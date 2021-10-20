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


const BOMBS = 25;
const SHIPS = 3;
const TIME = 60;

export default function Gameboard() {
    const [some, setSome] = useState(); // mulla on tilamuuttujia 9 kpl

    const [ , updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    
    const items = []; // tää tekee sen pelikentän, samoin kuin dices-gamessa mut kaksiulotteinen
    for (let x = 0; x < NBR_OF_ROWS; x++) {
        const cols = [];
        for (let y = 0; y < NBR_OF_COLS; y++) {
            cols.push( /** tänne pressable, katoin mallia jostakin harjoitustehtävästä */);
        }
        let row = 
            <View key={"row" + x}>
                {cols.map((item) => item)}
            </View>
        items.push(row);
    }

    useEffect(() => {
        // pitää pelin käynnissä
    });

    useEffect(() => {
        // timer
    }, [xxx, yyy]);

    function initGame() {
        // alustaa pelin eli nollaa kaikki ja luo uuden kentän
        // vähän vastaava kuin tictactoen resetGame()
    }

    function startGame() {
        initGame();
        // vaihtaa statustekstin 
        // vaihtaa napin tekstin 
        // laittaa laivat paikoilleen
        // käynnistää timerin
    }

    function checkWinner() {
        // tarkistaa onko kolme osumaa, jos on niin voitit pelin
        // tarkistaa onko pommit loppu tai aika loppu, jos on niin gameover
        // molemmissa tapauksissa myös pysäyttää timerin
    }
    
    function dropBomb() {
        // tarkistaa onko peli käynnissä, kohdassa plus ja pommeja jäljellä
        // jos on niin onko paikassa laiva
            // jos on niin plus -> ympyrä
            // jos ei niin plus -> rasti

        // vähennä pommien määrää
        forceUpdate(); // pakottaa kentän muuttumaan heti
    }

    function chooseItemColor() {
        // ihan sama kuin tictactoessa
    }

    function placeShips() {
        
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
    )
}