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
    <View>
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
    padding:15,
    borderBottomWidth:1,
    borderBottomColor: '#ccc',
  },
});

export default ToDoList;