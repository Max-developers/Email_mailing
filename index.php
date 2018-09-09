
<!DOCTYPE html>
<html lang="ru-RU">  
  <head>
    <meta charset="utf8">
    <title>Email_mailing</title>
    <link rel="stylesheet" type="text/css" href = "style.css" > 
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script> 
    <script src = "script.js"></script>
  </head> 
  <body>
    <div class="result"></div>
      <div class="di">
        <!--Форма для заполнения-->
        <form> 
          
          <div class="red_block1">   
            <div class="err">Поле не заполнено</div>
            <div class="st"></div>
          </div> 
          
          <input type="text" name="hed" placeholder="Заголовок сообщения" class="heder" ><br> 
          
          <div class="red_block2">
            <div class="err">Поле не заполнено</div>
            <div class="st"></div>
          </div>  
          
          <textarea  placeholder="Email" class="mail"></textarea><br> 
          
          <div class="red_block3">
            <div class="err">Поле не заполнено</div>
            <div class="st"></div>
          </div> 
          
          <textarea  placeholder="Текст сообщения" class="message">
          </textarea><br>  
          
        </form>
        
     <div id="reg" class="submit">отправить</div> 
    
    </div>
  </body>
</html>
