
numbers = [1,2,2,3,3,3,4]

# d = []

# for i in numbers:


#     if i not in d:
#         count=numbers.count(i)
        
#         d.append(i)
        
#         print(f" {i} : {count}")
  

d = {}

for i in numbers:

    d[i] = d.get(i,0) + 1
print(d)








