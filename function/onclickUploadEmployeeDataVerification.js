//onclickUploadEmployeeDataVerification

$(function()
{
var status = $('input:text[name=4709]').val(); //  status
$("#4391").parent().parent().parent().parent().hide(); // Json section
var bt = document.getElementById('SubmitButton');
bt.disabled = true;

if(status==1)
{
window.alert("Employee details uploaded successfully!!!");
$("#4391").parent().parent().parent().parent().hide(); // Json section
bt.disabled = false;
}
else
{
window.alert("Login Portal again and the Process the Application or contact to NIC");
$("#4391").parent().parent().parent().parent().hide(); // Json section
bt.disabled = true;
}
}
);
return true;