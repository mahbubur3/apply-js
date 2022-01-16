# number = [3, 4, 6, 8, 2, 10]
# print(number[3])
# number[2] = 56
# print(number)

# i = 1
# while i < 20:
#     print(i)
#     if i == 5:
#         break
#     i += 1

# fruits = ['apple', 'banana', 'cherry']
# for x in fruits:
#   print(x)

def fibo(x):
    a = 0
    b = 1
    print(0)
    print(1)

    for i in range(2, x):
        result = a + b
        a = b
        b = result
        print(result)
        
fibo(10)