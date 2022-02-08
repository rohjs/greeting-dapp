# Greeting dApp

![image](https://user-images.githubusercontent.com/19285811/153019305-625f0fe9-bb29-4684-b364-4a4ab1a1edb8.png)

This repository follows a tutorial from [here](https://betterprogramming.pub/build-your-first-dapp-with-web3-js-9a7306d16a61).

## Requisites

Install `ganache-cli` and run.

```sh
npm i -g ganache-cli # or yarn add -g ganache-cli
# and run Ganache
ganache-cli
```

## Steps to follow

1. Install Metamask chrome extension in your browser.
2. Change network to Localhost 8545 in Metamask app.
3. Import accounts provided from Ganache.
4. Open `./client/index.html` using VSCode Live Server extension.
5. Connect dApp with accounts provided from Ganache.
6. Change input value and press the submit button.
7. Confirm the transaction.
8. 🎉 Yay! Greeting text is updated!