import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { Icon } from 'react-native-elements'

const todo = item => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Title: {item.item.title}</Text>
      <Text style={styles.text}>Description: {item.item.description}</Text>
      <CheckBox
        disabled={false}
        value={item.item.done}
        onValueChange={() => item.handleDone(item.index)}
      />
      <View style={{width: 26}}>
        <Icon
          color='#f44336'
          type='font-awesome'
          name='remove'
          onPress={() => item.handleDelete(item.index)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: 'rgba(71, 145, 219, 0.5)',
    marginBottom: 10
  },
  text: {
    fontSize: 20
  }
})

export default todo