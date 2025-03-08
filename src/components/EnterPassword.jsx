import { RiLockPasswordFill } from "react-icons/ri";

function EnterPassword() {
  return (
    <form className="enter-password">
      <input type="text" placeholder="Type Your Password" className="white-placeholder"/>
      <RiLockPasswordFill style={{height: '20px', width: '100%', margin: '10px -160px'}}/>  
    </form>
  );
}


export default EnterPassword