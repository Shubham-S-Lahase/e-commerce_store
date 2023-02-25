import React from "react";
import { Link } from "react-router-dom";

const Fangear = () => {
    return(
        <>
            <div style={{display:"flex", flexFlow:"column", justifyContent:"center", backgroundColor:"azure", alignItems:"center"}}>
                <h1>We will be adding fan gears soon !!</h1>
                <h2>Please click <Link to={"/"}>here..</Link> to visit game page</h2>
            </div>
        </>
    );
};

export default Fangear;