import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default function Todo(props) {
    return (
        <View style={styles.todo}>
            <Text>{props.name}</Text>
            <Text>Due: {props.due}</Text>
            <Button
                title="Remove"
                color="#539987"
                onPress={() => props.removeTodo(props.id)}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        backgroundColor: "#EEE",
        paddingVertical: 20,
        marginVertical: 10
    }
})
