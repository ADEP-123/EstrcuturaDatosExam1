const ej21 = /*html*/`
<h1>Ejercicio 2.1</h1>
<h2>Implementacion en cada arreglo metodo burbuja</h2>
<p id="enunciado">Implementa y ejecuta los métodos de ordenamiento en cada arreglo. Compara el tiempo de ejecución y el número de comparaciones para determinar cuál método es más eficiente en este escenario</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
        class Ej2Burbuja {

            public static int bubbleSort(String[] arr) {
                int n = arr.length;
                int comparaciones = 0;
                for (int i = 0; i < n - 1; ++i) {
                    for (int j = 0; j < n - i - 1; ++j) {
                        comparaciones++;
                        if (arr[j].compareTo(arr[j + 1]) > 0) {
                            String temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                }
                return comparaciones;
            }

            public static void main(String[] args) {

                // Datos proporcrionados
                String[] Nombres = { "Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta",
                        "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea",
                        "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara",
                        "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen",
                        "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea",
                        "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel",
                        "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia",
                        "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía",
                        "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario",
                        "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel" };

                System.out.println("Array original: ");
                for (int i = 0; i < Nombres.length; i++) {
                    System.out.print(Nombres[i] + ", ");
                }

                long startTime = System.currentTimeMillis();
                int comp = bubbleSort(Nombres);
                long endTime = System.currentTimeMillis();
                long executionTime = endTime - startTime;

                Runtime runtime = Runtime.getRuntime();
                long memory = runtime.totalMemory() - runtime.freeMemory();

                System.out.println("");
                System.out.println("Array ordenado: ");
                for (int i = 0; i < Nombres.length; i++) {
                    System.out.print(Nombres[i] + ", ");
                }
                System.out.println("");
                System.out.println("Cantidad de comparaciones: " + comp);

                System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
                System.out.println("Memoria utilizada: " + memory + " bytes");

            }

        }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej21A.png" id="img_res">
</div>

`;
export default ej21