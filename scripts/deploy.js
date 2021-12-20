const main = async () => {

  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");

  const gameContract = await gameContractFactory.deploy(
    ["Mickey", "Goofy", "Donald"], // Names
    [
      "QmcEzQdEBvjUY4Ct372tKgfwMA6NHh1wRu4BmD31JU5p6M", // Images
      "Qme44JCTUPDk6r3hapK1926jst9Q8rBnm6bwkoijJUZu6H",
      "QmSUvzmD9Zy1dWD1nW3mYY13osocQYux7183x3JhS3Zb26",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    "Bezos", // Boss name
    "https://i.ibb.co/Jm2Jbsx/bezos.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );

  await gameContract.deployed();
  
  console.log("Contract deployed to:", gameContract.address);

  // let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();
  // console.log("Minted NFT #1");

  // txn = await gameContract.mintCharacterNFT(1);
  // await txn.wait();
  // console.log("Minted NFT #2");

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // // test for second attack
  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();
  // console.log("Minted NFT #3");

  // txn = await gameContract.mintCharacterNFT(1);
  // await txn.wait();
  // console.log("Minted NFT #4");

  // console.log("Done deploying and minting!");

  // Get the value of the NFT's URI.
  //   let returnedTokenUri = await gameContract.tokenURI(1);
  //   console.log("Token URI:", returnedTokenUri);
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
