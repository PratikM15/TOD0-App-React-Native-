import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';

export default class Task extends React.Component {
    render(){
  return (
    <View key={this.props.keyval} style={styles.task}>
        <Text style={styles.taskText}>{this.props.val.date}</Text>
        <Text style={styles.taskText}>{this.props.val.task}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>-</Text>
        </TouchableOpacity>
    </View>
    
  );
    }
}

const styles = StyleSheet.create({
  task:{
    position:'relative',
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor:'#ededed'
  },
  taskText:{
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:"#e91e63"
  },
  deleteButton:{
    position:'absolute',
    padding:10,
    top:10,
      right:10,
      bottom:10,
      backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center',
  },
  deleteButtonText:{
    color:'white'
  },
});
