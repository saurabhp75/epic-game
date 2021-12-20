const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Mickey", "Goofy", "Donald"], // Names
    [
      "https://i.ibb.co/0tRBG8D/Mickey-Mouse.png", // Images
      "https://i.ibb.co/LkCtc47/Goofy.png",
      "https://i.ibb.co/3MDN0Z3/Donald-Duck.png",
    ],
    [100, 200, 10], // HP values
    [100, 50, 25], // Attack damage values
    "Bezos", // Boss name
    "https://i.ibb.co/Jm2Jbsx/bezos.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // Mint an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the token URI of NFT with tokenId 1.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // test for second attack
  // txn = await gameContract.attackBoss();
  // await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
