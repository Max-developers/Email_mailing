  
  
$(document).ready (function(){
    
  var result1=false,result2=false,result3=false;
     
  // Сигнал об ошибке (заголовок)
  var c=0,d=0;
    function hed_err(){ 
      if(d<10) setTimeout(hed_err,70); // Как только завершиться анимэ функция остановиться
      if(c==1) $('.heder').css('border','2px solid white');
      if(c==2){
        c=0; 
        $('.heder').css('border','2px solid red');
      }
      
      if(d<10){
        c++; 
        d++;
      }
        
    }
    
  // Сигнал об ошибке (Email)
  var e=0,f=0;
  function email_err(){ 
    if(f<10) setTimeout(email_err,70); // Как только завершиться анимэ функция остановиться
    if(e==1) $('.mail').css('border','2px solid white');
    if(e==2){
       e=0; 
       $('.mail').css('border','2px solid red');
    }
      
    if(f<10){
      e++;
      f++;
    }
        
  }
    
  // Сигнал об ошибке (текст)
  var eu=0,fu=0;
  function mess_err(){
    if(fu<10) setTimeout(mess_err,70); // Как только завершиться анимэ функция остановиться
    if(eu==1) $('.message').css('border','2px solid white');
    if(eu==2){
       eu=0; 
       $('.message').css('border','2px solid red');
    }
      
    if(fu<10){
       eu++; 
       fu++;
    }
        
  }
    
  $('#reg').click(function(){   
     
    // Проверка заголовка на корректность    
    var login = $('.heder').val();
    var xx= login.length; 
    if(xx == 0 ){
      c=0,d=0; 
      hed_err();
      $('.red_block1').css('display','block');
      result1=false; // Если форма заполнене не правильно то возвращает fale
    } else{ 
        $('.heder').css('border','2px solid white'); 
        $('.red_block1').css('display','none');
         result1=true;  // Если форма заполнене правильно то возвращает true
    } 
          
    // Проверка Email на корректность 
    var password = $('.mail').val();
    var pxx= password.length;
    if(pxx == 0 ){
      e=0,f=0; 
      email_err();
      $('.red_block2').css('display','block');
      result2=false;// Если форма заполнене не правильно то возвращает fale
    } else{ 
        $('.mail').css('border','2px solid white'); 
        $('.red_block2').css('display','none');
        result2=true; // Если форма заполнене правильно то возвращает true
    } 
           
    // Проверка текста на корректность 
    var msg = $('.message').val();
    var pxx= msg.length;
    if(pxx == 0 ){
       eu=0,fu=0; 
       mess_err();
       $('.red_block3').css('display','block');
       result3=false;// Если форма заполнене не правильно то возвращает fale
    } else{ 
        $('.message').css('border','2px solid white'); 
        $('.red_block3').css('display','none');
        result3=true; // Если форма заполнене правильно то возвращает true
    } 
        
   // Если все формы заполнены правильно то запускается кнопка 
   if(result1 && result2 && result3){ 
     var hed =     $('.heder').val();
     var email =   $('.mail').val();
     var messages= $('.message').val();
        
     email = email.replace(/\n/g,',') // Вместо переноса строки(Enter) ставим запятую   
     email = email.replace(/\,{1,}$/, ''); // Удаляем все пробелы в переди
   
     $.ajax({
       type:'post',
       url:'mailing.php',
       data:{'email':email, 'hed':hed, 'message': messages},
       success: function(html){
         $('.result').html(html);
       }
     });
  
   }  
      
  });
      
});
      
       
