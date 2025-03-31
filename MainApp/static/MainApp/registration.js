function validateForm() {
    var name = document.getElementById("name").value;
    var email1 = document.getElementById("email1").value;
    var email2 = document.getElementById("email2").value;
    var email3 = document.getElementById("email3").value;
    var email4 = document.getElementById("email4").value;
    var problem = document.getElementById("problem").value;

    
    if (!email2) {
        alert("At least 2 members are required!");
        return false;
    }

   
    let emails = [email1, email2, email3, email4].filter(email => email !== "");
    let uniqueEmails = new Set(emails);
    if (emails.length !== uniqueEmails.size) {
        alert("Duplicate emails found! Team Creation Failed");
        return false;
    }

  
    if (problem < 1 || problem > 25) {
        alert("Invalid Problem Number! Team Creation Failed");
        return false;
    }

    console.log(problem, typeof (problem));
    setRequestHeader();

    $.ajax({
        url: '/checkteam/',
        type: 'POST',
        data: {
            'name': name,
            'email1': email1,
            'email2': email2,
            'email3': email3 || null,
            'email4': email4 || null,
            'problem': problem,
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
            document.getElementById("form").submit();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            alert(errorThrown + "!! Team Creation Failed");
        }
    });

    return false;
}
