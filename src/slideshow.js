let a =1;

$('document').ready(function(){

    $('.btn-right').click(function(){
       $('.slide:nth-child('+a+')').fadeOut();
       $('.slide').hide();        
       a++;
       if($('.slide:nth-of-type('+a+')').length==0){
            a=1;
       }
       $('.slide:nth-of-type('+a+')').fadeIn();

    });


    $('.btn-left').click(function(){
        $('.slide:nth-child('+a+')').fadeOut();
        $('.slide').hide();        
        a--;
        if($('.slide:nth-of-type('+a+')').length==0){
             a=$('.slide').length;
        }
        $('.slide:nth-of-type('+a+')').fadeIn();
 
     });
});
