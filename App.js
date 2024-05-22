import React, { useState } from 'react'
import Header from './header'
import {Route, Routes} from 'react-router-dom';


import { BrowserRouter as Router } from 'react-router-dom'
import { Homecontainer,  Mealslist,  Track } from './components'
import Trackpage from './components/Trackpage';
import { useStatevalue } from './context/Stateprovider';
import { mealslist } from './components/mealslist';
import { Recipe } from './components';
import Totalcals from './components/Totalcals';
const App = () => {
  const [meals, setmeals] = useState([]);
  const [mealname, setmealname] = useState("");
  const [calories, setcalories] = useState(0);
  const [openmodal, setopenmodal] = useState(false);


  const mealhandler = () => {

    const oldmeals = [...meals];
    const meal = {
      mealname,
      calories,
      id: Math.floor(Math.random() * 1000),
    };
    const newmeals = oldmeals.concat(meal);
    if (calories <=0 || mealname === '') {
      alert('Please Enter both the fields')
    }else {
      setmeals(newmeals); 
    }
    setmealname("")
    setcalories(0);
  };

  const deletemealhandler = (id) => {
    const oldmeals = [...meals];
    const newmeals  = oldmeals.filter((meal) => meal.id !== id);
    setmeals(newmeals);
  }

  const total = meals.map((meal) => meal.calories).reduce((acc, value) => acc + +value,0);
  console.log(total);

  return (
    <div>
      <Header/>
      <main className='mt-24 p-8 w-full flex absolute'>
        <Routes>
          <Route path='/recipes' element={<Recipe/>}/>
          <Route path='/*' element={<Homecontainer />}/>
          <Route path='/trackcalories' element={<Trackpage mealhandler={mealhandler} mealName={mealname} caloriesnum={calories} setmealname={setmealname} setcalories={setcalories} />}/>
    
          <Route/>
        </Routes>
        <div>
        <Mealslist meals={meals} deletemealhandler={deletemealhandler} />
        <Totalcals total={total}/>
    
        </div>

      </main>
      
        
      
    </div>
  )
}

export default App
