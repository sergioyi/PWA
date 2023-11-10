import './logo.svg';
import './style/style.css';
import {Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
<html lang="pt-br">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
  <link rel="manifest" href="./js/pwa/manifest.json"/>
  <link rel="canonical" href="https://pwa-ciasc-recpcionista.sergioan.repl.co/"/>
  <meta name="theme-color" content="#f9f9f9"/>
  <link rel="apple-touch-icon" href="./Imagens/Foto.jpg"/>
  <meta name="description" content="ciasc"/>
  <meta name="keywords" content="ciasc, html"/>
  
  <title>Boas Vindas</title>
</head>
<body>
  <h1>Seja Bem Vindo !!!</h1>
  <Link to="./Routes/index-Login" ><button type="button">Login</button></Link>
  </body>
</html>
    </div>
  );
}

export default App;
