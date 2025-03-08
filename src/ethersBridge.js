import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x2a34685e96E642FB790Fe0F7E6FbdcA5cCAAe123";
const CONTRACT_ABI = [
    "function deposit() public payable",
    "function withdraw(uint256 amount) public"
];

export const getContract = async () => {
    if (!window.ethereum) throw new Error("MetaMask is required!");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
};

export const depositFunds = async (amount) => {
    try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const contract = await getContract();
        const tx = await contract.deposit({ value: ethers.utils.parseEther(amount) });
        await tx.wait();
        console.log("Deposit Successful!");
    } catch (error) {
        console.error("Error:", error.message);
    }
};

export const withdrawFunds = async (amount) => {
    try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const contract = await getContract();
        const tx = await contract.withdraw(ethers.utils.parseEther(amount));
        await tx.wait();
        console.log("Withdraw Successful!");
    } catch (error) {
        console.error("Error:", error.message);
    }
};
