import {useState } from "react";
import { UserList } from "./components/UserList";




export const UsersApp = () => {

const [endPoint, setendPoint] = useState('users')
    

    // useEffect(() => {
    //     fetchUser()
    // },[])

    const handlerFech = () =>{
        setendPoint('comments')
    }

  return (
    <>
        <h1>lista de usuarios</h1>
        <UserList endpoint={endPoint}/>
        <button onClick={handlerFech}>llamar usuarios</button>
    </>
  )
}
