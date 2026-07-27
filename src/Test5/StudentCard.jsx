import React from "react";

const StudentCard = (Props) => {

    return (

        <div>

            <h3>{Props.name}</h3>
            <h3>{Props.College}</h3>
            <h3>{Props.Course}</h3>
            

        </div>
    )

}

export default StudentCard;