import Web3 from 'web3';
import contractABI from '../../contract/cupon-abi.json';
const contractAddress = '0x...';

let web3Instance = null;
let contractInstance = null;

export const initWeb3 = async () => {
  if (window.ethereum) {
    try {
      // 请求用户授权
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      web3Instance = new Web3(window.ethereum);

      contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
    } catch (error) {
      console.error('User denied account access');
    }
  } else {
    console.error('Web3 not found');
  }
};

export const publishCoupon = async (couponData) => {
  if (contractInstance) {
    try {
      await contractInstance.methods.publishCoupon(
        couponData.name,
        couponData.description,
        couponData.discountType,
        couponData.discountAmount,
        couponData.validFrom,
        couponData.validTo,
        couponData.conditions,
        couponData.maxUsagePerUser
      ).send({ from: '0xUserAddress' }); // Replace '0xUserAddress' with the user's actual address
    } catch (error) {
      console.error('Error:', error);
      // 添加错误处理逻辑
    }
  }
};

// 其他交互逻辑
