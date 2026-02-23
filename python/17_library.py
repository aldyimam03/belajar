# import matplotlib.pyplot as plt

# # Data 
# x = [1, 2, 3, 4, 5]
# y = [2, 4, 6, 8, 10]

# # Membuat plot garis
# plt.plot(x, y)

# # Menambahkan judul dan label
# plt.title("Contoh Plot Garis")
# plt.xlabel("X-axis")
# plt.ylabel("Y-axis")

# # Menampilkan plot
# plt.show()

import seaborn as sns
import matplotlib.pyplot as plt
 
# Contoh data
tips = sns.load_dataset('tips')  # Memuat dataset tips dari Seaborn
 
# Contoh plot histogram
sns.histplot(tips['total_bill'], kde=True)
plt.title('Histogram Total Bill')
plt.xlabel('Total Bill')
plt.ylabel('Frequency')
plt.show()