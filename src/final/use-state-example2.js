
import React, { useState }  from "react";

     const Index1 =()=>{

        const[firstname,setfirstname]= useState("")
        const[email,setemail]= useState("")
        const[password,setpassword]=useState("")

        // const changefirstname =(e)=>{
        //     setfirstname(e.target.value)


        // }
        // const changeemail =(e)=>{
        //     setemail(e.target.value)
        // }
        // const changepassword =(e)=>{
        //     setpassword(e.target.value)
        // }

        const handleinputchange=(e,name)=>{
            console.log(e.target.value,name)
            if (name==="firstname"){
                setfirstname(e.target.value)
            } else if(name=== "email"){
                setemail(e.target.value)
            }else if(name==="password")
            setpassword(e.target.value)
        }

        const handlesubmit =(e)=>{
            e.preventDefault();

        const userobj = {
            firstname:firstname,
            email:email,
            password:password,
        };
        console.log(userobj)
    
    };
        return(

            <div>
                <form onSubmit={handlesubmit}>
                    <div>
                    <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={firstname}
                    onChange={(e)=>handleinputchange(e,"firstname")}
                    placeholder="enter firstname"

                    />
                    </div>
                    <div>
                    <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e=>handleinputchange(e,"email"))}
                    placeholder="enter email"
                    />
                    </div>
                    <div>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e)=>handleinputchange(e,"password")}
                    placeholder="enter password"
                    />
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>   
        );
};
  export default Index1;
