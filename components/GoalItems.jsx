import { Pressable, StyleSheet,Text, View, } from "react-native"


const GoalItems = ({text,onDeleteItem,id}) => {
  return (
    <View style={styles.goalList}>
    <Pressable android_ripple={{color:'#dddddd'}} onPress={()=>onDeleteItem(id)} style={({pressed})=>pressed && styles.pressedItem}>
    <Text style={styles.goalText}>{text}</Text>
    </Pressable>
    </View>
  )
}

export default GoalItems

const styles=StyleSheet.create({
    goalList: {
    paddingVertical: 7,
    marginVertical: 10,
    fontSize:15,
    backgroundColor:"deepskyblue",
  },
  goalText:{
    color: 'white',
    paddingLeft:10,

  },
  pressedItem:{
    opacity:0.5,
  }
})