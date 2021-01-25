import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Task from './Task'

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            taskArray:[],
            taskText:''
        }
    }

    addNote(){
        if(this.state.taskText){
            var d = new Date();
            this.state.taskArray.push({
                date:d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate(),
                task: this.state.taskText
            });
            this.setState({taskArray:this.state.taskArray})
            this.setState({taskText: ''})
        }
    }

    deleteTask(key){
        this.state.taskArray.splice(key, 1)
        this.setState({taskArray:this.state.taskArray})
    }

    render(){
        let tasks = this.state.taskArray.map((val, key) =>{
            return <Task key={key} keyval={key} val={val} deleteMethod={()=> this.deleteTask(key)}></Task>
        })
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>TODO - Manage All Tasks</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
            {tasks}
        </ScrollView>
        <View style={styles.footer}>
            <TextInput
            style={styles.textInput}
            placeholder=">Add Task"
            onChangeText={(taskText)=> this.setState({taskText})}
            value={this.state.taskText}
            placeholderTextColor="white"
            underlineColorAndroid="transparent">

            </TextInput>
        </View>
        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  header:{
    backgroundColor:'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd'

  },
  headerText:{
    fontSize:20,
    padding:25
  },
  scrollContainer:{
    flex:1,
    marginBottom:'100'
  },
  footer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    zIndex:10,
  },
  textInput:{
    alignSelf:'strech',
    color:"#fff",
    padding:20,
    backgroundColor: "#252525",
    borderTopWidth:2,
    borderTopColor:'#ddd'
  },
  addButton:{
      position:'absolute',
      zIndex:11,
      right:20,
      bottom:90,
      backgroundColor:'orange',
      width:90,
      height:90,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      elevation:8
  },
  addButtonText:{
      color:"#fff",
      fontSize:24
  }
});
