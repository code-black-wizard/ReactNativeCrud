import React, { useState } from 'react'
import {
  ScrollView,
  Text,
  FlatList,
  Button,
  View,
  StyleSheet
} from 'react-native'
import { Icon } from 'react-native-elements'
import Todo from './src/components/todo'
import Form from './src/components/form'

const App = () => {

  const [todos, setTodos] = useState([
    {
      title: 'React Native',
      description: 'Learning React Native',
      done: false,
      id: Math.random()
    }
  ])

  const [doneTodos, setDoneTodo] = useState([])

  const [filter, setFilter] = useState('all')

  const [modalVisible, setModalVisible] = useState(false)

  const addTodo = data => {
    const todo = {
      title: data.title,
      description: data.description,
      done: false,
      id: Math.random()
    }

    setTodos([...todos, todo])
  }

  const handleDone = index => {
    todos[index].done = !todos[index].done
    setTodos([...todos])
  }

  const handleDelete = index => {
    todos.splice(index, 1)
    todos.splice(index, 1)
    setTodos([...todos])
  }

  const deleteAllTodo = () => {
    setTodos([])
  }

  const filterDoneTodo = () => {
    setFilter('done')
    const doneTodo = todos.filter(todo => {
      return todo.done
    })
    setDoneTodo(doneTodo)
  }

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.heading}>My first crud app</Text>
      </View>
      <View style={styles.inner}>
        <FlatList
          data={filter === 'all' ? todos : doneTodos}
          renderItem={
            ({item, index}) =>
              <Todo item={item} index={index} handleDone={handleDone} handleDelete={handleDelete} />
          }
          keyExtractor={(item, index) => index.toString()}
        />
        <Form addTodo={addTodo} modalVisible={modalVisible} setModalVisible={() => setModalVisible(false)} />
        <View style={styles.btn}>
          <Button
            title="Show done todo"
            onPress={filterDoneTodo}
            style={styles.btn}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Show all todo"
            onPress={() => setFilter('all')}
            style={styles.btn}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Delete all todo"
            onPress={deleteAllTodo}
            color="#f44336"
          />
        </View>
        <View style={styles.plusBtn}>
          <Icon
            type='font-awesome'
            name='plus'
            color="#ffffff"
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>  
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#4791db',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    color: '#ffffff'
  },
  plusBtn: {
    backgroundColor: '#4791db',
    borderRadius: 50,
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    paddingLeft: 10,
    paddingRight: 10
  },
  btn: {
    marginBottom: 20
  }
})

export default App
