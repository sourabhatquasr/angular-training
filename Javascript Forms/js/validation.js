function reg(){
    let fname=document.querySelector("#fname").value;
    let lname=document.querySelector("#lname").value;
    let email=document.querySelector("#email").value;
    let phone=document.querySelector("#phone").value;
    let pass=document.querySelector("#pwd").value;
    let cpass=document.querySelector("#cpwd").value;
    

    if(fname.length==0){
        document.getElementById("err").innerHTML="Please Enter Fname"
        document.getElementById("err").style.color="red"
        
    }
    else if(lname.length==0){
        document.getElementById("err").innerHTML="Please Enter Lname"
        document.getElementById("err").style.color="red"
    }
    else if(email.length==0){
        document.getElementById("err").innerHTML="Please Enter Email"
        document.getElementById("err").style.color="red"
    }
    else if(phone.length==8){
        document.getElementById("err").innerHTML="Please Enter phone"
        document.getElementById("err").style.color="red"
    }
    else if(pass.length==0){
        document.getElementById("err").innerHTML="Please Enter Password"
        document.getElementById("err").style.color="red"
    }
    else if(cpass.length==0){
        document.getElementById("err").innerHTML="Please Enter C Password"
        document.getElementById("err").style.color="red"
    }
    else if(pass!=cpass){
        document.getElementById("err").innerHTML="Please Check Passwords"
        document.getElementById("err").style.color="red"
    }
    else {
        //document.getElementById("err").innerHTML="Register Successfully"
        //document.getElementById("err").style.color="green"
        
        const data=new FormData();
        data.append("fname",fname)
        data.append("lname",lname)
        data.append("email",email)
        data.append("ph",phone)
        data.append("pwd",pass)

        let x=new XMLHttpRequest();
        x.open("POST","http://ilandertech.com/api/index.php/Welcome/AddStuRegister")
        x.send(data)
        //console.log(x)
        x.onreadystatechange=function(){
            if(x.readyState==4 && x.status==200){
                console.log(x.response)
                var result=JSON.parse(x.response)
                console.log(result)
                
                if(result.status==1){
                    document.getElementById("err").style.color="green";
                    document.getElementById("err").style.fontWeight="bold";
                    document.getElementById("err").innerHTML=result.message;
                    
                }
                else{
                    document.getElementById("err").style.color="red";
                    document.getElementById("err").style.fontWeight="bold";  
                    document.getElementById("err").innerHTML=result.message;   
                }
            }
        }
    }

}



function log(){
   
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pwd").value;
    

    
    if(email.length==0){
        document.getElementById("err").innerHTML="Please Enter Email"
        document.getElementById("err").style.color="red"
    }
    
    else if(pass.length==0){
        document.getElementById("err").innerHTML="Please Enter Password"
        document.getElementById("err").style.color="red"
    }
    
    else {
        //document.getElementById("err").innerHTML="Register Successfully"
        //document.getElementById("err").style.color="green"
        
        const data=new FormData();

        data.append("userEmail",email)
        data.append("userPassword",pass)

        let x=new XMLHttpRequest();
        x.open("POST","http://ilandertech.com/api/index.php/Welcome/StuLogin")
        x.send(data)
        //console.log(x)
        x.onreadystatechange=function(){
            if(x.readyState==4 && x.status==200){
                console.log(x.response)
                var result=JSON.parse(x.response)
                console.log(result)
                document.getElementById("err").innerHTML=result.message;
                if(result.status==1){
                    document.getElementById("err").style.color="green";
                    document.getElementById("err").style.fontWeight="bold";  
                    window.location.assign("dashboard/dashboard.html")
                    localStorage.setItem("details",JSON.stringify(result.data[0]))
                    localStorage.setItem("email",email)
                }
                else{
                    document.getElementById("err").style.color="red";
                    document.getElementById("err").style.fontWeight="bold";     
                }
            }
        }
    }

}