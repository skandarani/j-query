$('.police').change(function(){
    // alert()
    // .css('color' , 'blue')
    // .style.color = 'red'
    $('#text').css('color',$('.police').val())
    // console.log($('.police').val())
});

$('.cara').change(function(){
$('#text').css('fontFamily',$('.cara').val())
});

$('.decoration').change(function(){
$('#text').css('textDecoration',$('.decoration').val())
console.log($('.decoration').val())
});
$('.gra').change(function(){
$('#text').css('fontWeight',$('.gra').val())
});

$('.pourcent').change(function(){
    $('#text').css('fontSize',$('.pourcent').val())
    
    });