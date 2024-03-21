import React from "react";

class Employee extends React.Component{
    render(){
        return(
            <>
            <h2>employee compnent</h2>
            <div className="card">
            <div className="card-body">
     
            <h3>Name:{this.props.name}</h3>
            <h3>Age:{this.props.age}</h3>
            <h3>Designation: {this.props.designation}</h3>
             </div>

     </div>


            </>
        )
    }
}
export default Employee;
