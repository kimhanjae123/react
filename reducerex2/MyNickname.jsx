export default function MyNickname({info,dispatch}){
 return(
    <>
      <label>{info.nickname}</label>&nbsp;&nbsp;&nbsp;
      <input type="text" name="NICKNAME" onChange={(e)=>dispatch({type:"NICKNAME",data:e.target.value})}/><br/>
    </>
 )   
}