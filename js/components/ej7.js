const ej6 = /*html*/`
<h1>Ejercicio 7</h1>
<h2>Ordenamiento de array con nombres repetidos</h2>
<p id="enunciado">El siguiente programa permite contar la repetición de nombres en un arreglo, usted debe ordenar la salida en términos de:
<br>•	Lista ordenada de acuerdo al nombre
<br>•	Lista ordenada de acuerdo a la cantidad de repeticiones
</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
        import java.util.*;

        class Ejercicio7 {

        public static int quickSortbyNum(String arr[], int inicio, int fin) {
            int comparaciones = 0;
            if (inicio >= fin) {
                return comparaciones;
            }
            int pivote = extractNumber(arr[inicio]);
            int elemIzq = inicio + 1;
            int elemDer = fin;
            while (elemIzq <= elemDer) {
                while (elemIzq <= fin && extractNumber(arr[elemIzq]) < pivote) {
                    elemIzq++;
                    comparaciones++;
                }
                while (elemDer > inicio && extractNumber(arr[elemDer]) >= pivote) {
                    elemDer--;
                    comparaciones++;
                }
                if (elemIzq < elemDer) {
                    String  temp = arr[elemIzq];
                    arr[elemIzq] = arr[elemDer];
                    arr[elemDer] = temp;

                }
            }

            if (elemDer > inicio) {
                String temp = arr[elemDer];
                arr[elemDer] = arr[inicio];
                arr[inicio] = temp;

            }
            quickSortbyNum(arr, inicio, elemDer - 1);
            quickSortbyNum(arr, elemDer + 1, fin);
            return comparaciones;
        }

        public static int quickSortStrings(String arr[], int inicio, int fin) {
            int comparaciones = 0;
            if (inicio >= fin) {
                return comparaciones;
            }
            String pivote = arr[inicio];
            int elemIzq = inicio + 1;
            int elemDer = fin;
            while (elemIzq <= elemDer) {
                while (elemIzq <= fin && arr[elemIzq].compareTo(pivote) < 0) {
                    elemIzq++;
                    comparaciones++;
                }
                while (elemDer > inicio && arr[elemDer].compareTo(pivote) >= 0) {
                    elemDer--;
                    comparaciones++;
                }
                if (elemIzq < elemDer) {
                    String temp = arr[elemIzq];
                    arr[elemIzq] = arr[elemDer];
                    arr[elemDer] = temp;

                }
            }

            if (elemDer > inicio) {
                String temp = arr[elemDer];
                arr[elemDer] = arr[inicio];
                arr[inicio] = temp;

            }
            quickSortStrings(arr, inicio, elemDer - 1);
            quickSortStrings(arr, elemDer + 1, fin);
            return comparaciones;
        }

        public static String[] generarArregloNombres(int cantidad) {
            String[] nombres = new String[cantidad];
            String[] iniciales = { "Ana", "Luis", "María", "David", "Sofía", "Carlos", "Elena", "Alejandro", "Isabella",
                    "Juan", "Valentina", "Andrea", "Pedro", "Camila", "Fernando", "Laura", "Diego", "Carolina", "Gabriel",
                    "Javier", "Ana", "Miguel", "Paula", "Max", "Bianca", "Daniel", "Isaac", "Olivia", "Ava", "Liam", "Eva",
                    "Mia", "Sophia", "Amelia", "Isabella", "Luna", "Alexander", "Benjamin", "William", "Emma", "Oliver",
                    "Noah", "Ethan", "Henry", "James", "Arjun", "Mateo", "Lucas" };
            Random rand = new Random();
            for (int i = 0; i < cantidad; i++) {
                int index = rand.nextInt(iniciales.length);
                // nombres[i] = iniciales[index] + "_" + (i + 1);
                nombres[i] = iniciales[index];
            }
            for (int i = 0; i < iniciales.length; i++) {
                int contador = 0;
                for (int j = 0; j < nombres.length; j++) {
                    if (iniciales[i] == nombres[j]) {
                        contador++;
                    }
                }
                iniciales[i] = iniciales[i] + "_" + contador;
            }
            return iniciales;
        }

        public static int extractNumber(String input) {
            int underscoreIndex = input.lastIndexOf('_');

            if (underscoreIndex != -1 && underscoreIndex < input.length() - 1) {
                String numberPart = input.substring(underscoreIndex + 1);

                try {
                    return Integer.parseInt(numberPart);
                } catch (NumberFormatException e) {
                    System.err.println("No se pudo extraer un número válido.");
                }
            }
            return -1;
        }

        public static void main(String[] args) {
            int cantidadNombres = 10000;
            String[] iniciales = generarArregloNombres(cantidadNombres);

            System.out.println("Array desordenado");
            for (int i = 0; i < iniciales.length; i++) {
                System.out.println(iniciales[i]);
            }

            
            System.out.println("");
            System.out.println("Array ordenao por cantidad de repeticiones");
            quickSortbyNum(iniciales, 0, iniciales.length-1);
            for (int i = 0; i < iniciales.length; i++) {
                System.out.println(iniciales[i]);
            }

            System.out.println("");
            System.out.println("Array ordenao de acuerdo al nombre");
            quickSortStrings(iniciales, 0, iniciales.length-1);
            for (int i = 0; i < iniciales.length; i++) {
                System.out.println(iniciales[i]);
            }
            // System.out.println("Total de nombres generados: " + cantidadNombres);


        }

    }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej7A.png" id="img_res">
    <img src="imgs/ej7B.png" id="img_res">
</div>

`;
export default ej6