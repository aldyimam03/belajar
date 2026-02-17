# manual matriks akan menghabiskan memori yang besar, karena itu kita bisa menggunakan library numpy untuk membuat matriks dengan lebih efisien. Namun, untuk tujuan pembelajaran, kita akan membuat matriks secara manual menggunakan list of lists.
matriks = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
            
print(matriks)

# numpy
import numpy

matriks = numpy.array([[1, 2, 3], [4, 5, 6], [7, 8 ,9]])
print(matriks)

# Perbedaan antara list of lists dan numpy array adalah bahwa list of lists adalah struktur data yang terdiri dari list yang berisi list lainnya, sedangkan numpy array adalah struktur data yang lebih efisien dan memiliki banyak fungsi yang dapat digunakan untuk operasi matematika dan ilmiah. 
# Numpy array juga memiliki tipe data yang lebih spesifik, sehingga dapat menghemat memori dan meningkatkan kecepatan akses dibandingkan dengan list of lists.
import numpy 
import sys

var_list= [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var_array= numpy.array([[1, 2, 3], [4, 5, 6], [7, 8 ,9]])

print("Ukuran keseluruhan elemen list dalam bytes = ",sys.getsizeof(var_list)*len(var_list))
print("Ukuran keseluruhan elemen NumPy dalam bytes = ", var_array.size*var_array.itemsize)