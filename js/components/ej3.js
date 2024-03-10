import config from "../config.js";
const ej3 = /*html*/`
<h1>Ejercicio 3</h1>
<p>Area y perimetro de un circulo</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
      #include <iostream>
      #include <cmath>
      using namespace std;

      int main() {
        // Declaracion de variables
        int r;
        string unidades;
      
        // Asignacion de variables
        cout << "Ingrese la longitud del radio del circulo: ";
        cin >> r;
      
        cout << "Ingrese las unidades de medida: ";
        cin >> unidades;
      
        // Mostrar por pantalla
        cout << "El area del circulo es  " << (M_PI*r*r) << " " << unidades
             << " cuarados y de perimetro " << (2*M_PI*r) << " "
             << unidades;
        return 0;
      }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej3.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej3.png" id="img_res"> -->
</div>

`;
export default ej3