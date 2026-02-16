age = 17
salary = 5000000.0

print(type(age)) #int
print(type(salary)) #float

x = 'Dicoding'
print(type(x)) #str

x = True
print(type(x)) #bool

x = False
print(type(x)) #bool

x = 6
print(type(x)) #int

x = "6"
print(type(x)) #str

x = 6.0
print(type(x)) #float

x = 1+2j
print(type(x)) #complex

'''Perlu diperhatikan bahwa tipe data numbers bersifat 
immutable yang artinya nilai di dalamnya tidak dapat diubah.'''

var = 10
print(var) #10
print(id(var)) #id(var) = 1407206000
var = 11
print(var)  #11
print(id(var)) #id(var) = 1407206000

'''
Anda dapat menggunakan tiga single quote atau double quote untuk menyimpan string 
yang lebih dari satu baris (multi-line)
'''

multi_line = """Halo!
Kapan terakhir kali kita bertemu?
Kita bertemu hari Jum’at yang lalu."""

print(multi_line) #Halo!\nKapan terakhir kali kita bertemu?\nKita bertemu hari Jum’at yang lalu.

'''
String merupakan urutan karakter yang setiap karakternya memiliki indeks. 
Anda dapat mengakses setiap karakter dari string (substring) dengan menggunakan metode indexing.
'''

x = 'Dicoding'
print(x[0]) #D
print(x[1]) #i

'''
Namun, Anda tidak dapat mengubah substring di dalamnya. 
Ini dikarenakan string pada Python bersifat immutable.
'''

#x = 'Dicoding'
#x[0] = 'F'

'''
Anda dapat mengakses beberapa substring dengan menggunakan metode indexing dan slicing.
'''
x = 'Dicoding'
print(x[2:])

# 1. Formated String
name = "Perseus Evans"
print(f"Hello, nama saya {name}")    # Hello, nama saya Perseus Evans

# 2. %-formatting
name = "Perseus Evans"
print("Nama saya %s" % (name))       # Nama saya Perseus Evans

# 3. str.format()
name = "Perseus Evans"
print("Nama saya {}".format(name))   # Nama saya Perseus Evans

# List 
x = [1, 2.2, 'Dicoding']
print(type(x)) #list

x = [1, 'Dicoding', True, 1.0]
print(x[2]) #True

# List Python bersifat mutable
x = [1, 2.2, 'Dicoding']
x[0] = 'Indonesia'
print(x) #[1, 2.2, 'Indonesia']

'''
Konsep indexing merujuk kepada pengambilan data dalam Python berdasarkan indeksnya. 
Beberapa cara untuk melakukan indexing sebagai berikut.
'''
x = ["laptop", "monitor", "mouse", "mousepad", "keyboard", "webcam", "microphone"]

print(x[0]) #laptop
print(x[2]) #mouse
print(x[-1]) #microphone
print(x[-3]) #keyboard

#Slicing list 
x = ["laptop", "monitor", "mouse", "mousepad", "keyboard", "webcam", "microphone"]

print(x[0:5:2]) #[laptop, mouse, webcam]
print(x[1:]) #[monitor, mouse, mousepad, keyboard, webcam, microphone]
print(x[:3]) #[laptop, monitor, mouse]

# Tuple
x = (1, "Dicoding", 1+3j)
print(type(x)) #tuple

x = (5, 'program', 1+3j)
print(x[1]) #'program'
print(x[0:3]) #(5, 'program', (1+3j))

# tuple bersifat immutable
# x = (5, 'program', 1+3j)
# x[1] = 'Dicoding'

#Set
x = {1,2,7,2,3,13,3}
#print(x[0]) #Error, set tidak memiliki indeks

# set akan mengabaikan nilai yang sama
x = {1, 2, 7, 2, 3, 13, 3}
print(x) #{1, 2, 3, 7, 13}
print(type(x)) #set

#Dictionary
x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
print(type(x)) #dict

#untuk mengisi dict harus menggunakan key tidak menggunakan index
x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
print(x['name']) #Perseus Evans

#menambahkan dalam dict 
x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
x ['Job'] = "Web Developer"
print(x) #{'name': 'Perseus Evans', 'age': 20, 'isMarried': False, 'Job': 'Web Developer'}

#menghapus dalam dict
x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
del x['isMarried']
print(x) #{'name': 'Perseus Evans', 'age': 20}

#mengubah dalam dict
x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
x['age'] = 21
print(x) #{'name': 'Perseus Evans', 'age': 21, 'isMarried': False}

#konversi tipe data 
#int to float 
print(float(5)) #5.0

#float to int 
print(int(5.6)) #5
print(int(-5.6)) #-5

#Konversi dari-dan-ke String
print(int("25")) #25
print(str(25)) #"25"
print(float("25")) #25.0
print(str(25.6)) #"25.6"

#Konversi Kumpulan Data
print(set([1,2,3])) #{1, 2, 3}
print(tuple({5,6,7})) #(5, 6, 7)
print(list('hello')) #['h', 'e', 'l', 'l', 'o']

#Konversi ke Dict
print(dict([[1,2],[3,4]])) #{1: 2, 3: 4}

#Konversi list dari beberapa tuple yang isinya pasangan nilai menjadi dictionary.
print(dict([(3,26),(4,44)])) #{3: 26, 4: 44}