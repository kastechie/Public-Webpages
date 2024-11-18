// Use with demo.html -- (Renamed to ChiDemo.html, just FYI)
// Updated October 2023

// This function is called when the response has returned

window.addEventListener('load', function() {

    let postResult = function(list)
    {
        let sName = document.getElementById('sName').checked;
        let sTitle = document.getElementById('sTitle').checked;
        let sDept = document.getElementById('sDept').checked;
        let sSalary = document.getElementById('sSalary').checked;

        var nameList, result, i;
        if (list.length > 0) {
            // document.getElementById('result').innerHTML = 
			// 	list[0].name + "<br />" 
            //     + list[0].title + "<br />" 
            //     + list[0].department + "<br />" 
            //     + "$" + Number(list[0].salary).toLocaleString("en-US");
          
            nameList = "";
            result = "";

         if (sName) {
            result += `<b>Name:</b> ${list[0].name} <br>`;}

         if (sTitle) {
            result += `<b>Title:</b> ${list[0].title} <br>`;}

         if (sDept) {
            result += `<b>Department:</b> ${list[0].department} <br>`;}

         if (sSalary) {
            result += `<b>Salary:</b> $${Number(list[0].salary).toLocaleString("en-US")}`;
            }
            document.getElementById("result").innerHTML = result; 


            // this loop by index works, but it's more complicated!
            // for (i = 0; i < list.length; i += 1) {
            //     nameList = nameList + list[i].name + "<br>";
            // }

            // easier approach is to loop by value

            for (let person of list) {
                nameList = nameList + person.name + "<br>";
            }
            document.getElementById('names').innerHTML = nameList;

        } else {
          document.getElementById('result').innerHTML = "There is no matching result."
          document.getElementById('names').innerHTML = "There is no matching result."
        }

    }
    
    let submit = function()
    {
        var searchWord = document.getElementById("key-word").value;
        if (searchWord != "") {
            query = new ChiEmpQuery(searchWord);
            document.getElementById('sName').innerHTML = "waiting...";
            document.getElementById('sTitle').innerHTML = "";
            document.getElementById('sDept').innerHTML = "";
            document.getElementById('sSalary').innerHTML = "";
            query.retrieve(postResult);
        }
    }

    document.getElementById("start").addEventListener('click', submit);
});