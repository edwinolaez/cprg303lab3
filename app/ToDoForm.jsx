import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const ToDoForm = ({addTask}) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    addTask(text);
    setText('');
  };
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder='Please add a new task' placeholderTextColor="#999" value={text} onChangeText={setText}/>
      <Button title='Add' color="#7c3aed" onPress={handleAdd}/>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 40,
  },

  input: {
    flex:1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginRight: 10,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 12,
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.15,
    elevation:4
  },
});

export default ToDoForm