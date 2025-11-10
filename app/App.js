import { useState } from 'react';
import { StyleSheet } from 'react-native';


// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

export default function App(){
  const[tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'blue',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});