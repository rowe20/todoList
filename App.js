
import React,{useState} from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native-web';
import Task from './components/Task';


export default function App() {

const [task,setTask] = useState('');
const [taskItems, settaskItems] = useState([]);

const handleAddTask =()=>{
  
  settaskItems([...taskItems,task]);
  setTask('');
}

const completeTask = (index)=>{
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index,1);
  settaskItems(itemsCopy);
}


  return (
    <View style={styles.container}>
      {/*TOdays task*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Todays Task</Text>

        <View style={styles.items}> 
          {/*This is where task will go */}
          {
            taskItems.map((item,index)=>{
              
               return <TouchableOpacity onPress={()=>completeTask(index)}>
                 <Task key={index} text={item}/>
               </TouchableOpacity>
            })
          }
            {/* <Task text={"task 1"}/>
            <Task text={"task 2"}/> */}
        </View>

      </View>
      <KeyboardAvoidingView
      behaviour = {Platform.OS ==="ios"?"padding":"height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=> setTask(text)} />

            <TouchableOpacity onPress={()=> handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom: 60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    paddingVertical: 15,
    width:250,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{},
});
