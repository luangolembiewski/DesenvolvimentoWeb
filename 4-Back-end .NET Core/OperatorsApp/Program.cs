using System;
namespace app{
    class OperatorsApp{
        static void Main(string[] args){
            int rep=0;
            for(int x=0;x<50;x+=10){
                rep++;
                Console.WriteLine($"Execução: {rep}, Valor: {x}");
            }
            Console.WriteLine(rep);
        }
    }
}
