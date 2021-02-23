

const dialog = $( "#dialog" )
let editedItem = null;

let items = [];

dialog.dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	],
  close: function( event, ui ) {    
    const data= {
      name: $(event.target).find('#name').val(),
      age: $(event.target).find('#age').val()
    }
    $(editedItem).find('#name-span').text(data.name)
    $(editedItem).find('#age-span').text(data.age)
    $(editedItem).data(data);
  }
});

$(document).ready(()=> {
  const data = {name: 'Carl', age: 20};
  $( "#card" ).data(data)
  $( "#card" ).find('#name-span').text(data.name)
  $( "#card" ).find('#age-span').text(data.age)
})

$( "#open-dialog" ).on( "click", function(event) {  
  $(dialog).dialog( "open" );
});




$( "#card" ).on("click", (event)=> {
  editedItem = event.currentTarget;

  const {name, age} = $(event.currentTarget).data();
  
  $('#dialog').find('#name').val(name),
  $('#dialog').find('#age').val(age),  
  
  $(dialog).dialog( "open" );   

})

