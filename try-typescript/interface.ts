interface Laptop {
    model: string,
    ram: number,
    storage: number,
    new?: boolean // ? means optional thakteo pare abar nao thakte pare
}

const apple: Laptop = {
    model: 'MacBook Air',
    ram: 16,
    storage: 512,
    new: true
}

const samsung: Laptop = {
    model: 'Galaxy Book Pro',
    ram: 8,
    storage: 256
}