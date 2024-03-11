const ej31 = /*html*/`
<h1>Ejercicio 3.1</h1>
<h2>Implementacion de los 3 metodos en arreglo tipo string casi ordenado</h2>
<p id="enunciado">Ejecuta los métodos de ordenamiento mencionados anterior mente para evaluar los siguientes arreglos casi ordenados. Observa cómo se comporta cada algoritmo y cuál es más eficiente en términos de tiempo de ejecución.</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
        class ej31 {

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

            public static int improvBubbleSort(String[] arr) {
                int N = arr.length;
                int comparaciones = 0;
                for (int i = N - 1; i > 0; i--) {
                    for (int j = 0; j < i; j++) {
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

            public static int quickSort(String arr[], int inicio, int fin) {
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
                quickSort(arr, inicio, elemDer - 1);
                quickSort(arr, elemDer + 1, fin);
                return comparaciones;
            }

            public static void main(String[] args) {

                // Datos proporcrionados
                String[] Nombres = { "Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta",
                        "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea",
                        "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria",
                        "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián",
                        "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura",
                        "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen",
                        "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia",
                        "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José",
                        "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto",
                        "Isabel" };

                // Burbuja
                System.out.println("xxxxx Metodo de burbuja xxxxx");
                System.out.println("Array original: ");
                for (int i = 0; i < Nombres.length; i++) {
                    System.out.print(Nombres[i] + ", ");
                }

                long startTimeBurb = System.currentTimeMillis();
                int compBurb = bubbleSort(Nombres);
                long endTimeBurb = System.currentTimeMillis();
                long executionTimeBurb = endTimeBurb - startTimeBurb;

                Runtime runtimeBurb = Runtime.getRuntime();
                long memoryBurb = runtimeBurb.totalMemory() - runtimeBurb.freeMemory();

                System.out.println("");
                System.out.println("Array ordenado: ");
                for (int i = 0; i < Nombres.length; i++) {
                    System.out.print(Nombres[i] + ", ");
                }
                System.out.println("");
                System.out.println("Cantidad de comparaciones: " + compBurb);

                System.out.println("Tiempo de ejecución: " + executionTimeBurb + " milisegundos");
                System.out.println("Memoria utilizada: " + memoryBurb + " bytes");

                // Burbuja Mejorada
                System.out.println("");
                System.out.println("");
                System.out.println("xxxxx Metodo de burbuja mejorada xxxxx");
                System.out.println("Array original: ");
                for (int i = 0; i < Nombres.length; i++) {
                    System.out.print(Nombres[i] + ", ");
                }

                long startTimeBurbMej = System.currentTimeMillis();
                int compBurbMej = improvBubbleSort(Nombres);
                long endTimeBurbMej = System.currentTimeMillis();
                long executionTimeBurbMej = endTimeBurbMej - startTimeBurbMej;

                Runtime runtimeBurbMej = Runtime.getRuntime();
                long memoryBurbMej = runtimeBurbMej.totalMemory() - runtimeBurbMej.freeMemory();

                System.out.println("");
                System.out.println("Array ordenado: ");
                for (int i = 0; i < Nombres.length; i++) {
                    System.out.print(Nombres[i] + ", ");
                }
                System.out.println("");
                System.out.println("Cantidad de comparaciones: " + compBurbMej);

                System.out.println("Tiempo de ejecución: " + executionTimeBurbMej + " milisegundos");
                System.out.println("Memoria utilizada: " + memoryBurbMej + " bytes");

                // Quick Sort
                System.out.println("");
                System.out.println("");
                System.out.println("xxxxx Metodo Quick Sort xxxxx");
                System.out.println("Array original: ");
                for (int i = 0; i < Nombres.length; i++) {
                    System.out.print(Nombres[i] + ", ");
                }

                long startTimeQS = System.currentTimeMillis();
                int compQS = quickSort(Nombres,0,Nombres.length-1);
                long endTimeQS = System.currentTimeMillis();
                long executionTimeQS = endTimeQS - startTimeQS;

                Runtime runtimeQS = Runtime.getRuntime();
                long memoryQS = runtimeQS.totalMemory() - runtimeQS.freeMemory();

                System.out.println("");
                System.out.println("Array ordenado: ");
                for (int i = 0; i < Nombres.length; i++) {
                    System.out.print(Nombres[i] + ", ");
                }
                System.out.println("");
                System.out.println("Cantidad de comparaciones: " + compQS);

                System.out.println("Tiempo de ejecución: " + executionTimeQS + " milisegundos");
                System.out.println("Memoria utilizada: " + memoryQS + " bytes");

            }

        }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej31A.png" id="img_res">
    <img src="imgs/ej31B.png" id="img_res">
    <img src="imgs/ej31C.png" id="img_res">
</div>

`;
export default ej31