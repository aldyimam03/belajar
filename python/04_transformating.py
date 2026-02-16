# upper()

name = "perseus evans"
print(name.upper()) #PERSEUS EVANS

# lower()

kata = 'DICODING'
kata = kata.lower()
print(kata) #dicoding

# rstrip()
print("Dicoding          ".rstrip()) #Dicoding

# lstrip()
print("          Dicoding".lstrip()) #Dicoding

# strip()
print("          Dicoding          ".strip()) #Dicoding

kata = 'CodeCodeDicodingCodeCode'
print(kata.strip("Code")) #Dicoding

# startswith()
print('Dicoding Indonesia'.startswith('Dicoding')) #True

# endswith()
print('Dicoding Indonesia'.endswith('Dicoding')) #False

# join()
print(' '.join(['Dicoding','Indonesia', '!'])) #Dicoding Indonesia !

# menambahkan delimiter pada join
print('123 '.join(['Dicoding','Indonesia', '!'])) #Dicoding123 Indonesia, !

# split()
print('Dicoding Indonesia'.split(' ')) #['Dicoding', 'Indonesia']

'''
Anda juga bisa menggunakan delimiter newline (\n) 
untuk memisahkan setiap baris pada string multiline.
'''

print('''Halo,
aku ikan,
aku suka sekali menyelam
aku tinggal di perairan.
Badanku licin dan renangku cepat.
Senang berkenalan denganmu.'''.split('\n')) #['Halo,', 'aku ikan,', 'aku suka sekali menyelam', 'aku tinggal di perairan.', 'Badanku licin dan renangku cepat.', 'Senang berkenalan denganmu.']

# replace()
string = "Ayo belajar Coding di Dicoding"
print(string.replace("Coding", "Pemrograman")) #Ayo belajar Pemrograman di Dicoding

# isupper()
kata = 'DICODING'
print(kata.isupper()) #True

# islower()
kata = 'dicoding'
print(kata.islower()) #True

# isalpha()
kata = 'dicoding'
print(kata.isalpha()) #True

# isalnum()
kata = 'dicoding123'
print(kata.isalnum()) #True

# isdecimal()
print('123'.isdecimal()) #True

# isspace()
print('         '.isspace()) #True

# istitle()
print('Dicoding Indonesia'.istitle()) #True

# zfill()
teks = 'Code'
tambah_number = teks.zfill(5)
print(tambah_number) #000Code

# rjust()
print('Dicoding'.rjust(20)) #               Dicoding
print('Dicoding'.rjust(20, '*')) #**************Dicoding

# ljust()
print('Dicoding'.ljust(20)) #Dicoding               
print('Dicoding'.ljust(20, '*')) #Dicoding**************

# center()
print('Dicoding'.center(20)) #       Dicoding       
print('Dicoding'.center(20, '*')) #*******Dicoding******

# raw string 
print(r'Dicoding\tIndonesia') #Dicoding\tIndonesia



