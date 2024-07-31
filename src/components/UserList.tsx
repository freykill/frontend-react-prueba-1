import { useEffect, useState } from "react";
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }
  
  interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
  }
  
  type Data = User | Comment;
  

export const UserList = ({endpoint}:{endpoint:string}):JSX.Element => {

    const [users, setusers] = useState<Data[]>([])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setusers(data)
            console.log(data)

        } catch (err) {
            console.error(err);
        }
    }

    useEffect (() =>{
        fetchData()
    },[endpoint])

  return (
    <>  
    {endpoint ==='users'? users.map(user => <li key={user.id}> {user.name} </li> ) :
    users.map(user => <li key={user.id}> {user.name} </li> )

}
    </>

  )
}
