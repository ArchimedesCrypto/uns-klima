"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC721Upgradeable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50611112806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b3578063b88d4fde146101c6578063c87b56dd146101d9578063e985e9c5146101ec57600080fd5b80636352211e1461017757806370a082311461018a57806395d89b41146101ab57600080fd5b806301ffc9a7146100d457806306fdde03146100fc578063081812fc14610111578063095ea7b31461013c57806323b872dd1461015157806342842e0e14610164575b600080fd5b6100e76100e2366004610e39565b610228565b60405190151581526020015b60405180910390f35b61010461027a565b6040516100f39190610f21565b61012461011f366004610e71565b61030c565b6040516001600160a01b0390911681526020016100f3565b61014f61014a366004610e10565b610333565b005b61014f61015f366004610cc6565b61044e565b61014f610172366004610cc6565b61047f565b610124610185366004610e71565b61049a565b61019d610198366004610c7a565b6104fa565b6040519081526020016100f3565b610104610580565b61014f6101c1366004610dd6565b61058f565b61014f6101d4366004610d01565b61059e565b6101046101e7366004610e71565b6105d6565b6100e76101fa366004610c94565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061025957506001600160e01b03198216635b5e139f60e01b145b8061027457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606065805461028990611043565b80601f01602080910402602001604051908101604052809291908181526020018280546102b590611043565b80156103025780601f106102d757610100808354040283529160200191610302565b820191906000526020600020905b8154815290600101906020018083116102e557829003601f168201915b5050505050905090565b60006103178261064a565b506000908152606960205260409020546001600160a01b031690565b600061033e8261049a565b9050806001600160a01b0316836001600160a01b031614156103b15760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806103cd57506103cd81336101fa565b61043f5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016103a8565b61044983836106ac565b505050565b610458338261071a565b6104745760405162461bcd60e51b81526004016103a890610f86565b610449838383610799565b6104498383836040518060200160405280600081525061059e565b6000818152606760205260408120546001600160a01b0316806102745760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103a8565b60006001600160a01b0382166105645760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016103a8565b506001600160a01b031660009081526068602052604090205490565b60606066805461028990611043565b61059a338383610935565b5050565b6105a8338361071a565b6105c45760405162461bcd60e51b81526004016103a890610f86565b6105d084848484610a04565b50505050565b60606105e18261064a565b60006105f860408051602081019091526000815290565b905060008151116106185760405180602001604052806000815250610643565b8061062284610a37565b604051602001610633929190610eb5565b6040516020818303038152906040525b9392505050565b6000818152606760205260409020546001600160a01b03166106a95760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103a8565b50565b600081815260696020526040902080546001600160a01b0319166001600160a01b03841690811790915581906106e18261049a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806107268361049a565b9050806001600160a01b0316846001600160a01b0316148061076d57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b806107915750836001600160a01b03166107868461030c565b6001600160a01b0316145b949350505050565b826001600160a01b03166107ac8261049a565b6001600160a01b0316146108105760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016103a8565b6001600160a01b0382166108725760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103a8565b61087d6000826106ac565b6001600160a01b03831660009081526068602052604081208054600192906108a6908490611000565b90915550506001600160a01b03821660009081526068602052604081208054600192906108d4908490610fd4565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031614156109975760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103a8565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610a0f848484610799565b610a1b84848484610b51565b6105d05760405162461bcd60e51b81526004016103a890610f34565b606081610a5b5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610a855780610a6f8161107e565b9150610a7e9050600a83610fec565b9150610a5f565b60008167ffffffffffffffff811115610aae57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610ad8576020820181803683370190505b5090505b841561079157610aed600183611000565b9150610afa600a86611099565b610b05906030610fd4565b60f81b818381518110610b2857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610b4a600a86610fec565b9450610adc565b60006001600160a01b0384163b15610c5357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610b95903390899088908890600401610ee4565b602060405180830381600087803b158015610baf57600080fd5b505af1925050508015610bdf575060408051601f3d908101601f19168201909252610bdc91810190610e55565b60015b610c39573d808015610c0d576040519150601f19603f3d011682016040523d82523d6000602084013e610c12565b606091505b508051610c315760405162461bcd60e51b81526004016103a890610f34565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610791565b506001949350505050565b80356001600160a01b0381168114610c7557600080fd5b919050565b600060208284031215610c8b578081fd5b61064382610c5e565b60008060408385031215610ca6578081fd5b610caf83610c5e565b9150610cbd60208401610c5e565b90509250929050565b600080600060608486031215610cda578081fd5b610ce384610c5e565b9250610cf160208501610c5e565b9150604084013590509250925092565b60008060008060808587031215610d16578081fd5b610d1f85610c5e565b9350610d2d60208601610c5e565b925060408501359150606085013567ffffffffffffffff80821115610d50578283fd5b818701915087601f830112610d63578283fd5b813581811115610d7557610d756110d9565b604051601f8201601f19908116603f01168101908382118183101715610d9d57610d9d6110d9565b816040528281528a6020848701011115610db5578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215610de8578182fd5b610df183610c5e565b915060208301358015158114610e05578182fd5b809150509250929050565b60008060408385031215610e22578182fd5b610e2b83610c5e565b946020939093013593505050565b600060208284031215610e4a578081fd5b8135610643816110ef565b600060208284031215610e66578081fd5b8151610643816110ef565b600060208284031215610e82578081fd5b5035919050565b60008151808452610ea1816020860160208601611017565b601f01601f19169290920160200192915050565b60008351610ec7818460208801611017565b835190830190610edb818360208801611017565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610f1790830184610e89565b9695505050505050565b6020815260006106436020830184610e89565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b60008219821115610fe757610fe76110ad565b500190565b600082610ffb57610ffb6110c3565b500490565b600082821015611012576110126110ad565b500390565b60005b8381101561103257818101518382015260200161101a565b838111156105d05750506000910152565b600181811c9082168061105757607f821691505b6020821081141561107857634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611092576110926110ad565b5060010190565b6000826110a8576110a86110c3565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146106a957600080fdfea164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class ERC721Upgradeable__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ERC721Upgradeable__factory = ERC721Upgradeable__factory;
ERC721Upgradeable__factory.bytecode = _bytecode;
ERC721Upgradeable__factory.abi = _abi;
