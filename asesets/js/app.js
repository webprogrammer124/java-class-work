var attendance=[];
var input = document.querySelector("#timein")
function timein(){
    attendance.push(input.value)
    input.value = ""
    console.log(attendance)}

    var totalAttendance = document.querySelector("#totalAttendance")
    function checkAttendance(){
        totalAttendance.innerHTML="total attendance" +attendance.length

    }
