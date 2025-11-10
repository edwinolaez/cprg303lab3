import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export default function App(){
  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go to gym',
    'Walk Dog'
  ]);

  const addTask = (newTask) => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
    }
  };
  return (
    <LinearGradient 
    colors={['#10b981','#8b5cf6','#fbbf24']}
    style={styles.container}>
    <SafeAreaView style={styles.container}>
      <ToDoForm addTask={addTask}/>
      <ToDoList tasks={tasks}/>
    </SafeAreaView>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});

