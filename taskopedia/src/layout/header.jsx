import logo from "../images/react.png";

function MainHeader()
{
  return(
    <div className="pt-3 pl-2" style={{backgroundColor:"black"}}>
      <img src={logo}></img>
      React Course - TaskOPedia
    </div>
  );
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function SubHeader()
{
  return(
    <p style={subHeaderStyle}>This will be an exciting Course</p>
  );
}
 function Header()
{
  return(
    <div>
      <MainHeader/>
      <SubHeader/>
    </div>
  );
}

export default Header;