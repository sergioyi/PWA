import './style/Inicio.css'
function Inicio(){
    return(
        <>
<html lang="pt-br">
<head>
  <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Inicio</title>
</head>
<body>
    <header>
    <div id="ciasc"><strong> C . I . A . S . C</strong></div>
    <a href="index-informacao-usuario.html"><img src="Imagens/opcao.png" alt="opções" class="imagem-opicao"></a>
  </header>
  <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Inicio</title>
    <link rel="manifest" href="manifest.json" />
    <meta name="theme-color" content="#db4938" />

</head>
    <body>
    <header>
    <div id="ciasc"><strong> C . I . A . S . C</strong></div>
    <a href="index-informacao-usuario.html"><img src={opcao} alt="opções" class="imagem-opicao"/></a>
  </header>
  <aside>
    <Link to="/Agendamento">
      <button type="button" class="nova-consulta"><strong>Novo Agendamento</strong></button></Link>
    <br/>
    <Link to="/Pesquisa">
      <button type="button" class="pesquisa-consulta"><strong>Pesquisa Consulta</strong></button></Link>
    <br/>
    <Link to="/Paciente"><button type="button" class="cadastro-paciente"><strong>Cadastro
          Paciente</strong></button></Link>
    <br/>
    <a href="index-horario-fisioterapia.html"><button type="button" class="fisioterapia"><img
          src={fisioterapia} alt="fisioterapia" class="
          emoji-fisioterapia"/><strong> Fisioterapia</strong>
      </button></a>
    <br/>
    <a href="index-hoario-nutricao.html"><button class="nutricao"><img src={nutricao}
          alt="nutricao" class="emoji-nutricao"/><strong> Nutrição</strong></button></a>
    <br/>
    <a href="index-horario-enfermagem.html"><button class="enfermagem"><img
          src={enfermagem} alt="enfermagem" class="emoji-enfermagem"/><strong>
            Enfermagem</strong></button></a>
    <br/>
  </aside>
</body>
</html>
        </>
    )
}
export default Inicio;