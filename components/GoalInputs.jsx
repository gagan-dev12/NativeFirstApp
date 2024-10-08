import { View, Text, StyleSheet, TextInput, Button, Modal,Image } from 'react-native';
import React from 'react';

const GoalInputs = ({ onAddGoal, enteredGoal, onGoalInputHandler, IsVisible, closeModel }) => {
  return (
    <Modal visible={IsVisible} animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Image source={require('../assets/images/react-logo.png')}/>
          <TextInput
            placeholder="Your course goal"
            style={styles.textInput}
            onChangeText={onGoalInputHandler}
            value={enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={onAddGoal} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={closeModel} color="red" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInputs;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',      
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: '80%',             
    padding: 20,               
    backgroundColor: '#fff',    
    borderRadius: 10,          
    elevation: 5,              
    shadowColor: 'black',      
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,       
    shadowRadius: 10,          
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    width: '100%',            
    marginBottom: 20,          
    borderRadius: 5,           
  },
  buttonContainer: {
    flexDirection: 'row',     
    justifyContent: 'space-between',  
  },
  button: {
    width: '45%',             
  }
});
