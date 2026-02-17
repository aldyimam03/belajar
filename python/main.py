import hello 
 
persegi_panjang_pertama = hello.mencari_luas_persegi_panjang(5,10)
print(persegi_panjang_pertama)

print(hello.nama)

# import untuk function yang lebih spesifik
from hello import mencari_luas_persegi_panjang, nama

# mencari luas persegi panjang sebagai fungsi dan nama sebagai variabel dari file hello.py

persegi_panjang_pertama = mencari_luas_persegi_panjang(5,10)
print(persegi_panjang_pertama)
print(nama)
