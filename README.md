# nodejs-b7web
Curso de NodeJS da B7Web

## Instalar as Dependências
`npm install`

## Rodar o Projeto
`npm start`

## Instalar o TypeScript como dependência de desenvolvimento para o projeto Node
`npm install -D typescript`

## Instalar o TypeScript como dependência de desenvolvimento global (em todos os projetos)
`npm install -g typescript`

## Verificar e compilar o arquivo TS
`npx tsc src/teste.ts`

## Criar o arquivo de configuração tsconfig.json
`npx tsc --init`

## No tscofing.json descomentar "outDir" e inserir a pasta onde ficarão os aruqivos compilados
`outDir: "./dist"`

## Compilar os arquivos que achar e colocar na pasta dist
`npx tsc`

## Após acrescentar o comando build na parte scripts do package.json, rodar o comando para compilar:
`npm run build`

## Instalar a lib ts-node (biblioteca utilizada para compilar e rodar ao mesmo tempo)
`npm i -D ts-node`

## User o ts-node - Já incluí no package.json, de forma que não preciso mais usar, posso usar apenas o npm install ;) 
`ts-node src/teste.ts`

## Habilitar o modo watch do Node 
 `node --watch src/outro.js`

## Inserir o TypeScript no modo watch
`npm i -D tsx`

### Rodar o Modo Watch
`node --import=tsx --watch src/outro.ts`

## Dependência do TypeScript para Node
`npm i -D @types/node`

## Dependência do Express
`npm i express`

## Dependência do Express
`npm i express`

### Dependência TypeScript do Express
`npm i -D @types/express`

## Dependência do Helmet
`npm i helmet`