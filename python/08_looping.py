# FOR Loop
var_list = [1,2,3,4,5,6,7,8,9,10]
for i in var_list:
    print(i) #1,2,3,4,5,6,7,8,9,10

for a in range(10):
    print(a) #0,1,2,3,4,5,6,7,8,9

# Start, Stop, Step
for b in range(1,10,2):
    print(b) #1,3,5,7,9

# WHILE Loop
counter = 1
while counter <= 5:
    print(counter) #1,2,3,4,5
    counter += 1    # Increment

# Nested Loop
for k in range(1, 3):
    for j in range(1, 3):
        print(k,j) #1 1
                   #1 2
                   #2 1
                   #2 2 

# Break 
for huruf in 'Dico ding':
    if huruf == ' ':
        break
    print('Huruf saat ini: {}'.format(huruf))

#Continue
for huruf in 'Dico ding':
    if huruf == ' ':
        continue
    print('Huruf saat ini: {}'.format(huruf))

# Else setelah For Loop
numbers = [1, 2, 3, 4, 5]

for num in numbers:
    if num == 6:
        print("Angka ditemukan! Program berhenti!")
        break
else:
    print("Angka tidak ditemukan.")

#Else setelah While Loop
count = 0

while count < 3:
    print("Dicoding Indonesia")
    count += 1
else:
    print("Blok else dieksekusi karena kondisi pada while salah (3<3 == False).")

# Pass
x = 10

if x > 5:
    pass
else:
    print("Nilai x tidak memenuhi kondisi")

# List Comprehension
angka = [1, 2, 3, 4]
pangkat = [n**2 for n in angka]
print(pangkat) #[1, 4, 9, 16]

