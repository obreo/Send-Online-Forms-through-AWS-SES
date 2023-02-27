  function submitToAPI(e) {
    e.preventDefault();


    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var desc = document.getElementById("message").value;

      var data = {
        name : name,
        phone : phone,
        email : email,
        desc : desc
      };

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "API_URL");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
    var response = JSON.parse(xmlhttp.responseText);
    if (xmlhttp.status === 200 ) {
      console.log('successful');
      document.getElementById("contactForm").innerHTML = "<h1>We'll get back to you soon!</h1>";
      } else {
        console.log('failed');
    }
    }
    }

    document.getElementById('contactForm').reset();

    } 