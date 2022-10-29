import { createSlice } from '@reduxjs/toolkit';

let settings = localStorage.getItem("settings");
if(!settings){
    settings={
        nbTries: 10,
        nbScores: 10,
        nbChars: 10
  }
}else{
  try{
    settings = JSON.parse(settings)
  }catch{
    settings={
        nbTries: 10,
        nbScores: 10,
        nbChars: 10
    }
  }  
}

export const settingsSlice = createSlice({
  name: "articles",
  initialState: {
    nbTries : settings.nbTries,
    nbScores : settings.nbScores,
    nbChars : settings.nbChars,
  },
  reducers: {
    setNbTries: (state, action) => {
        state.nbTries = action.payload;
        localStorage.setItem('settings', JSON.stringify({
            nbTries: state.nbTries,
            nbScores: state.nbScores,
            nbChars: state.nbChars,
        }));
  
    },  
    setNbScores: (state, action) => {
        state.nbScores = action.payload;
        localStorage.setItem('settings', JSON.stringify({
            nbTries: state.nbTries,
            nbScores: state.nbScores,
            nbChars: state.nbChars,
        }));
    },  
    setNbChars: (state, action) => {
        state.nbChars = action.payload;
        localStorage.setItem('settings', JSON.stringify({
            nbTries: state.nbTries,
            nbScores: state.nbScores,
            nbChars: state.nbChars,
        }));
    },  
  },
});

export const {
    setNbTries,setNbScores,setNbChars
} = settingsSlice.actions;

export default settingsSlice.reducer;
