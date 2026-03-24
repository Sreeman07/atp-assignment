/*1.Exam portal simulator:
-----------------------------
When a student submits an exam:

        Immediately show: “Exam submitted successfully”
        After 2 seconds → show: “Evaluating answers…”
        After 4 seconds → show: “Result: Pass”*/

function student(a){
    if(a=="submitted"){
        return "exam submitted successfully"
    }
    return "not submitted"
}
setTimeout(()=>{
    console.log("Evaluating answers…")
},2000)
setTimeout(()=>{
    console.log("Result: Pass")
},4000)
let a="submitted"
console.log(a)
console.log("otp sent successfully")
/*2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
    
let seconds=11;
let intervalid=setInterval(()=>{
    seconds--;
    console.log(` otp can resend after ${seconds} sec`)
    if(seconds===0){
        console.log("resend otp")
        clearInterval(intervalid)
    }
},1000)


