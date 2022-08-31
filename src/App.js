import React,{useState} from "react";
import {IconButton,Input,List,ListItem,ListItemText} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import "./App.css";

function App() {

  const [items,setItems]=useState([]);
  const [item,setItem]=useState([]);

  function random(){
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = ' ';
    const charactersLength = characters.length;
    for(let i = 0; i < 6; i++) {
      result +=characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const addItem=()=>{
    setItems([...items,random()]);
    setItem([...items]);
  }

  const handleChange=(e)=>{
    const tar=e.target.value;
    if(tar===" "){
      setItem([...items]);
    }else{
      const newArr=items.filter(function(v){
        if(v.toLowerCase().indexOf(tar.toLowerCase())!==-1){
          let i=0;
          while(i<tar.length){
            if(tar[i].toLowerCase()!==v[i+1].toLowerCase()){
              return false;
            }
            i++;
          }
          return true;
        }
        return false;
      });
      setItem(newArr);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Input type="text" autoFocus placeholder="search" onChange={handleChange} style={{"left":"20%","width":"150px"}}></Input>
        <IconButton area-label="add" onClick={addItem} style={{"left":"20%"}}><AddIcon/></IconButton>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'aquamarine' }}>
          {item.map((value) => (
            <ListItem key={value} disableGutters style={{"backgroundColor":"#bb7979","width":"50%","margin":"5px","padding":"5px","fontVariant":"small-caps","left":"20%"}}>
              <ListItemText primary={`${value}`} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default App;
