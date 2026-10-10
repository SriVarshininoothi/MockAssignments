

numbers = [10, 50, 20, 80, 80, 30]


largest = float('-inf')

second_largest = float('-inf')

for i in numbers:

    if i > largest:
        second_largest = largest
        largest = i

    elif  i > second_largest and i != largest:

        second_largest = i

print(second_largest)