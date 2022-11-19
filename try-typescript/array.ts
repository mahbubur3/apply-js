const friends: string[] = ['john', 'emmy', 'robert']
const friendSalaries: number[] = [2000, 5000, 3000]


let max = 0
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary
    }
}