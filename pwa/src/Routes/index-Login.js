
function Login(){
    return(
        <>
<html lang="pt-br">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Login</title>
</head>
<body>
    <main>
      <strong><span class="ciasc">C . I . A . S . C</span></strong>
      <form action="index-inicio.html" method="get">
      <div class="caixa-ra">
        <label for="RA" class="texto">RA</label>
        <br/>
        <input type="number" id="RA" name="RA"/>
      </div>
      <div class="caixa-password">

      <p id="esqueceu">Esqueceu ?</p>

    <label for="Senha" class="texto">Senha</label><br/>
    <input type="password" name="Senha" id="password"/>
    <br/>
      </div>
      <button type="submit" class="botao_entrar" >Entrar</button>
      </form>
  
  </main>
    {
      //  1   -   isso é para receber o RA caso tenha esquecido a senha 
      //var a = window.document.getElementById('esqueceu')
        //</form>  a.addEventListener('click', function(){
      //var userInput =prompt("Digite seu RA: ");
     //</form> });
      //    fim do   1  -
      //para enviar o RA caso esqueceu as senha
      
      //fim caso tenha esquecido a senha
}
</body>
</html>
        </>
    )
}
export default Login;