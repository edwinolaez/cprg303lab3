import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const ToDoList = () => {
//   return (
//     <View>
//       <Text>ToDoList</Text>
//     </View>
//   )
// }

function ToDoList({ tasks}) {
  return (
    <View style={styles.list}>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskItem}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  taskItem:{
    backgroundColor: 'rgba(255,255,255,0.9)',
    marginHorizontal:20,
    marginBottom: 12,
    padding: 18,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity:0.2,
    shadowRadius:8,
    elevation:5,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  taskText: {
    fontSize:20,
    color: '#1e293b',
    fontWeight:'600'
  }
});

export default ToDoList;