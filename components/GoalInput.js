import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props){

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      };

    function addGoalHandler(){
        if(enteredGoalText !== ""){
        props.onAddGoal(enteredGoalText);}
        setEnteredGoalText('');
    };  

  return(
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer} >
        <Image style={styles.image} source={require('../assets/images/goal3.png')} />
    <TextInput 
        style={styles.textInput} 
        placeholder='Your course goal!' 
        onChangeText={goalInputHandler} 
        value={enteredGoalText}
        />
      <View style={styles.buttonContainer} >
        <View style={styles.button}>
           <Button title="Add Goal" onPress={addGoalHandler}  />
        </View>
        <View style={styles.button}>
           <Button title="Cancel" onPress={props.onCancel} />
        </View>
      </View>
   </View>
   </Modal>
  )

};


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer :{
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',
        
        padding: 16,
        
      },
      image:{
        width:100,
        height:100,
        margin: 20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '100%',
        padding: 8,
      },
      buttonContainer: {
         flexDirection: 'row',
         marginTop: 16,
      },
      button: {
        width: '25%',
        marginHorizontal: 8,
      },
     
      
})