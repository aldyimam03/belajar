# array berbeda dengan list, array hanya bisa menyimpan data dengan tipe yang sama, 
# sedangkan list bisa menyimpan data dengan tipe yang berbeda. 
# Array lebih efisien dalam penggunaan memori dan kecepatan akses dibandingkan dengan list, 
# terutama untuk operasi matematika dan ilmiah. 
# Namun, list lebih fleksibel dan mudah digunakan untuk berbagai jenis data dan operasi umum.

# ini adalah list 
variable_list = [1, 2, 3, 'empat', 'lima', True, False]
print(variable_list) #[1, 2, 3, 'empat', 'lima', True, False]

# ini adalah array
import array

x = array.array("i",[1, 2, 3, 4, 5])
print(x)
print(type(x))

siswa = [90, 100, 50, 80, 85, 45, 80, 75, 50, 60]

print(siswa) #[90, 100, 50, 80, 85, 45, 80, 75, 50, 60]
print(siswa[0]) #90

var_arr = [0 for i in range(10)]
print(var_arr) #[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var_arr = [0 for i in range(10)]
for i in range(10):
    var_arr[i] = i

print(var_arr) #[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

"""
TODO:
Sebuah variabel array diberikan dengan ketentuan berikut.
- Variabel array bernama "var_array" dengan nilai dari 0 hingga 100.
- Hitung nilai rata-rata dari elemen array tersebut.
- Simpan hasil perhitungan dalam variabel bernama "result".

Tips:
- Rumus menghitung rata-rata adalah jumlah seluruh elemen dibagi banyaknya elemen.
- Gunakan percabangan dan perulangan untuk mempermudah, 
  Anda tidak diperbolehkan memberikan nilai secara langsung.
"""
# Jangan ubah kode ini
var_array = [i for i in range(101)]

# TODO: Silakan buat kode Anda di bawah ini.
total = 0
for i in var_array:
    total += i
result = total / len(var_array) 
print(result)