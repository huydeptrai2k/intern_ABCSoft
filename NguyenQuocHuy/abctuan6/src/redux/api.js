import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const GetRequestHooks = ()=> {
  const [totalReactPackages, setTotalReactPackages] = useState();
  var todos1 =[]
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response)=> {
        for(let i = 0;i<response.data.length;i++){
            todos1.push(response.data[i].title);
           // console.log(todos1)
           }
           setTotalReactPackages(todos1)
      })
      
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  console.log(totalReactPackages,'day la API day')
  return [totalReactPackages]
 
}

// //import React, { Component } from 'react';
// import axios from "axios";
// import { useState } from "react"
// import TitleSection from "../components/TitleSection/TitleSection"
// import React, { Component } from 'react'

// export default class Api extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             totalReactPackages: []
//         };
//     }

//     async componentDidMount() {
//         var todos1 =[]
//       let todo 
//         // GET request using axios with async/await
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//         for(let i = 0;i<response.data.length;i++){
//             todo = response.data[i]
//             todos1.push(todo.title);
//            // console.log(todos1)
//            }
//         this.setState({ totalReactPackages: todos1 })
//     }
     
    
//   render() {
//     const { totalReactPackages } = this.state;
//     return (
       
//       <div>reducer
//           Total react packages: {totalReactPackages}
//       </div>
      

//     )
//   }
// }
