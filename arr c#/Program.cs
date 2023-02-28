using System;

namespace ConsoleApp10
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //task1
            /*int[] num = { 8, 29, 1, 64, 72, -9 };
                float sum = 0;
                float count = 0;
            for (int index = 0; index < num.Length; index++)
            {
                if (num[index] % 3 == 0)
                {
                    sum += num[index];
                }
                if (num[index] % 3 == 0)
                {
                    count++;
                }
            }
           float result = sum / count;
            Console.WriteLine(result); */


            //task2
            /*  int[] num = { 101, 21, -81, 3, -200, 2000 };
              float sum = 0;
              for (int index = 0; index < num.Length; index++)
              {
                  if (num[index] >= 100 || num[index] <= -100)
                  {
                      sum += num[index];
                  }
              }
              Console.WriteLine(sum); */


            //task3
            /* int[] num = { 2, -17, 84, 45, -92 };
             float max = num[0];
             float min = num[0];
             for (int index = 0; index < num.Length; index++)
             {
                 if (num[index] > max)
                 {
                     max = num[index];
                 }
                 if (num[index] < min)
                 {
                     min = num[index];
                 }
             }
             float average = (min + max) / 2;
             Console.WriteLine(average); */


            //task4
            /*string[] name = { "Ali", "Emma", "Andrew", "Alexander", "Bree", "Jolene", "Anna" };
            float count = 0;
            int first = name[0][0];
            for (int index = 0; index < name.Length; index++)
            {
                if (name[index][0] == first)
                {
                    count++;
                }
            }
            Console.WriteLine(count); */

        }
    }
}