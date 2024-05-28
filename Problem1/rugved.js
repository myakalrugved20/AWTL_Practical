function validateForm()
{
    var f_name = document.getElementById("fname").value;
    var m_name = document.getElementById("mname").value;
    var l_name = document.getElementById("lname").value;

    var m = document.getElementById("male").checked;
    var f = document.getElementById("female").checked;
    var o = document.getElementById("other").checked;

    var c = document.getElementById("contact").value;
    var add = document.getElementById("address").value;

    var em = document.getElementById("email").value;


 
    var display = document.getElementById("displaytwo");
    
    var displaydata = document.getElementById("display");

    if(c.length>10){
        alert("Contact should contain 10 digits");
    }


    if(f_name,m_name,l_name,c,add,em == ""){
        alert("All fields must be filled");
    }

    else{

        displaydata.innerHTML= `<p>First Name: ${f_name}</p>
                            <p>First Name: ${m_name}</p>
                            <p>Last name: ${l_name}</p>
                            <p>Contact: ${c}</p>
                            <p>Address: ${add}</p>
                            <p>Email Id: ${em}</p>`;
    
        if(m){
            display.innerHTML = `<p>Gender:male</p>`;
        }
        else if(f){
            display.innerHTML = `<p>Gender:female</p>`;
        }
        if(o){
            display.innerHTML = `<p>Gender:other</p>`;
        }
    }

    
    
    
}



