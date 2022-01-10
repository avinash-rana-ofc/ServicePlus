//onLoadHideJsonAllAction
$(function() 
{
	$("#7155").parent().parent().parent().parent().hide();//hide JSON section
	$("#7129").parent().parent().hide();//price
	$("#7128").attr('disabled',true);//item disable
	document.getElementById('7130').readOnly = true;//Quantity read only
	$("#7311_1").parent().parent().parent().parent().parent().parent().hide();//Document Sample Item Hide
	$("#7079_1").parent().parent().parent().parent().parent().parent().hide();//Document Direct Supply Hide
	$("#7307_1").parent().parent().parent().parent().parent().parent().hide();//Document Rejection Item Hide
	var stockUpdTyp = $("input[name='7381']:checked").val(); 
	var officeTyp = $("input[name='7271']:checked").val(); 

	if(stockUpdTyp == 1 && officeTyp == 1)//State & Updation Direct Supply
	{
		$( "#7079_1" ).prop( "checked", true );//Document Direct Supply
		$("#7160").parent().parent().show();//update button
		$("#7161").parent().parent().hide();//reject button
		$("#7273").parent().parent().hide();//update sample button
		$('#7253').attr("disabled", true);//State
		$("#7253").parent().parent().parent().parent().show();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 1 && officeTyp == 2)//Zonal & Updation Direct Supply
	{
		$( "#7079_1" ).prop( "checked", true );//Document Direct Supply
		$("#7166").parent().parent().show();//update button
		$("#7164").parent().parent().hide();//reject button
		$("#7274").parent().parent().hide();//update sample button
		$('#7254').attr("disabled", true);//Zonal 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().show();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 1 && officeTyp == 3)//District & Updation Direct Supply
	{
		$( "#7079_1" ).prop( "checked", true );//Document Direct Supply
		$("#7167").parent().parent().hide();//reject button
		$("#7275").parent().parent().hide();//update sample button
		$("#7163").parent().parent().show();//update button
		$('#7255').attr("disabled", true);//District 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().show();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 1 && officeTyp == 4)//Subdivision & Updation Direct Supply
	{
		$( "#7079_1" ).prop( "checked", true );//Document Direct Supply
		$("#7257").parent().parent().show();//update button
		$("#7258").parent().parent().hide();//reject button
		$("#7276").parent().parent().hide();//update sample button
		//$("#7160").parent().parent().hide();//update button
		$('#7256').attr("disabled", true);//Subdivision 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().show();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 1 && officeTyp == 5)//Block & Updation Direct Supply
	{
		$( "#7079_1" ).prop( "checked", true );//Document Direct Supply
		$("#7260").parent().parent().show();//update button
		$("#7261").parent().parent().hide();//reject button
		$("#7277").parent().parent().hide();//update sample button
		$('#7259').attr("disabled", true);//Block 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().show();//Block
	}
	else if(stockUpdTyp == 2 && officeTyp == 1)//State & Updation Reject Item
	{
		$( "#7307_1" ).prop( "checked", true );//Document Rejection Item
		$("#7160").parent().parent().hide();//update button
		$("#7161").parent().parent().show();//reject button
		$("#7273").parent().parent().hide();//update sample button
		$('#7253').attr("disabled", true);//State
		$("#7253").parent().parent().parent().parent().show();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 2 && officeTyp == 2)//Zonal & Updation Reject Item
	{
		$( "#7307_1" ).prop( "checked", true );//Document Rejection Item
		$("#7167").parent().parent().show();//reject button
		$("#7275").parent().parent().hide();//update sample button
		$("#7163").parent().parent().hide();//update button
		$('#7255').attr("disabled", true);//Zonal 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().show();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 2 && officeTyp == 3)//District & Updation Reject Item
	{
		$( "#7307_1" ).prop( "checked", true );//Document Rejection Item
		$("#7166").parent().parent().hide();//update button
		$("#7164").parent().parent().show();//reject button
		$("#7274").parent().parent().hide();//update sample button
		$('#7254').attr("disabled", true);//District 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().show();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 2 && officeTyp == 4)//Subdivision & Updation Reject Item
	{
		$( "#7307_1" ).prop( "checked", true );//Document Rejection Item
		$("#7257").parent().parent().hide();//update button
		$("#7258").parent().parent().show();//reject button
		$("#7276").parent().parent().hide();//update sample button
		//$("#7160").parent().parent().hide();//update button
		$('#7256').attr("disabled", true);//Subdivision 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().show();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 2 && officeTyp == 5)//Block & Updation Reject Item
	{
		$( "#7307_1" ).prop( "checked", true );//Document Rejection Item
		$("#7260").parent().parent().hide();//update button
		$("#7261").parent().parent().show();//reject button
		$("#7277").parent().parent().hide();//update sample button
		$('#7259').attr("disabled", true);//Block 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().show();//Block
	}
	else if(stockUpdTyp == 3 && officeTyp == 1)//State & Updation Sample Item
	{
		$( "#7311_1" ).prop( "checked", true );//Document Sample Item
		$("#7160").parent().parent().hide();//update button
		$("#7161").parent().parent().hide();//reject button
		$("#7273").parent().parent().show();//update sample button
		$('#7253').attr("disabled", true);//State
		$("#7253").parent().parent().parent().parent().show();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 3 && officeTyp == 2)//Zonal & Updation Sample Item
	{
		$( "#7311_1" ).prop( "checked", true );//Document Sample Item
		$("#7167").parent().parent().hide();//reject button
		$("#7275").parent().parent().show();//update sample button
		$("#7163").parent().parent().hide();//update button
		$('#7255').attr("disabled", true);//Zonal 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().show();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 3 && officeTyp == 3)//District & Updation Sample Item
	{
		$( "#7311_1" ).prop( "checked", true );//Document Sample Item
		$("#7166").parent().parent().hide();//update button
		$("#7164").parent().parent().hide();//reject button
		$("#7274").parent().parent().show();//update sample button
		$('#7254').attr("disabled", true);//District 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().show();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 3 && officeTyp == 4)//Subdivision & Updation Sample Item
	{
		$( "#7311_1" ).prop( "checked", true );//Document Sample Item
		$("#7257").parent().parent().hide();//update button
		$("#7258").parent().parent().hide();//reject button
		$("#7276").parent().parent().show();//update sample button
		//$("#7160").parent().parent().hide();//update button
		$('#7256').attr("disabled", true);//Subdivision 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().show();//Subdivision
		$("#7259").parent().parent().parent().parent().hide();//Block
	}
	else if(stockUpdTyp == 3 && officeTyp == 5)//Block & Updation Sample Item
	{
		$( "#7311_1" ).prop( "checked", true );//Document Sample Item
		$("#7260").parent().parent().hide();//update button
		$("#7261").parent().parent().hide();//reject button
		$("#7277").parent().parent().show();//update sample button
		$('#7259').attr("disabled", true);//Block 
		$("#7253").parent().parent().parent().parent().hide();//State
		$("#7254").parent().parent().parent().parent().hide();//Zonal
		$("#7255").parent().parent().parent().parent().hide();//District
		$("#7256").parent().parent().parent().parent().hide();//Subdivision
		$("#7259").parent().parent().parent().parent().show();//Block
	}
	
	

//for on change function
	$('input[type=radio][name=7078]').change(function() {
		$("#7155").parent().parent().parent().parent().hide();//hide JSON section
		$("#7311_1").parent().parent().parent().parent().parent().parent().hide();//Document Sample Item Hide
		$("#7079_1").parent().parent().parent().parent().parent().parent().hide();//Document Direct Supply Hide
		$("#7307_1").parent().parent().parent().parent().parent().parent().hide();//Document Rejection Item Hide
		//reject
		if (this.value == 10) {
			$("#7253").parent().parent().parent().parent().hide();//state
			$("#7254").parent().parent().parent().parent().hide();//zonal
			$("#7255").parent().parent().parent().parent().hide();//district
			$("#7256").parent().parent().parent().parent().hide();//subdivision
			$("#7259").parent().parent().parent().parent().hide();//block
			$("#7128").parent().parent().parent().parent().hide();//item section
		}//approve
		else if (this.value == 11) {
			if(stockUpdTyp == 1 && officeTyp == 1)//State & Updation Direct Supply
			{
				alert("in State");
				$("#7160").parent().parent().show();//update button
				$("#7161").parent().parent().hide();//reject button
				$("#7273").parent().parent().hide();//update sample button
				$('#7253').attr("disabled", true);//State
				$("#7253").parent().parent().parent().parent().show();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 1 && officeTyp == 2)//Zonal & Updation Direct Supply
			{
				alert("in Zonal");
				$("#7167").parent().parent().hide();//reject button
				$("#7275").parent().parent().hide();//update sample button
				$("#7163").parent().parent().show();//update button
				$('#7255').attr("disabled", true);//Zonal 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().show();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 1 && officeTyp == 3)//District & Updation Direct Supply
			{
				alert("in District");
				$("#7166").parent().parent().show();//update button
				$("#7164").parent().parent().hide();//reject button
				$("#7274").parent().parent().hide();//update sample button
				$('#7254').attr("disabled", true);//District 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().show();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 1 && officeTyp == 4)//Subdivision & Updation Direct Supply
			{
				alert("in Sub Division");
				$("#7257").parent().parent().show();//update button
				$("#7258").parent().parent().hide();//reject button
				$("#7276").parent().parent().hide();//update sample button
				//$("#7160").parent().parent().hide();//update button
				$('#7256').attr("disabled", true);//Subdivision 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().show();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 1 && officeTyp == 5)//Block & Updation Direct Supply
			{
				alert("in Block");
				$("#7260").parent().parent().show();//update button
				$("#7261").parent().parent().hide();//reject button
				$("#7277").parent().parent().hide();//update sample button
				$('#7259').attr("disabled", true);//Block 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().show();//Block
			}
			else if(stockUpdTyp == 2 && officeTyp == 1)//State & Updation Reject Item
			{
				$("#7160").parent().parent().hide();//update button
				$("#7161").parent().parent().show();//reject button
				$("#7273").parent().parent().hide();//update sample button
				$('#7253').attr("disabled", true);//State
				$("#7253").parent().parent().parent().parent().show();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 2 && officeTyp == 2)//Zonal & Updation Reject Item
			{
				$("#7167").parent().parent().show();//reject button
				$("#7275").parent().parent().hide();//update sample button
				$("#7163").parent().parent().hide();//update button
				$('#7255').attr("disabled", true);//Zonal 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().show();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 2 && officeTyp == 3)//District & Updation Reject Item
			{
				$("#7166").parent().parent().hide();//update button
				$("#7164").parent().parent().show();//reject button
				$("#7274").parent().parent().hide();//update sample button
				$('#7254').attr("disabled", true);//District 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().show();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 2 && officeTyp == 4)//Subdivision & Updation Reject Item
			{
				$("#7257").parent().parent().hide();//update button
				$("#7258").parent().parent().show();//reject button
				$("#7276").parent().parent().hide();//update sample button
				//$("#7160").parent().parent().hide();//update button
				$('#7256').attr("disabled", true);//Subdivision 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().show();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 2 && officeTyp == 5)//Block & Updation Reject Item
			{
				$("#7260").parent().parent().hide();//update button
				$("#7261").parent().parent().show();//reject button
				$("#7277").parent().parent().hide();//update sample button
				$('#7259').attr("disabled", true);//Block 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().show();//Block
			}
			else if(stockUpdTyp == 3 && officeTyp == 1)//State & Updation Sample Item
			{
				$("#7160").parent().parent().hide();//update button
				$("#7161").parent().parent().hide();//reject button
				$("#7273").parent().parent().show();//update sample button
				$('#7253').attr("disabled", true);//State
				$("#7253").parent().parent().parent().parent().show();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 3 && officeTyp == 2)//Zonal & Updation Sample Item
			{
				$("#7167").parent().parent().hide();//reject button
				$("#7275").parent().parent().show();//update sample button
				$("#7163").parent().parent().hide();//update button
				$('#7255').attr("disabled", true);//Zonal 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().show();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 3 && officeTyp == 3)//District & Updation Sample Item
			{
				$("#7166").parent().parent().hide();//update button
				$("#7164").parent().parent().hide();//reject button
				$("#7274").parent().parent().show();//update sample button
				$('#7254').attr("disabled", true);//District 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().show();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 3 && officeTyp == 4)//Subdivision & Updation Sample Item
			{
				$("#7257").parent().parent().hide();//update button
				$("#7258").parent().parent().hide();//reject button
				$("#7276").parent().parent().show();//update sample button
				//$("#7160").parent().parent().hide();//update button
				$('#7256').attr("disabled", true);//Subdivision 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().show();//Subdivision
				$("#7259").parent().parent().parent().parent().hide();//Block
			}
			else if(stockUpdTyp == 3 && officeTyp == 5)//Block & Updation Sample Item
			{
				$("#7260").parent().parent().hide();//update button
				$("#7261").parent().parent().hide();//reject button
				$("#7277").parent().parent().show();//update sample button
				$('#7259').attr("disabled", true);//Block 
				$("#7253").parent().parent().parent().parent().hide();//State
				$("#7254").parent().parent().parent().parent().hide();//Zonal
				$("#7255").parent().parent().parent().parent().hide();//District
				$("#7256").parent().parent().parent().parent().hide();//Subdivision
				$("#7259").parent().parent().parent().parent().show();//Block
			}
		}
	});

	
});
return true;