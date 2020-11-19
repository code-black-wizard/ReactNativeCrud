import React, { useState } from 'react'
import {
  Text,
  TextInput,
  Button,
  Modal,
  View,
  StyleSheet
} from 'react-native'

const form = props => {
  const [title, setTitle] = useState('')

  const [description, setDescription] = useState('')

  const [error, setError] = useState(false)

  const addTodo = () => {
    if (!title || !description) {
      setError(true)
    } else if (title && description) {
      props.addTodo({title, description})
      setError(false)
      setTitle('')
      setDescription('')
      props.setModalVisible()
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}
      style={styles.modal}
    >
      <View style={styles.form}>
        <View style={styles.inner}>
          <TextInput
            placeholder="Type todo title"
            onChangeText={text => setTitle(text)}
            defaultValue={title}
            style={styles.field}
          />
          <TextInput
            placeholder="Type todo description"
            onChangeText={text => setDescription(text)}
            defaultValue={description}
            style={styles.field}
          />
          <Button
            onPress={addTodo}
            title="Create todo"
            color="#303030"
            accessibilityLabel="Create todo"
          />
          {error &&
            <Text style={styles.error}>All field are required</Text>
          }
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  inner: {
    backgroundColor: '#ffffff',
    paddingRight: 10,
    paddingLeft: 10
  },
  field: {
    borderColor: '#303030',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  error: {
    color: '#f44336',
    marginTop: 20
  }
})

export default form