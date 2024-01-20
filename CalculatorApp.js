import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [total, setTotal] = useState("");

  const handleButtonPress = (value) => {
    if (value === 'C') {
      setTotal("");
    } else if (value === 'back') {
      setTotal(total.slice(0, -1));
    } else if (value === '=') {
      try {
        const result = eval(total);
        setTotal(String(result));
      } catch (error) {
        setTotal("Error");
      }
    } else {
      setTotal(total + value);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.screen} value={total} editable={false} />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.yellowButton} onPress={() => handleButtonPress('C')}>
          <Text style={styles.cText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => handleButtonPress('back')}>
          <Text style={styles.symbols}>back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.othersButton} onPress={() => handleButtonPress('/')}>
          <Text style={styles.symbols}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.numberButton} onPress={() => handleButtonPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton} onPress={() => handleButtonPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton} onPress={() => handleButtonPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.othersButton} onPress={() => handleButtonPress('*')}>
          <Text style={styles.symbols}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.numberButton} onPress={() => handleButtonPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton} onPress={() => handleButtonPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton} onPress={() => handleButtonPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.othersButton} onPress={() => handleButtonPress('-')}>
          <Text style={styles.symbols}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.numberButton} onPress={() => handleButtonPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton} onPress={() => handleButtonPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton} onPress={() => handleButtonPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.othersButton} onPress={() => handleButtonPress('+')}>
          <Text style={styles.symbols}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.numberButton} onPress={() => handleButtonPress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton} onPress={() => handleButtonPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => handleButtonPress('=')}>
          <Text style={styles.symbols}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    marginHorizontal: 10, // Added margin for better visual
    borderRadius:96,
  },
  screen: {
     height: 20,
     width: '20',
     textAlign: 'right',
     fontSize:20,
     backgroundColor: '#fff',
     borderBottomColor: 'black',
     borderBottomWidth: 1,
     marginBottom: 10,
     paddingRight: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '20%',
    marginBottom: 10,
    gap:20,
  },
  yellowButton: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    color:'red',
    borderColor:'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    flex:1,
    width:80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C0D0B9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  othersButton: {
    flex: 1,
    width: 180,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#C0D0B9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberButton: {
    flex: 1,
    width:50,
    height:50,
    borderRadius:95,
    backgroundColor: '#009bbd',
    marginBorderColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'balck',
    fontSize:20,
  },
  cText:{
    fontSize:20,
    color:'red',
    height:50,
    width:60,
    borderRadius:95,
    backgroundColor:'#009bbd',
    textAlign:'center',padding:10,
  },
  symbols:{
    fontSize:20,
    color:'green',
  },
});

export default App;
