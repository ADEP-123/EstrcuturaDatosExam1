import config from "../config.js";
const ej1 = /*html*/`
<h1>Ejercicio 1</h1>
<p>Area y perimetro de un cuadrado</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
      #include <iostream>
      using namespace std;
      
      int main() {
        // Declaracion de variables
        int lado;
        string unidades;
      
        // Asignacion de variables
        cout << "Ingrese la longitud de uno de los lados del cuadrado: ";
        cin >> lado;
      
        cout << "Ingrese las unidades de medida: ";
        cin >> unidades;
      
        // Mostrar por pantalla
        cout << "El area del cuadrado es  " << (lado * lado) << " " << unidades << " cuadrados" << endl;
        cout << "El perimetro del cuadrado es  " << (lado * 4) << " " << unidades;
        return 0;
      }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej1.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej1.png" id="img_res"> -->
</div>

`;
export default ej1