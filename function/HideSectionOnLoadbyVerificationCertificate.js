//HideSectionOnLoadbyVerificationCertificate

$("#4391").parent().parent().parent().parent().hide(); // Json section
$("#4389").parent().parent().parent().hide(); // Update section
var bt = document.getElementById('SubmitButton');
bt.disabled = true;


$('input:radio[name=4379]').change(function () 
{
var check = $('input:radio[name=4379]:checked').val();//action
var bt = document.getElementById('SubmitButton');
bt.disabled = true;
if(check==9)//forward
{
$("#4391").parent().parent().parent().parent().hide(); // Json section
$("#4389").parent().parent().parent().show(); // Update section

bt.disabled = true;
}

else if(check==10)//reject
{
$("#4391").parent().parent().parent().parent().hide(); // Json section
$("#4389").parent().parent().parent().hide(); // Update section

bt.disabled = false;
}

}
);

$(function () 
{

$("#4391").parent().parent().parent().parent().hide(); // Json section
$("#4389").parent().parent().parent().hide(); // Update section
var bt = document.getElementById('SubmitButton');
bt.disabled = true;

});

return true;