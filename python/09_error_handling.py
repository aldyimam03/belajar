# if 9>10:
# print("Hello World!")

r'''
output: 
Traceback (most recent call last):
    File "c:\Users\Aldy\Documents\GitHub\belajar\python\tempCodeRunnerFile.py", line 2
    print("Hello World!")
    ^^^^^
IndentationError: expected an indented block after 'if' statement on line 1
'''

# i = 1
# while i<3
#     print("Dicoding")
#     i+=1

r'''
output:
File "c:\Users\Aldy\Documents\GitHub\belajar\python\tempCodeRunnerFile.py", line 2
    # print("Hello World!")
IndentationError: expected an indented block after 'if' statement on line 1
'''

#print(angka)

r'''
output:
Traceback (most recent call last):
  File "/home/glot/main.py", line 1, in <module>
    print(angka)
NameError: name 'angka' is not defined
'''

# bukan_angka = '1'
# bukan_angka + 2

r'''
output:
Traceback (most recent call last):
  File "/home/glot/main.py", line 2, in <module>
    bukan_angka + 2
TypeError: can only concatenate str (not "int") to str
'''

# z = 0
# print(1/z)

r'''
output:
Traceback (most recent call last):
  File "/home/glot/main.py", line 2, in <module>
    print(1/z)
ZeroDivisionError: division by zero
'''

z=0
try:
    print(1/z)
except ZeroDivisionError:
    print("Anda tidak bisa membagi angka dengan nilai nol.")

r'''
output:
Anda tidak bisa membagi angka dengan nilai nol.
'''

var_dict = {"rata_rata": "1.0"}

try:
    print(f"rata-rata adalah {var_dict['rata_rata']}")
except KeyError:
    print("Key tidak ditemukan.")
except TypeError:
    print("Anda tidak bisa membagi nilai dengan tipe data string")
else:
    print("Kode ini dieksekusi jika tidak ada exception.")
finally:
    print("Kode ini dieksekusi terlepas dari ada atau tidaknya exception.")

r'''
output:
rata-rata adalah 1.0
Kode ini dieksekusi jika tidak ada exception.
Kode ini dieksekusi terlepas dari ada atau tidaknya exception.
'''

# Raising Exception
var = -1
if var < 0:
    raise ValueError("Bilangan negatif tidak diperbolehkan")
else:
    for i in range(var):
        print(i+1)

r'''
output:
Traceback (most recent call last):
  File "/home/glot/main.py", line 3, in <module>
    raise ValueError("Bilangan negatif tidak diperbolehkan")
ValueError: Bilangan negatif tidak diperbolehkan
'''
