var inputNameEl = $('#inputName');
var inputPasswordEl= $('#inputPassword');
var formEL = $('form');
var formData={};




function clearFields(){
	inputNameEl.val('');
	inputPasswordEl.val('');


	}
function verification(){

}

Array.prototype.count = function(obj){
    var count = this.length;
    if(typeof(obj) !== "undefined"){
        var array = this.slice(0), count = 0; 
        for(i = 0; i < array.length; i++){
            if(array[i] == obj){
                count++;
            }
        }
    }
    return count;
}



$('#button').mouseover(function(e){
	e.preventDefault();
	var errorArray=[inputNameEl.val()==='', 
	inputPasswordEl.val()===''] 

	
	if(errorArray.count(true)>1){
		$('.btn').fadeIn(1000).css('background-color','#88C470');




	};

});


$('#button').mouseout(function(){
	$('.btn').css('background-color','black');
});


function resetValues(){
	$('#message1').html('');
	$('#message2').html('');
	$('.form-group').toggleClass('form-group');
}


formEL.on('submit',function(e){
	e.preventDefault();
	resetValues();
	if(inputNameEl.val()===''){
		$('#message1').html('Username cannot be left empty');
		$('#message1').css('color','red');
		$('#nameField').toggleClass('form-group has-error');
		}
			else if(inputNameEl.val().indexOf('@')===-1){
				$('#message1').html('Username should be an email');
				$('#message1').css('color','red');
				$('#emailField').toggleClass('form-group has-error');
				}

				else if(inputPasswordEl.val()===''){
					$('#message2').html('Password cannot be left empty');
					$('#message2').css('color','red');
					$('#emailField').toggleClass('form-group has-error');
					}
							else if ((inputNameEl.val()==='aaron@theironyard.com')&&(inputPasswordEl.val()==='password123')){
									window.location.replace("http://theironyard.com");
							
								}
								else if ((inputNameEl.val()==='admin@google.com')&&(inputPasswordEl.val()==='pandas')){
										window.location.replace("http://theironyard.com");
							
									}
									else if ((inputNameEl.val()==='admin@google.com')&&(inputPasswordEl.val()==='honeycrisp')){
											window.location.replace("http://theironyard.com");
										}
										else{
											$('#message2').html('Incorrect Username or Passwor');
											$('#message1').css('color','red');
											$('#nameField').toggleClass('form-group has-error');
											$('#emailField').toggleClass('form-group has-error');

										}


})

// aaron@theironyard.com / password123
// admin@google.com / pandas / honeycrisp

















