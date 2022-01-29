function validate(){

    let doc1 = document.getElementById("userName").value;
    let doc2 = document.getElementById("userMail").value;
    let doc3 = document.getElementById("userNum").value;
    let doc4 = document.getElementById("userPass").value;
    let doc5 = document.getElementById("cUserPass").value;



    //username validation 
    if(doc1 == "" ){
        document.getElementById("spn1").innerHTML = "* User name can not be blanked!"
    }else if(doc1.length <= 3){
        document.getElementById("spn1").innerHTML = "* Username Should be greater than 4 char !";
    } else {
        document.getElementById("spn1").innerHTML = "";
     }



    


    //Mail validation
        let atIndex = doc2.indexOf("@");
        let dotIndex = doc2.lastIndexOf(".");        
                                                                        
        
       
        if(atIndex <= 1){
            document.getElementById("spn2").innerHTML = "* Invalid email entered!";
        }else if(dotIndex >= doc2.length -2 ){  
            document.getElementById("spn2").innerHTML = "* Invalid email entered !";
        }else if(dotIndex <= atIndex + 2 ){
            document.getElementById("spn2").innerHTML = "* Invalid email entered !";
        }else{
            document.getElementById("spn2").innerHTML = " ";
        }


        //number validation 


        if(doc3.length  == 0){
            document.getElementById("spn3").innerHTML = "* Mobile number can not be blanked !";
        }else if(isNaN(doc3)){
            document.getElementById("spn3").innerHTML = "* only digits can be entered !";
            
        }else if(doc3.length < 10){
            document.getElementById("spn3").innerHTML = "* Mobile number is less than 10 digits ";
        }else if(doc3.length > 10){
            document.getElementById("spn3").innerHTML = " * Mobile number can not be more than 10 digits !";
        }else if(doc3.charAt(0)!=7 && doc3.charAt(0)!=6 && doc3.charAt(0)!=9 && doc3.charAt(0)!=8){
            document.getElementById("spn3").innerHTML = "Number should only start with 9,6,or 7"
        }else{
            document.getElementById("spn3").innerHTML = "valid";
        }


        //Validation for 


        if(doc4 == ""){
            document.getElementById("spn4").innerHTML = "Password can not be empty!";

        }else if(doc4.length<= 5){
            document.getElementById("spn4").innerHTML = "Password length should be more than 4 char!";
        }else if(doc4.length >= 26){
            document.getElementById("spn4").innerHTML = "Password lentgth can not be more than 25 cahracter";
        }else{
            document.getElementById("spn4").innerHTML = "valid";
        }

        // confirm Password validation 
        
        if(doc4 !== doc5){
            document.getElementById("spn5").innerHTML = "Password doesn't match !";
        }else{
            document.getElementById("spn5").innerHTML = "Sucess";
        }







    return false;
};