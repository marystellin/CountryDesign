import React from 'react'
import { Table } from 'reactstrap';
const Link=({List})=>{

    return(
        <div>
            <Table dark>
            <thead>
            <tr>
                <th>Name</th>
                <th>Capital</th>
                <th>Region</th>
                <th>population</th>
                <th>Flag</th>
            </tr>
            </thead>
            <tbody>
            {

            List.map((i)=>(
                    
            <tr key={i.id}>
                <td>{i.name}</td>
                <td>{i.capital}</td>
                <td>{i.region}</td>
                <td>{i.population}</td>
                <td><img width="60px" height="50px" src={i.flag} alt="img"></img></td>
            </tr>
                  ))}
             </tbody>
             </Table>
            </div>)
    
        }

export default Link;













































// import React from 'react';
// import axios from 'axios';
// import App from '/App';

// const Link=()=>{
//     const[list,setlist]=React.useState([])
//     useEffect(()=>{
//         axios.get("http://localhost:8080/post").then(res=>{
//             setlist(res.data)
//         });
//       },[])
//       const getPost = name => {
//         axios.post("http://localhost:8070/post", { title: name })
//             .then(success => {
//                 setlist([...list, success.data])
//             })
//     }
//     return(
//         <div>
//         <App getPost={getPost} setlist={setlist}/>
//         </div>)
//     }

// export default Link;