/*
 * Library for querying information on Chicago employees
 *
 * Written by Craig Miller, April 2012
 * Updated January 2018, January 2019, September 2022, October 2023
 * requires jQuery
 *
 * This library queries a database of Chicago employees.  Given a
 * string, it provides all records that match the string in one of its
 * fields.
 *
 * Its usage requires an event handler function (callback function)
 * for receiving the array of matching records.
 *
 * The getList method issues the query. When the response returns from
 * the server, it calls the given function with one parameter:
 *    an array of objects, each with the following properties:
 *      name - employee name (last name, first name)
 *      title - title of the employee's position
 *      department - unit name of the employee
 *      salary - yearly salary
 */

// Example use:
//    var search_term = "brandon johnson"
//    query = new ChiEmpQuery(search_term);
//
//    query.retrieve(function(list) {
//         alert("Mayor's salary: " + list[0].salary);
//      });
//
// 

class ChiEmpQuery
{
    constructor(searchKey) {

        let url = 
            "https://data.cityofchicago.org/api/views/xzkq-xp2w/rows.json" +
            "?search=key_word&jsonp=?";
        this.query = url.replace("key_word", searchKey);
    }

    retrieve(callBack) {
    $.getJSON(this.query, function(response) {
        let results = [];
        for (let i = 0; i < response.data.length; i += 1) {
            let row = { 
                name: response.data[i][8],
                title: response.data[i][9],
                department: response.data[i][10],
                salary: response.data[i][14]
            }
            results.push(row);
        }
        callBack(results);
    })
}
}