import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7ffe6'
  },
  header: {
    marginTop: 30,
    backgroundColor: '#669900',
    flexDirection: 'row'
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#669900',
    flexDirection: 'row'
  },
  title: {
    color: '#f7ffe6',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#f7ffe6',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#f7ffe6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#f7ffe6',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  item: {
    margin: 15,
    padding: 5
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#88cc00",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  }
});