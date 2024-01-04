import React from 'react'

const Bcomponent = (props) => {
  return (
    <main>
        <h1>B-component</h1>
        {/* <pre>{JSON.stringify(props)}</pre> */}
        <h4>Employee ID :{props.prop1}</h4>
        <h4>Employee Name :{props.prop2}</h4>
        <h4>Employee Salary :{props.prop3}</h4>
        <h4>Employee Location :{props.prop4}</h4>
        <hr />
    </main>
  )
}

export default Bcomponent