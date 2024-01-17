import {useLoaderData} from 'react-router-dom';
function Github(){
    const data=useLoaderData();
    return(
        <div>
            <img src={data.avatar_url} style={{height:"200px",width:"200px",border:"2px solid black",margin:"10px"}} alt="" />
        </div>
    )
}
export default Github;
export async function sayhello(){
    const promise=await fetch(`https://api.github.com/users/jainmayank12566`);
    return promise.json();
}