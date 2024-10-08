import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, ScrollView, FlatList, StatusBar } from "react-native";
import GoalItem from "../components/GoalItems";
import GoalInputs from "../components/GoalInputs";


export default function Index() {
  const [modelIsVisible,setModelIsVisible]=useState(false)
  const [enterGoalText, setEnterGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModelIsVisible(true)
  }
  function closeAddGoalHandler(){
    setModelIsVisible(false)
  }

  function goalInputHandler(enterdText) {
    setEnterGoalText(enterdText);
  }

  function addGoalHandler() {
    // console.log(enterGoalText)
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, { text: enterGoalText, id: Math.random().toString() }
    ]);
    setEnterGoalText('');
    setModelIsVisible(false);
  }
  function deleteHandler(goalId) {
    setCourseGoals(currentCourseGoal=>{
      return currentCourseGoal.filter((goal) => goal.id !== goalId);
    })
  }
  return (
    <>
    <StatusBar style="dark"/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={startAddGoalHandler}/>
      {modelIsVisible && <GoalInputs
        onAddGoal={addGoalHandler}
        enteredGoal={enterGoalText}
        onGoalInputHandler={goalInputHandler}
       IsVisible={modelIsVisible}
        closeModel={closeAddGoalHandler}
        /> }

      <View style={styles.goalsContainer}>

        {/* <ScrollView >
          {courseGoals.map((goal, ind) =>
            <View key={ind} style={styles.goalList}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          )}
        </ScrollView> */}

        <FlatList
          data={courseGoals}
          renderItem={({ item }) => {
            return (
              <GoalItem text={item.text}
              id={item.id}
              onDeleteItem={deleteHandler} />
            );
          }}
          keyExtractor={(item) => item.id}  // Provide a unique key for each item
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
    flex: 1
  },
})
