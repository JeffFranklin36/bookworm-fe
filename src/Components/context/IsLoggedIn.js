export default function isLoggedIn(){
 console.log(localStorage.getItem('token') )
 if(localStorage.getItem('token') == null){
  return false
 }else{
  return true
 }
}