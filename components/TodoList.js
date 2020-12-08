import React, { Component, useState } from 'react'
import { FlatList, View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import Todo from './Todo'


export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Untitled",
            due: "nil",
        }
    }

    render() {
        return (
            <View style={{flex: 1, width: "100%", alignContent: "stretch"}}>
                <View style={styles.todolist}>
                    <FlatList
                        data={this.props.todos}
                        renderItem={item => <Todo
                         name={item.item.name} 
                         due={item.item.date}
                         id={item.item.id}
                         removeTodo={this.props.removeTodo}
                         />}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </View>

                <View style={{flex: 0.5, margin: 30, alignContent: "space-between"}}>
                    <TextInput
                        style={{height: 40, backgroundColor: "#FFF", marginVertical: 10 }}
                        placeholder="Due"
                        onChangeText={text => this.setState({ title: text })}
                        defaultValue={this.state.title}
                    />
                    <TextInput
                        style={{height: 40, backgroundColor: "#FFF", marginBottom: 10 }}
                        placeholder="Due"
                        onChangeText={text => this.setState({ due: text })}
                        defaultValue={this.state.due}
                    />

                    <Button
                        title="Add todo"
                        color="#88BFB1"
                        onPress={() => this.props.addTodo(this.state.title, this.state.due)}
                    />
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    todolist: {
        backgroundColor: "#88BFB1",
        flex: 1,
        width: "100%",
        alignContent: "stretch",
        borderRadius: 3,
    }
})
