import React from "react";
function About(){
    return(
        <div className="mb-10" id="about">
     <p className="text-white m-10 mx-40">
     As a passionate full-stack web developer with expertise in Node.js and a strong proficiency in Python, I thrive in creating dynamic and robust web applications. My journey in web development has equipped me with a deep understanding of both front-end and back-end technologies, allowing me to design and implement seamless user experiences.
     </p>
     <div className="flex flex-row text-white  mx-40 justify-between ">
        <div>
            <h3 className="font-bold text-4xl ">Python</h3>
             <div className="mt-2">
                <p>60+ Hours Exprerience</p>
                <hr></hr>
             </div>
        </div>
        <div>
            <h3 className="font-bold text-4xl ">Frontend</h3>
            <div className="mt-2">
                <p>4 Years Experience</p>
                <hr></hr>
             </div>
            </div>
        <div>
            <h3 className="font-bold text-4xl ">Backend</h3>
            <div className="mt-2">
                <p>120+ Hours Exprerience</p>
                <hr></hr>
             </div>
            </div>

     </div>
    </div>
    )
}
export default About;