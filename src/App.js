import React, { Component, createContext, useEffect, useState } from 'react'
import NetflixCard from './NetflixCard'
import axios from 'axios'
import Home from './components/Home'
import Nav from './components/Nav'
import Contact from './components/Contact'
import About from './components/About'
import { Route,Routes } from 'react-router-dom'
// import CompA from './components/CompA'

            // =====================================================================
                                      //!Context
            // =====================================================================
// React context Api allow you to access data at any level without passing it to every level  
// e.g parent Component to direct component c without passing props to component a and b
//? Steps:
// createContext()
// provider (jo data provide kry ga)jahan se data bhejna ha
// consumer (jo data use kry ga)jdr data receive krna ha
// let Fname=createContext()
// let Lname=createContext()
// function App() {
//   return (
//     <React.Fragment>

//     <Fname.Provider value={"usman"}>
//     {/*Component should be inside this provider*/}
//     {/*Ab jdr receive krna ha uder ja k isay import kr lo and just use consumer..and remember consumer only take funciton */}
//     <Lname.Provider value={"Ali"}>
//     <CompA></CompA>
//     </Lname.Provider>
    
//     </Fname.Provider>
   
//     </React.Fragment>

//   )
// }

            // =====================================================================
                                      //!useContext
            // =====================================================================
// let Fname=createContext()
// let Lname=createContext()
// function App() {
//   return (
//     <React.Fragment>

//     <Fname.Provider value={"usman"}>
//     <Lname.Provider value={"Ali"}>
//     {/*Now we just have to write let fname=useContext(Fname) and we get our value in our fname */}
//     <CompA></CompA>
//     </Lname.Provider>
//     </Fname.Provider>
   
//     </React.Fragment>

//   )
// }



            // =====================================================================
                                      //!UseEffect
            // =====================================================================
//!It runs everytime whenever our page rerenders...
//it will run on first load...when we change state our page again renders to it will again runs
// const App=()=>{
// const [count,setCount]=useState(0)
// const [count2,setCount2]=useState(0)
// //? useEffect(()=>{
// //   console.log("clicked")
// // })

// //What we need now...is our useEffect only runs for the very first time our page renders..so to do so we will pass an empty array as second parameter
// //? useEffect(()=>{
// //   console.log("clicked")
// // },[])


// //Next we want to run this only when our page loades first time and when click on particular button ..so inside array what we pass ...whenever that value changes our useEffect will be called
// useEffect(()=>{
//   console.log("clicked")
//   //count is linked to button..so whenever we click on button that is linked with count this useeffect will be called
// },[count])
// function increment(){
//   setCount(prev=>{
//    return  prev+1
//   })
// }
// return(
//   <React.Fragment>
//   <button onClick={increment}>
//   click {count}
//   </button>
//   <button onClick={()=>{setCount2(count2+1)}}>
//   click {count2} but useEffect will not be called
//   </button>
//   </React.Fragment>
// )

// }

            // =====================================================================
                                      //!UseEffect(Kyle)
            // =====================================================================
// function App(){
//   const [resourceType,setResourceType]=useState("posts")
//   const [items,setItems]=useState([])
//   //? useEffect(()=>{
//   //   console.log("Value changed")
//   //   //!Note:if we click on post or anybutton this will run and if we again click on same button this will not run beccause the value doesnot change
//   // },[resourceType])


//   //we fetch an api and fetch data from it on the basis of resourceType...and we change our resource type on button click
//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then(response => response.json())
//       .then(json => setItems(json))
//   })
//   return(
//     <React.Fragment>
//     <button onClick={()=>{setResourceType("posts")}}>posts</button>
//     <button onClick={()=>{setResourceType("comments")}}>comments</button>
//     <button onClick={()=>{setResourceType("users")}}>users</button>
//     <h1>{resourceType}</h1>
// {items.map(item=>{
//   console.log(item)//this will return object..and we can't render object in jsx so we need to convert it into string
//   // return <h2>{JSON.stringify(item)}</h2>
// })}
//     </React.Fragment>
//   )
// }

