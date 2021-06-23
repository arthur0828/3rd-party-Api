var currentDay = moment();
$('#currentDay').text(currentDay.format("MMM Do, YYYY"));


$('button').on('click', function(){
    console.log($(this))
    var userValue = $(this).parent().siblings('div.col-md-10').children().val();
    console.log(userValue);
    var hour = $(this).parent().parent().attr('id');
    console.log(hour);
    localStorage.setItem(hour, userValue);
})

$('#hour-9').children('div.col-md-10').children().val(localStorage.getItem('hour-9'));
$('#hour-10').children('div.col-md-10').children().val(localStorage.getItem('hour-10'));
$('#hour-11').children('div.col-md-10').children().val(localStorage.getItem('hour-11'));
$('#hour-12').children('div.col-md-10').children().val(localStorage.getItem('hour-12'));
$('#hour-1').children('div.col-md-10').children().val(localStorage.getItem('hour-1'));
$('#hour-2').children('div.col-md-10').children().val(localStorage.getItem('hour-2'));
$('#hour-3').children('div.col-md-10').children().val(localStorage.getItem('hour-3'));
$('#hour-4').children('div.col-md-10').children().val(localStorage.getItem('hour-4'));
$('#hour-5').children('div.col-md-10').children().val(localStorage.getItem('hour-5'));




