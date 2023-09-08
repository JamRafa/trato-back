# Use uma imagem base do Node.js (substitua pela versão desejada)
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /trato-back

# Copie os arquivos do seu projeto (certifique-se de que está copiando apenas o que precisa)
COPY . .
ENV ACCESSTOKEN_SECRET = mirellaAMARELLAA
ENV REFRESHTOKEN_SECRET = FlamengoCampeao
# Execute o comando de instalação das dependências
RUN npm install

# Defina o comando de entrada para construir seu aplicativo (certifique-se de ter um script "build" definido no seu package.json)
ENTRYPOINT npm run build