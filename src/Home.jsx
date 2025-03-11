import React from "react"


class Home extends React.Component {
    
     

    render() {
        

        let temp =  (localStorage.getItem("currLogin"))
        let parsedUser = JSON.parse(temp)
        var tempName=""


        if( ( (localStorage.getItem("isLogin"))==="true")){
            tempName="Welcome "+parsedUser.userName
             
        }
        else{
            tempName="Home"
        }
         
        return (
            
           
            <>

                <h2>   {tempName}</h2>
                

            </>
        )
    }
}

export default Home;
