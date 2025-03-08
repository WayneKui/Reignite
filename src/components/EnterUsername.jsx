import { CiUser } from "react-icons/ci";

function EnterUsername() {
  return (
    <form className="enter-username">
      <input type="text" placeholder="Type Your Username" className="white-placeholder"/>
      <CiUser style={{height: '20px', width: '100%', margin: '10px -160px'}}/>  
    </form>
  );
}

export default EnterUsername