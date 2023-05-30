import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,
         View,
         FlatList,
         Button
         } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() {
  
  const [modalVisible, setModalVisible] = useState(false) 
  const [courseGoals, setCourseGoals] = useState([]);

  
  function startAddGoalHandler(){
    setModalVisible(true);
  };

  function endAddGoalHandler(){
    setModalVisible(false);
  };




  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCouseGoals => [
      ...courseGoals,
      {text:enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id )
    });
  };




  return (
    <>
    <StatusBar/>
    <View style={styles.appContainer}>
      <Button 
         title="Add New Goal" 
         color="blue"
         onPress={startAddGoalHandler}
         />
     <GoalInput visible={modalVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
    
     <View style={styles.goalsContainer}>
     <FlatList 
         data={courseGoals}
         renderItem={(itemData)=> {
           return (
              <GoalItem
               
               text={itemData.item.text} 
               id={itemData.item.id}
               onDeleteItem={deleteGoalHandler}
               /> )
         }}
         keyExtractor={(item, index)=> {
          return item.id;
         }} 
         alwaysBounceVertical={false} 
      
      
     />
     </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
  
});