//?
// function App(){
//   const [windowWidth,setWindowWidth]=useState(window.innerWidth)
//   //todo "mounting" refers to the initial rendering of a component in the DOM
//   //todo "Unmounting" refers to the process of removing a component from the DOM. 
//   //todo remounted" means that the component was unmounted at some point (removed from the DOM), and then later mounted again.
//   //so this useEffect calls when we mount(initially renders page) due to [] and when we remount..means change value
//   function handleResize(){
//     setWindowWidth(window.innerWidth)
//   }
//   useEffect(()=>{
//     window.addEventListener("resize",handleResize)

//     //we need to remove this eventlistener when we unmount things..so that it doesnot take space and slow our program so to do so we have inbuilt return of useEffect whcih returns a function and runs everytime you unmount
//     return ()=>{
//       window.removeEventListener("resize",handleResize)//better example in bellow code

//     }
//   },[])
//   return(
//     <div>
//   {windowWidth}{/*this will not update automatically when we resize our page untill we use useEffect*/}
//     </div>
//   )
// }
// function App(){
//      const [resourceType,setResourceType]=useState("posts")
//      useEffect(()=>{
//          console.log("Value changed")
//          return ()=>{
//           console.log("As you have changed your value so we unmount previous one and clean it")
//          }
//        },[resourceType])
//        return(
//         <React.Fragment>
//             <button onClick={()=>{setResourceType("posts")}}>posts</button>
//             <button onClick={()=>{setResourceType("comments")}}>comments</button>
//             <button onClick={()=>{setResourceType("users")}}>users</button>
//             <h1>{resourceType}</h1>
   
      
//             </React.Fragment>
//        )
      
// }


            // =====================================================================
                                      //!Practice Session
            // =====================================================================
// const title=document.querySelector("title")
// function App(){
//   const [count,setCount]=useState(0)
//   useEffect(()=>{
// title.innerHTML=`You clicked ${count} times`
//   },[count])
//   return(
//     <button onClick={()=>{setCount(prev=>prev+1)}}>click{count}</button>
//   )
// }





            // =====================================================================
                                      //!Pokemon Exercise
            // =====================================================================

//install axios from npm store
// function App(){
// const [num, setNum]=useState(1)
// const [name,setName]=useState()
// const [flavor,setFlavor]=useState()
// useEffect(()=>{
//   console.log("hehe")
//   async function getData(){
//     const res=await axios.get(`https://pokeapi.co/api/v2/berry/${num}`)
//     // console.log(res.data.name)
//     // console.log(res.data.flavors.length)
//     setName(res.data.name)
//     setFlavor(res.data.flavors.length)
//   }
//   getData()

// })
// return(
// <React.Fragment>
// <h1>You have choosen {num} value</h1>
// <h1>its {name} at no {num} </h1>
// <h1>it has {flavor} flavors</h1>

// <select value={num} onChange={(e)=>{setNum(e.target.value)}}>
// <option value="1" selected>1</option>
// <option value="25">25</option>
// <option value="3">3</option>
// <option value="4">4</option>
// <option value="5">5</option>
// </select>
// </React.Fragment>
// )

// }


            // =====================================================================
                                      //!React router
            // =====================================================================


//without refreshing changing routs called client side rendering
// we need to download react-dom-router from npm


//todo inside react-dom-router we have three things
//? BrwoserRouter(all the components who are rendering should come inside this so we basicly wrap our app in index js inside this because all of rendering components are in app)
// Routes(to show only one page at a time)
// Route (here we give url path and which component to render on that component)
//when we need to navigate by clicking we need to use Link and inside link we need to pass to="/about" attribute


//!Imports:
// we import 
// Home
// About
// Contact
// Nav
//Rout and Routes form react-dom-router
//!Note:For some reasons it's giving error here but it's perfectly running in sheyriansreact folder go and check there
//!From now on we will be working on sheyrians folder
// function App(){
//   return(
//  <React.Fragment>
//  <Nav></Nav>
//  <Routes>
//  <Route path='/' element={<Home></Home>}></Route>
//  <Route path='/about' element={<About></About>}></Route>
//  <Route path='/contact' element={<Contact></Contact>}></Route>
//  </Routes>
//  </React.Fragment>
//   )
// }

export default App
// export {Fname,Lname}