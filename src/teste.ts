let nome: string = 'Bonieky';
let idade: number = 90;
let token: string = process.env.GOOGLE_DRIVE_TOKEN as string;

console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
console.log(`Conectando no Drive com o TOKEN: ${token}`);
