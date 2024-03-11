const ej12 = /*html*/`
<h1>Ejercicio 1.2</h1>
<h2>Analisis de precio del dolar en 2022 con metodo burbuja mejorada</h2>
<p id="enunciado">Teniendo en cuenta que en el año 2022 hubo cambio de gobierno en Colombia, el valor de las divisas afectan de manera directa la economía del país, en nuestro caso muchas operaciones financieras se realizan de acuerdo al dólar americano en donde existen diferentes escenarios para los cuales es necesario observar en cual periodo ha estado más alto el precio del dólar y en cual periodo ha estado su valor más bajo, usted debe consultar en al Banco de la República la serie histórica este periodo, https://www.banrep.gov.co/es/estadisticas/trm, los cuales debe evaluar con cada algoritmo identificando en cada salida, la cantidad de comparaciones, el tiempo de ejecución y la cantidad de memoria utilizada, además de mencionar en cual periodo estuvo más alto y más bajo el precio de la divisa.</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
        class ImprovBubbleSortNumbers {

            public static int improvBubbleSort(double[] arr, String[] arr2) {
                int N = arr.length;
                int comparaciones = 0;
                for (int i=N-1 ; i>0 ; i-- ){
                    for ( int j=0 ; j<i ; j++ ){
                        comparaciones++;
                        if(arr[j]>arr[j+1]){
                            double temp = arr[j];
                            String temp2 = arr2[j];
                            arr[j] = arr[j+1];
                            arr[j+1] = temp;
                            arr2[j] = arr2[j + 1];
                            arr2[j + 1] = temp2;
                        }
                    }

                }
                return comparaciones;
            }

            public static void main(String[] args) {

                // Datos proporcrionados
                String[] fechas = {
                        "01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022", "07/01/2022",
                        "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022", "12/01/2022", "13/01/2022", "14/01/2022",
                        "15/01/2022", "16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022", "21/01/2022",
                        "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022", "26/01/2022", "27/01/2022", "28/01/2022",
                        "29/01/2022", "30/01/2022", "31/01/2022", "01/02/2022", "02/02/2022", "03/02/2022", "04/02/2022",
                        "05/02/2022", "06/02/2022", "07/02/2022", "08/02/2022", "09/02/2022", "10/02/2022", "11/02/2022",
                        "12/02/2022", "13/02/2022", "14/02/2022", "15/02/2022", "16/02/2022", "17/02/2022", "18/02/2022",
                        "19/02/2022", "20/02/2022", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022", "25/02/2022",
                        "26/02/2022", "27/02/2022", "28/02/2022", "01/03/2022", "02/03/2022", "03/03/2022", "04/03/2022",
                        "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022", "11/03/2022",
                        "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022", "18/03/2022",
                        "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022", "25/03/2022",
                        "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022", "01/04/2022",
                        "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022", "08/04/2022",
                        "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022", "15/04/2022",
                        "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022", "22/04/2022",
                        "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022", "29/04/2022",
                        "30/04/2022", "01/05/2022", "02/05/2022", "03/05/2022", "04/05/2022", "05/05/2022", "06/05/2022",
                        "07/05/2022", "08/05/2022", "09/05/2022", "10/05/2022", "11/05/2022", "12/05/2022", "13/05/2022",
                        "14/05/2022", "15/05/2022", "16/05/2022", "17/05/2022", "18/05/2022", "19/05/2022", "20/05/2022",
                        "21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022", "26/05/2022", "27/05/2022",
                        "28/05/2022", "29/05/2022", "30/05/2022", "31/05/2022", "01/06/2022", "02/06/2022", "03/06/2022",
                        "04/06/2022", "05/06/2022", "06/06/2022", "07/06/2022", "08/06/2022", "09/06/2022", "10/06/2022",
                        "11/06/2022", "12/06/2022", "13/06/2022", "14/06/2022", "15/06/2022", "16/06/2022", "17/06/2022",
                        "18/06/2022", "19/06/2022", "20/06/2022", "21/06/2022", "22/06/2022", "23/06/2022", "24/06/2022",
                        "25/06/2022", "26/06/2022", "27/06/2022", "28/06/2022", "29/06/2022", "30/06/2022", "01/07/2022",
                        "02/07/2022", "03/07/2022", "04/07/2022", "05/07/2022", "06/07/2022", "07/07/2022", "08/07/2022",
                        "09/07/2022", "10/07/2022", "11/07/2022", "12/07/2022", "13/07/2022", "14/07/2022", "15/07/2022",
                        "16/07/2022", "17/07/2022", "18/07/2022", "19/07/2022", "20/07/2022", "21/07/2022", "22/07/2022",
                        "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022", "27/07/2022", "28/07/2022", "29/07/2022",
                        "30/07/2022", "31/07/2022", "01/08/2022", "02/08/2022", "03/08/2022", "04/08/2022", "05/08/2022",
                        "06/08/2022", "07/08/2022", "08/08/2022", "09/08/2022", "10/08/2022", "11/08/2022", "12/08/2022",
                        "13/08/2022", "14/08/2022", "15/08/2022", "16/08/2022", "17/08/2022", "18/08/2022", "19/08/2022",
                        "20/08/2022", "21/08/2022", "22/08/2022", "23/08/2022", "24/08/2022", "25/08/2022", "26/08/2022",
                        "27/08/2022", "28/08/2022", "29/08/2022", "30/08/2022", "31/08/2022", "01/09/2022", "02/09/2022",
                        "03/09/2022", "04/09/2022", "05/09/2022", "06/09/2022", "07/09/2022", "08/09/2022", "09/09/2022",
                        "10/09/2022", "11/09/2022", "12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022", "16/09/2022",
                        "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022", "22/09/2022", "23/09/2022",
                        "24/09/2022", "25/09/2022", "26/09/2022", "27/09/2022", "28/09/2022", "29/09/2022", "30/09/2022",
                        "01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022", "07/10/2022",
                        "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022", "14/10/2022",
                        "15/10/2022", "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022", "21/10/2022",
                        "22/10/2022", "23/10/2022", "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022", "28/10/2022",
                        "29/10/2022", "30/10/2022", "31/10/2022", "01/11/2022", "02/11/2022", "03/11/2022", "04/11/2022",
                        "05/11/2022", "06/11/2022", "07/11/2022", "08/11/2022", "09/11/2022", "10/11/2022", "11/11/2022",
                        "12/11/2022", "13/11/2022", "14/11/2022", "15/11/2022", "16/11/2022", "17/11/2022", "18/11/2022",
                        "19/11/2022", "20/11/2022", "21/11/2022", "22/11/2022", "23/11/2022", "24/11/2022", "25/11/2022",
                        "26/11/2022", "27/11/2022", "28/11/2022", "29/11/2022", "30/11/2022", "01/12/2022", "02/12/2022",
                        "03/12/2022", "04/12/2022", "05/12/2022", "06/12/2022", "07/12/2022", "08/12/2022", "09/12/2022",
                        "10/12/2022", "11/12/2022", "12/12/2022", "13/12/2022", "14/12/2022", "15/12/2022", "16/12/2022",
                        "17/12/2022", "18/12/2022", "19/12/2022", "20/12/2022", "21/12/2022", "22/12/2022", "23/12/2022",
                        "24/12/2022", "25/12/2022", "26/12/2022", "27/12/2022", "28/12/2022", "29/12/2022", "30/12/2022",
                        "31/12/2022"
                };

                double[] valores = {
                        3981.16, 3981.16, 3981.16, 4082.75, 4084.11, 4042.36, 4039.31, 4043.46, 4043.46, 4043.46, 4043.46,
                        4011.65, 3970.08, 3950.40, 3993.65, 3993.65, 3993.65, 3993.65, 4033.37, 4003.95, 3980.80, 3964.30,
                        3964.30, 3964.30, 3977.51, 3987.32, 3947.83, 3944.04, 3982.60, 3982.60, 3982.60, 3942.73, 3923.61,
                        3928.05, 3951.96, 3962.68, 3962.68, 3962.68, 3963.84, 3965.41, 3939.31, 3917.75, 3917.52, 3917.52,
                        3917.52, 3938.97, 3946.88, 3963.72, 3953.26, 3927.25, 3927.25, 3927.25, 3927.25, 3932.40, 3913.79,
                        3940.20, 3910.64, 3910.64, 3910.64, 3910.28, 3901.62, 3862.95, 3771.77, 3806.11, 3806.11, 3806.11,
                        3813.41, 3787.18, 3746.43, 3786.00, 3827.64, 3827.64, 3827.64, 3800.85, 3836.56, 3826.89, 3816.43,
                        3820.67, 3820.67, 3820.67, 3820.67, 3765.67, 3756.64, 3798.90, 3785.66, 3785.66, 3785.66, 3785.70,
                        3765.96, 3748.15, 3756.03, 3774.79, 3774.79, 3774.79, 3706.95, 3723.79, 3746.51, 3771.83, 3777.41,
                        3777.41, 3777.41, 3744.16, 3736.70, 3737.32, 3737.32, 3737.32, 3737.32, 3737.32, 3731.31, 3755.85,
                        3758.65, 3759.54, 3819.07, 3819.07, 3819.07, 3931.74, 3947.63, 3967.32, 3984.77, 3966.27, 3966.27,
                        3966.27, 4004.07, 4016.34, 4056.41, 4086.08, 4053.93, 4053.93, 4053.93, 4085.76, 4086.71, 4080.32,
                        4109.71, 4110.53, 4110.53, 4110.53, 4070.25, 4033.85, 4054.71, 4050.88, 3989.84, 3989.84, 3989.84,
                        3950.35, 3971.28, 3959.05, 3930.89, 3912.34, 3912.34, 3912.34, 3912.34, 3776.52, 3791.74, 3784.98,
                        3771.63, 3771.63, 3771.63, 3799.50, 3790.88, 3782.65, 3833.34, 3912.51, 3912.51, 3912.51, 4016.50,
                        3979.30, 3923.96, 3912.15, 3905.05, 3905.05, 3905.05, 3905.05, 4026.92, 4026.52, 4068.75, 4129.87,
                        4129.87, 4129.87, 4129.87, 4089.72, 4127.47, 4151.21, 4198.77, 4198.77, 4198.77, 4198.77, 4259.86,
                        4348.68, 4369.70, 4388.27, 4388.27, 4388.27, 4513.28, 4627.46, 4558.05, 4519.65, 4395.63, 4395.63,
                        4395.63, 4315.41, 4303.34, 4303.34, 4410.14, 4423.86, 4423.86, 4423.86, 4461.63, 4445.01, 4420.75,
                        4375.51, 4300.30, 4300.30, 4300.30, 4245.99, 4313.30, 4331.15, 4268.30, 4337.28, 4337.28, 4337.28,
                        4307.09, 4309.69, 4273.82, 4231.45, 4185.49, 4185.49, 4185.49, 4185.49, 4218.48, 4316.47, 4413.86,
                        4400.25, 4400.25, 4400.25, 4399.16, 4374.45, 4380.19, 4407.95, 4388.02, 4388.02, 4388.02, 4386.13,
                        4400.16, 4422.77, 4467.03, 4466.73, 4466.73, 4466.73, 4466.73, 4480.10, 4446.36, 4396.69, 4365.32,
                        4365.32, 4365.32, 4346.91, 4413.89, 4389.80, 4404.64, 4435.84, 4435.84, 4435.84, 4415.11, 4420.38,
                        4403.82, 4379.80, 4426.47, 4426.47, 4426.47, 4496.99, 4556.42, 4486.94, 4532.07, 4590.54, 4590.54,
                        4590.54, 4545.66, 4484.74, 4548.89, 4627.61, 4605.29, 4605.29, 4605.29, 4605.29, 4611.88, 4611.18,
                        4619.78, 4636.83, 4636.83, 4636.83, 4636.83, 4744.04, 4815.09, 4885.50, 4913.24, 4913.24, 4913.24,
                        4968.94, 4948.14, 4895.29, 4821.92, 4819.42, 4819.42, 4819.42, 4898.74, 4975.58, 5015.84, 5058.02,
                        5061.21, 5061.21, 5061.21, 5061.21, 5013.20, 4914.71, 4806.07, 4806.07, 4806.07, 4806.07, 4806.07,
                        4801.06, 4922.70, 5022.03, 4994.61, 4994.61, 4994.61, 4958.42, 4914.34, 4875.91, 4875.91, 4881.41,
                        4881.41, 4881.41, 4840.60, 4809.51, 4815.59, 4779.06, 4767.19, 4767.19, 4767.19, 4812.37, 4818.32,
                        4825.83, 4825.83, 4815.99, 4815.99, 4815.99, 4836.24, 4791.57, 4778.28, 4797.02, 4802.48, 4802.48,
                        4802.48, 4781.28, 4769.29, 4761.64, 4760.61, 4745.04, 4745.04, 4745.04, 4745.04, 4766.82, 4765.92,
                        4810.20, 4810.20
                };

                System.out.println("Array original: ");
                for (int i = 0; i < valores.length; i++) {
                    System.out.print(fechas[i] + " : " + valores[i] + ", ");
                }

                long startTime = System.currentTimeMillis();
                int comp = improvBubbleSort(valores, fechas);
                long endTime = System.currentTimeMillis();
                long executionTime = endTime - startTime;

                Runtime runtime = Runtime.getRuntime();
                long memory = runtime.totalMemory() - runtime.freeMemory();

                System.out.println("");
                System.out.println("Array ordenado: ");
                for (int i = 0; i < valores.length; i++) {
                    System.out.print(fechas[i] + " : " + valores[i] + ", ");
                }
                System.out.println("");
                System.out.println("Cantidad de comparaciones: " + comp);

                System.out.println("El dia en el que el dolar estuvo mas alto fue el " + fechas[364] + ", con un precio de "
                        + valores[364] + " pesos colombianos");
                System.out.println("El dia en el que el dolar estuvo mas bajo fue el " + fechas[0] + ", con un precio de "
                        + valores[0] + " pesos colombianos");

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
    <img src="imgs/ej12A.png" id="img_res">
    <img src="imgs/ej12B.png" id="img_res">
    <img src="imgs/ej12C.png" id="img_res">
</div>

`;
export default ej12