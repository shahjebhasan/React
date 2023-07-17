import StudentReview from './StudentReview';
import Student from './student';
import React from "react";

class MainBody extends React.Component
{
  render(){
  let whatWeWillLearn = "React Js";
  const numberOfLectures = 3;

  return(
    <div>
    <p>In this course, we will learn {whatWeWillLearn} by building Taskopedia <br/>
    Total Lecture - {numberOfLectures}
    </p>
    <ul>
      <li>Basic Foundation</li>
      <li>Functional and Class Components</li>
    </ul>

    {/* <div>
      Enter Task : <input maxLength={5} readOnly={false} placeholder="Shah"></input>
    </div> */}
    <div className='row'>
        Students Enrolled
      </div>
    <Student experience={2} name="Shahjeb Ansari">
      <StudentReview/>
      </Student>
    <Student experience={3} name="XYZ">
    <StudentReview/></Student>
    <Student experience={2} name="ABC"/>
  </div>
  )
  }
}

export default MainBody;