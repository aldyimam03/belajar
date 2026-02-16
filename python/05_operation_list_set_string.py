# len()
# List

contoh_list = [1, 3, 3, 5, 5, 5, 7, 7, 9]

print(contoh_list) #[1, 3, 3, 5, 5, 5, 7, 7, 9]
print(len(contoh_list)) #9

# Set

contoh_list = set([1, 3, 3, 5, 5, 5, 7, 7, 9])

print(contoh_list) #{1, 3, 5, 7, 9}
print(len(contoh_list)) #5

# String
contoh_list = "Belajar Python"

print(contoh_list) #Belajar Python
print(len(contoh_list)) #13

# min() dan max()
angka = [13, 7, 24, 5, 96, 84, 71, 11, 38]
print(min(angka)) #7
print(max(angka)) #96

# count()
genap = [2, 4, 4, 6, 6, 6, 8, 10, 10]
print(genap.count(6)) #3

string = "Belajar Python di Dicoding sangat menyenangkan"
substring = "a"
print(string.count(substring)) #6

# In dan Not In
kalimat = "Belajar Python di Dicoding sangat menyenangkan"
print('Dicoding' in kalimat) #True
print('tidak' in kalimat) #False
print('Dicoding' not in kalimat) #False
print('tidak' not in kalimat) #True

# Memberikan Nilai untuk Multiple Variable
data = ['shirt', 'white', 'L']
apparel, color, size = data

print(data) #['shirt', 'white', 'L']
print(apparel) #shirt
print(color) #white
print(size) #L

# sort() 
kendaraan = ['motor', 'mobil', 'helikopter', 'pesawat']
kendaraan.sort()

print(kendaraan) #['helikopter', 'motor', 'mobil', 'pesawat']

kendaraan = ['motor', 'mobil', 'helikopter', 'pesawat']
kendaraan.sort(reverse=True)

print(kendaraan) #['pesawat', 'mobil', 'motor', 'helikopter']

# Metode sort tidak dapat mengurutkan list yang memiliki angka dan string sekaligus di dalamnya
urutan = ['Dicoding', 1, 2, 'Indonesia', 3]
urutan.sort()

# print(urutan) #TypeError: '<' not supported between instances of 'int' and 'str'

# Metode sort menggunakan urutan ASCII sehingga nilai huruf kapital (uppercase) akan lebih dahulu dibandingkan huruf kecil (lowercase).
kendaraan = ['motor', 'mobil', 'helikopter', 'Pesawat']
kendaraan.sort()

print(kendaraan) #['Pesawat', 'helikopter', 'mobil', 'motor']
