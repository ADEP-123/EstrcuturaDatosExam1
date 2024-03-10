import config from "../config.js";
const ej8 = /*html*/`
<h1>Ejercicio 8</h1>
<p>Desarrolle un programa que convierta de ºc a kelvin </p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
    #include <cmath>
    #include <iostream>
    
    using namespace std;
    
    int main() {
      // Declaracion de variables
      double c;
    
      // Asignacion de variables
      cout << "Ingrese la temperatura en grados centigrados: ";
      cin >> c;
    
      cout << "Los grados Kelvin son: " << (c + 273.15);
    
      return 0;
    }

    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej8.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej8.png" id="img_res"> -->
</div>

`;
export default ej8