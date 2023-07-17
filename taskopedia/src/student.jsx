import {faker} from "@faker-js/faker";
import React from "react";

class Student extends React.Component
{
  render(){
  return(
    <div className='container p-4'>
      
      <div className='row border'>
        <div className='col-2'>
          <img 
          src={faker.image.avatar()}
          className='w-100'>
          </img>
        </div>
        <div className='col-8'>
          {this.props.name}
          <br/>
          Programming Experience {this.props.experience} years
        </div>
        <div class="col-2">
          {this.props.children}
        </div>
      </div>

    </div>
  )
};
}

export default Student;