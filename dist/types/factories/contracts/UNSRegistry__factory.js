"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "NewKey",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "NewURI",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "NewURIPrefix",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "RemoveReverse",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ResetRecords",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: true,
                internalType: "string",
                name: "valueIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        name: "Set",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "SetReverse",
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "BATCH_LIMIT",
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
        inputs: [],
        name: "NAME",
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
        inputs: [],
        name: "VERSION",
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
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "addKey",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "addProxyReader",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
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
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "depositData",
                type: "bytes",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "depositToPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
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
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
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
        name: "exists",
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
        inputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "get",
        outputs: [
            {
                internalType: "string",
                name: "value",
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
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getByHash",
        outputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
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
                name: "keyHash",
                type: "uint256",
            },
        ],
        name: "getKey",
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
                internalType: "uint256[]",
                name: "hashes",
                type: "uint256[]",
            },
        ],
        name: "getKeys",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getMany",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getManyByHash",
        outputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "mintingManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "cnsRegistry",
                type: "address",
            },
            {
                internalType: "address",
                name: "rootChainManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "childChainManager",
                type: "address",
            },
        ],
        name: "initialize",
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
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isApprovedOrOwner",
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
        inputs: [
            {
                internalType: "address",
                name: "forwarder",
                type: "address",
            },
        ],
        name: "isTrustedForwarder",
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
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "mintTLD",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        name: "mintWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "namehash",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
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
        name: "nonceOf",
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
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
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
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
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
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "reconfigure",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "removeReverse",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "reset",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "resolverOf",
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
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseOf",
        outputs: [
            {
                internalType: "uint256",
                name: "reverse",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "root",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
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
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "set",
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
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setByHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setMany",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setManyByHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
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
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "setReverse",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "setTokenURIPrefix",
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
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        name: "unlockWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
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
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verify",
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
        inputs: [
            {
                internalType: "bytes",
                name: "inputData",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        name: "withdrawFromPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50614d8e806100206000396000f3fe608060405234801561001057600080fd5b506004361061035d5760003560e01c80636ccbae5f116101d3578063b85afd2811610104578063ebf0c717116100a2578063f5c1f76e1161007c578063f5c1f76e146107d8578063f7df5c60146107eb578063f8c8765e146107fe578063ffa1ad741461081157600080fd5b8063ebf0c717146107b6578063ec129eea146107bd578063f25eb5c1146107d057600080fd5b8063c87b56dd116100de578063c87b56dd14610741578063ce92b33e14610754578063cf2c52cb14610767578063e985e9c51461077a57600080fd5b8063b85afd28146106fa578063b88d4fde1461071b578063bb5b27e11461072e57600080fd5b806395d89b4111610171578063a3f4df7e1161014b578063a3f4df7e14610695578063a4247400146106c1578063ab3b87fe146106d4578063b3f9e4cb146106e757600080fd5b806395d89b411461066757806399e0dd7c1461066f578063a22cb4651461068257600080fd5b80637e37479e116101ad5780637e37479e1461062657806394d008ef146106395780639508b1c41461064c5780639559c0bd1461065f57600080fd5b80636ccbae5f146105df57806370a08231146106005780637d67df631461061357600080fd5b8063384e9a55116102ad5780634f558e791161024b578063572b6c0511610225578063572b6c051461057c5780636352211e14610598578063638e5c78146105ab578063672b9f81146105be57600080fd5b80634f558e791461054357806350382c1a14610556578063509602391461056957600080fd5b806342966c681161028757806342966c68146104f7578063430c20811461050a57806347c816991461051d5780634a72584d1461053057600080fd5b8063384e9a55146104be57806340c10f19146104d157806342842e0e146104e457600080fd5b80631bd8cc1a1161031a57806323b872dd116102f457806323b872dd14610464578063276fabb11461047757806327f1897514610498578063310bd74b146104ab57600080fd5b80631bd8cc1a1461041e5780631be5e7ed1461043e5780631bf7e13e1461045157600080fd5b806301ffc9a71461036257806306fdde031461038a578063081812fc1461039f578063095ea7b3146103ca5780630dee3b5c146103df578063150b7a02146103f2575b600080fd5b61037561037036600461438e565b610835565b60405190151581526020015b60405180910390f35b610392610846565b6040516103819190614898565b6103b26103ad36600461459c565b6108d8565b6040516001600160a01b039091168152602001610381565b6103dd6103d83660046140c1565b6108ff565b005b6103dd6103ed3660046140ec565b610954565b610405610400366004613ec3565b6109ca565b6040516001600160e01b03199091168152602001610381565b61043161042c36600461427c565b610b20565b6040516103819190614833565b61039261044c3660046144d6565b610c40565b61039261045f36600461453d565b610c8b565b6103dd610472366004613e83565b610d96565b61048a6104853660046141cd565b610e1c565b604051908152602001610381565b6103dd6104a636600461420c565b610e30565b6103dd6104b936600461459c565b610eab565b6103dd6104cc36600461459c565b610f19565b6103dd6104df3660046140c1565b610fd8565b6103dd6104f2366004613e83565b611025565b6103dd61050536600461459c565b611040565b6103756105183660046140c1565b6110b7565b6103dd61052b366004614478565b6110c3565b6103dd61053e3660046145e4565b611135565b61037561055136600461459c565b6111a6565b6103dd61056436600461450b565b6111c5565b6103dd610577366004613db8565b6111fb565b61037561058a366004613db8565b6001600160a01b0316301490565b6103b26105a636600461459c565b61125b565b6103dd6105b936600461459c565b6112bb565b6105d16105cc366004614634565b611306565b6040516103819291906148ab565b61048a6105ed36600461459c565b6000908152610100602052604090205490565b61048a61060e366004613db8565b61131e565b6103dd610621366004613f9c565b6113a4565b61048a610634366004613db8565b611423565b6103dd610647366004614174565b611454565b6103dd61065a3660046143c6565b6114a3565b61048a601481565b61039261152a565b6103dd61067d366004614445565b611539565b6103dd610690366004614044565b6115bf565b6103926040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b6103756106cf36600461453d565b6115d1565b6103dd6106e23660046140c1565b61161c565b6103b26106f536600461459c565b611694565b61070d61070836600461427c565b6116be565b604051610381929190614846565b6103dd610729366004613f33565b611826565b61039261073c36600461459c565b6118a0565b61039261074f36600461459c565b611942565b6103dd61076236600461420c565b6119a8565b6103dd61077536600461406f565b611a1a565b610375610788366004613df0565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b600061048a565b6103dd6107cb36600461420c565b611af7565b6103dd611b69565b6104316107e63660046141cd565b611bef565b6103dd6107f93660046145b4565b611ccc565b6103dd61080c366004613e28565b611d5d565b61039260405180604001604052806005815260200164302e362e3160d81b81525081565b600061084082611f33565b92915050565b60606065805461085590614c90565b80601f016020809104026020016040519081016040528092919081815260200182805461088190614c90565b80156108ce5780601f106108a3576101008083540402835291602001916108ce565b820191906000526020600020905b8154815290600101906020018083116108b157829003601f168201915b5050505050905090565b60006108e382611f83565b506000908152606960205260409020546001600160a01b031690565b803033141561093c57610910611fe2565b81146109375760405162461bcd60e51b815260040161092e906149b2565b60405180910390fd5b610945565b61094581611ff7565b61094f8383612025565b505050565b610134546001600160a01b0316610969612148565b6001600160a01b03161461098f5760405162461bcd60e51b815260040161092e9061496b565b61099885612157565b6109ab6109a48661125b565b87876121c4565b6109b8848484848961236b565b6109c286866123f5565b505050505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b03166109ff612148565b6001600160a01b03161415610ac157610a16612148565b6001600160a01b03166342966c68856040518263ffffffff1660e01b8152600401610a4391815260200190565b600060405180830381600087803b158015610a5d57600080fd5b505af1158015610a71573d6000803e3d6000fd5b505050821580159150610a8b5750610a8b8284018461435c565b15610aa957610a9a3085612436565b610aa48585612584565b610ab3565b610ab38585612436565b50630a85bd0160e11b610b17565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b606482015260840161092e565b95945050505050565b6060826001600160401b03811115610b4857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610b7b57816020015b6060815260200190600190039081610b665790505b50905060005b83811015610c3857610bfa858583818110610bac57634e487b7160e01b600052603260045260246000fd5b9050602002810190610bbe9190614a76565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250612625915050565b828281518110610c1a57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610c3090614cc5565b915050610b81565b509392505050565b6060610c8384848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869250612625915050565b949350505050565b606060005a9050610c9d8585856115d1565b610cf95760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b606482015260840161092e565b610d8b610d096020870187613db8565b30604088013584610d1d60608b018b614a76565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061265a92505050565b9150505b9392505050565b80610da8610da2612148565b82612749565b610dc45760405162461bcd60e51b815260040161092e906148d0565b8130331415610df857610dd5611fe2565b8114610df35760405162461bcd60e51b815260040161092e906149b2565b610e01565b610e0181611ff7565b610e0a83612157565b610e158585856121c4565b5050505050565b6000610d8f610e2b8385614b50565b6127c7565b80610e3c610da2612148565b610e585760405162461bcd60e51b815260040161092e906148d0565b8130331415610e8c57610e69611fe2565b8114610e875760405162461bcd60e51b815260040161092e906149b2565b610e95565b610e9581611ff7565b610ea28787878787612824565b50505050505050565b80610eb7610da2612148565b610ed35760405162461bcd60e51b815260040161092e906148d0565b8130331415610f0757610ee4611fe2565b8114610f025760405162461bcd60e51b815260040161092e906149b2565b610f10565b610f1081611ff7565b61094f83612157565b80610f22612148565b6001600160a01b0316610f348261125b565b6001600160a01b031614610f8a5760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e4552000000604482015260640161092e565b8130331415610fbe57610f9b611fe2565b8114610fb95760405162461bcd60e51b815260040161092e906149b2565b610fc7565b610fc781611ff7565b61094f610fd2612148565b846128a3565b610fe06128eb565b6001600160a01b0316610ff1612148565b6001600160a01b0316146110175760405162461bcd60e51b815260040161092e90614a34565b6110218282612436565b5050565b61094f83838360405180602001604052806000815250611826565b8061104c610da2612148565b6110685760405162461bcd60e51b815260040161092e906148d0565b813033141561109c57611079611fe2565b81146110975760405162461bcd60e51b815260040161092e906149b2565b6110a5565b6110a581611ff7565b6110ae83612157565b61094f836129fe565b6000610d8f8383612749565b806110cf610da2612148565b6110eb5760405162461bcd60e51b815260040161092e906148d0565b813033141561111f576110fc611fe2565b811461111a5760405162461bcd60e51b815260040161092e906149b2565b611128565b61112881611ff7565b610ea28787878787612aa5565b80611141610da2612148565b61115d5760405162461bcd60e51b815260040161092e906148d0565b81303314156111915761116e611fe2565b811461118c5760405162461bcd60e51b815260040161092e906149b2565b61119a565b61119a81611ff7565b6109c286868686612b84565b6000818152606760205260408120546001600160a01b03161515610840565b6111f8816040516020016111d991906146fe565b6040516020818303038152906040528051906020012060001c82612c24565b50565b610134546001600160a01b0316611210612148565b6001600160a01b0316146112365760405162461bcd60e51b815260040161092e9061496b565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b0316806108405760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161092e565b806112c7610da2612148565b6112e35760405162461bcd60e51b815260040161092e906148d0565b6112f56112ee612148565b30846121c4565b611021611300612148565b83612584565b6060806113138484612c50565b909590945092505050565b60006001600160a01b0382166113885760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161092e565b506001600160a01b031660009081526068602052604090205490565b610134546001600160a01b03166113b9612148565b6001600160a01b0316146113df5760405162461bcd60e51b815260040161092e9061496b565b60006113ee610e2b8789614b50565b905061140c88826114076114028a8c614b50565b612c71565b612d0e565b611419858585858561236b565b5050505050505050565b6001600160a01b0381166000908152610135602052604081205461144681612d5a565b61144e578091505b50919050565b61145c6128eb565b6001600160a01b031661146d612148565b6001600160a01b0316146114935760405162461bcd60e51b815260040161092e90614a34565b61149d8484612436565b50505050565b6114ad8787612da4565b6114b5612148565b6001600160a01b03166114c78661125b565b6001600160a01b03161461151d5760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e4552000000604482015260640161092e565b610ea2848484848961236b565b60606066805461085590614c90565b610134546001600160a01b031661154e612148565b6001600160a01b0316146115745760405162461bcd60e51b815260040161092e9061496b565b6115816101338383613baf565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b82826040516115b3929190614884565b60405180910390a15050565b6110216115ca612148565b8383612e13565b6000610c836115df85614bc5565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612ee292505050565b80611628610da2612148565b6116445760405162461bcd60e51b815260040161092e906148d0565b813033141561167857611655611fe2565b81146116735760405162461bcd60e51b815260040161092e906149b2565b611681565b61168181611ff7565b61149d61168d8461125b565b85856121c4565b6000818152606760205260408120546001600160a01b03166116b7576000610840565b3092915050565b606080836001600160401b038111156116e757634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561171a57816020015b60608152602001906001900390816117055790505b509150836001600160401b0381111561174357634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561177657816020015b60608152602001906001900390816117615790505b50905060005b8481101561181d576117b48686838181106117a757634e487b7160e01b600052603260045260246000fd5b9050602002013585612c50565b8483815181106117d457634e487b7160e01b600052603260045260246000fd5b602002602001018484815181106117fb57634e487b7160e01b600052603260045260246000fd5b602002602001018290528290525050808061181590614cc5565b91505061177c565b50935093915050565b81611832610da2612148565b61184e5760405162461bcd60e51b815260040161092e906148d0565b82303314156118825761185f611fe2565b811461187d5760405162461bcd60e51b815260040161092e906149b2565b61188b565b61188b81611ff7565b61189484612157565b6109c28686868661303a565b600081815260c9602052604090208054606091906118bd90614c90565b80601f01602080910402602001604051908101604052809291908181526020018280546118e990614c90565b80156119365780601f1061190b57610100808354040283529160200191611936565b820191906000526020600020905b81548152906001019060200180831161191957829003601f168201915b50505050509050919050565b606061194d82611f83565b600061195761306d565b905060008151116119775760405180602001604052806000815250610d8f565b806119818461307d565b6040516020016119929291906147a5565b6040516020818303038152906040529392505050565b806119b4610da2612148565b6119d05760405162461bcd60e51b815260040161092e906148d0565b8130331415611a04576119e1611fe2565b81146119ff5760405162461bcd60e51b815260040161092e906149b2565b611a0d565b611a0d81611ff7565b610ea2878787878761236b565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611a4d612148565b6001600160a01b031614611a735760405162461bcd60e51b815260040161092e90614a34565b6020811415611a96576000611a8a8284018461459c565b905061149d8482612436565b6000611aa4828401846142c5565b805190915060005b818110156109c257611ae586848381518110611ad857634e487b7160e01b600052603260045260246000fd5b6020026020010151612436565b80611aef81614cc5565b915050611aac565b80611b03610da2612148565b611b1f5760405162461bcd60e51b815260040161092e906148d0565b8130331415611b5357611b30611fe2565b8114611b4e5760405162461bcd60e51b815260040161092e906149b2565b611b5c565b611b5c81611ff7565b610ea28787878787613196565b6000611b73612148565b6001600160a01b03811660009081526101356020526040902054909150611be65760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b606482015260840161092e565b6111f8816131ac565b6060816001600160401b03811115611c1757634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611c4a57816020015b6060815260200190600190039081611c355790505b50905060005b82811015611cc557611c87848483818110611c7b57634e487b7160e01b600052603260045260246000fd5b905060200201356118a0565b828281518110611ca757634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611cbd90614cc5565b915050611c50565b5092915050565b610134546001600160a01b0316611ce1612148565b6001600160a01b031614611d075760405162461bcd60e51b815260040161092e9061496b565b61013454611d1e906001600160a01b031684612436565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611d50929190614884565b60405180910390a2505050565b600054610100900460ff1615808015611d7d5750600054600160ff909116105b80611d975750303b158015611d97575060005460ff166001145b611dfa5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161092e565b6000805460ff191660011790558015611e1d576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611ec5916131f1565b611ecd61323f565b611ed561323f565b611ede83613268565b611ee782613298565b8015610e15576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611f6457506001600160e01b03198216635b5e139f60e01b145b8061084057506301ffc9a760e01b6001600160e01b0319831614610840565b6000818152606760205260409020546001600160a01b03166111f85760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161092e565b600030331415611ff45750601f193601355b90565b60008181526101006020526040902054612012906001614b0d565b6000918252610100602052604090912055565b60006120308261125b565b9050806001600160a01b0316836001600160a01b0316141561209e5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161092e565b806001600160a01b03166120b0612148565b6001600160a01b031614806120cc57506120cc81610788612148565b61213e5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161092e565b61094f83836132c8565b6000612152613336565b905090565b61216081613352565b60405160200161217291815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b03166121d78261125b565b6001600160a01b03161461223b5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161092e565b6001600160a01b03821661229d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161092e565b6122a883838361337e565b6122b36000826132c8565b6001600160a01b03831660009081526068602052604081208054600192906122dc908490614b39565b90915550506001600160a01b038216600090815260686020526040812080546001929061230a908490614b0d565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b848110156109c2576123e386868381811061239957634e487b7160e01b600052603260045260246000fd5b90506020028101906123ab9190614a76565b8686858181106123cb57634e487b7160e01b600052603260045260246000fd5b90506020028101906123dd9190614a76565b86612aa5565b806123ed81614cc5565b91505061236e565b61dead6001600160a01b0383161480159061242757506001600160a01b03821660009081526101356020526040902054155b156110215761102182826128a3565b6001600160a01b03821661248c5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161092e565b6000818152606760205260409020546001600160a01b0316156124f15760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161092e565b6124fd6000838361337e565b6001600160a01b0382166000908152606860205260408120805460019290612526908490614b0d565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600061258e6128eb565b905061259a81836132c8565b600080516020614d6283398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb916125f79188913091906044016147d4565b600060405180830381600087803b15801561261157600080fd5b505af1158015611419573d6000803e3d6000fd5b6060610d8f8360405160200161263b91906146fe565b6040516020818303038152906040528051906020012060001c8361341b565b606061266585611ff7565b600080876001600160a01b03168661267f8b8a89896134fd565b60405161268c91906146fe565b60006040518083038160008787f1925050503d80600081146126ca576040519150601f19603f3d011682016040523d82523d6000602084013e6126cf565b606091505b5090925090506126e0603f87614b25565b5a116126fc57634e487b7160e01b600052600160045260246000fd5b61273c82826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c454400000000000081525061352d565b9998505050505050505050565b6000806127558361125b565b9050806001600160a01b0316846001600160a01b0316148061279c57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610c835750836001600160a01b03166127b5846108d8565b6001600160a01b031614949350505050565b805160009081905b8015611cc55761281082856127e5600185614b39565b8151811061280357634e487b7160e01b600052603260045260246000fd5b6020026020010151613566565b91508061281c81614c79565b9150506127cf565b60005b848110156109c25761289186868381811061285257634e487b7160e01b600052603260045260246000fd5b9050602002013585858481811061287957634e487b7160e01b600052603260045260246000fd5b905060200281019061288b9190614a76565b85612b84565b8061289b81614cc5565b915050612827565b6001600160a01b03821660008181526101356020526040808220849055518392917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a35050565b600080600080516020614d628339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a69060240160206040518083038186803b15801561294457600080fd5b505afa158015612958573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061297c9190614376565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f96039060240160206040518083038186803b1580156129bf57600080fd5b505afa1580156129d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129f79190613dd4565b9250505090565b6000612a098261125b565b9050612a178160008461337e565b612a226000836132c8565b6001600160a01b0381166000908152606860205260408120805460019290612a4b908490614b39565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612aba929190614795565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612b0e9183918990899081908401838280828437600092019190915250612c2492505050565b6109c28187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981529250899150889081908401838280828437600092019190915250889250613613915050565b612b8d8461374e565b612bd95760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e4400000000604482015260640161092e565b61149d84612be6866118a0565b85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250613613915050565b612c2d8261374e565b61102157600082815260c960209081526040909120825161094f92840190613c2f565b606080612c5c846118a0565b9150612c68848461341b565b90509250929050565b6060600082600081518110612c9657634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600190505b8351811015611cc55781848281518110612cd157634e487b7160e01b600052603260045260246000fd5b6020026020010151604051602001612cea929190614759565b60405160208183030381529060405291508080612d0690614cc5565b915050612ca7565b612d188383612436565b817fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c395282604051612d489190614898565b60405180910390a261094f83836123f5565b6000818152610137602052604081205460ff16801561084057506101366000612d81612148565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b600080516020614d6283398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612de59086908690600401614884565b600060405180830381600087803b158015612dff57600080fd5b505af1158015610ea2573d6000803e3d6000fd5b816001600160a01b0316836001600160a01b03161415612e755760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161092e565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f9060240160206040518083038186803b158015612f2457600080fd5b505afa158015612f38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f5c9190614376565b9050600061300a866060015180519060200120868860200151604051602001612faa9392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b905081866020015114801561303057508551613030906001600160a01b03168286613774565b9695505050505050565b6130458484846121c4565b613051848484846138c4565b61149d5760405162461bcd60e51b815260040161092e90614919565b6060610133805461085590614c90565b6060816130a15750506040805180820190915260018152600360fc1b602082015290565b8160005b81156130cb57806130b581614cc5565b91506130c49050600a83614b25565b91506130a5565b6000816001600160401b038111156130f357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561311d576020820181803683370190505b5090505b8415610c8357613132600183614b39565b915061313f600a86614ce0565b61314a906030614b0d565b60f81b81838151811061316d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535061318f600a86614b25565b9450613121565b61319f81612157565b610e15858585858561236b565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff166132185760405162461bcd60e51b815260040161092e906149e9565b815161322b906065906020850190613c2f565b50805161094f906066906020840190613c2f565b600054610100900460ff166132665760405162461bcd60e51b815260040161092e906149e9565b565b600054610100900460ff1661328f5760405162461bcd60e51b815260040161092e906149e9565b6111f8816139d5565b600054610100900460ff166132bf5760405162461bcd60e51b815260040161092e906149e9565b6111f881613a2e565b600081815260696020526040902080546001600160a01b0319166001600160a01b03841690811790915581906132fd8261125b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60003033141561334d575060331936013560601c90565b503390565b600081815260cb60205260408120541561337a57600082815260cb6020526040902054610840565b5090565b6000818152610137602052604090205460ff1615806133a557506001600160a01b03821615155b6133f15760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f55504752414445440000000000000000604482015260640161092e565b6001600160a01b0383166000908152610135602052604090205481141561094f5761094f836131ac565b606061342682612d5a565b156134405750604080516020810190915260008152610840565b60ca600061344d84613352565b81526020019081526020016000206000848152602001908152602001600020805461347790614c90565b80601f01602080910402602001604051908101604052809291908181526020018280546134a390614c90565b80156134f05780601f106134c5576101008083540402835291602001916134f0565b820191906000526020600020905b8154815290600101906020018083116134d357829003601f168201915b5050505050905092915050565b60608285856040516020016135149392919061471a565b6040516020818303038152906040529050949350505050565b6060831561353c575081610d8f565b82511561354c5782518084602001fd5b8160405162461bcd60e51b815260040161092e9190614898565b60008151600014156135b25760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b604482015260640161092e565b82826040516020016135c491906146fe565b604051602081830303815290604052805190602001206040516020016135f4929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b60ca600061362083613352565b81526020019081526020016000206000858152602001908152602001600020805461364a90614c90565b151590506136a1578260405161366091906146fe565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516136989190614898565b60405180910390a35b8160ca60006136af84613352565b8152602001908152602001600020600086815260200190815260200160002090805190602001906136e1929190613c2f565b50816040516136f091906146fe565b60405180910390208360405161370691906146fe565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d9286866040516137409291906148ab565b60405180910390a450505050565b600081815260c960205260408120805482919061376a90614c90565b9050119050919050565b60008060006137838585613a7c565b909250905060008160048111156137aa57634e487b7160e01b600052602160045260246000fd5b1480156137c85750856001600160a01b0316826001600160a01b0316145b156137d857600192505050610d8f565b600080876001600160a01b0316631626ba7e60e01b888860405160240161380092919061486b565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161383e91906146fe565b600060405180830381855afa9150503d8060008114613879576040519150601f19603f3d011682016040523d82523d6000602084013e61387e565b606091505b5091509150818015613891575080516020145b80156138b857508051630b135d3f60e11b906138b69083016020908101908401614376565b145b98975050505050505050565b60006001600160a01b0384163b156139cd57836001600160a01b031663150b7a026138ed612148565b8786866040518563ffffffff1660e01b815260040161390f9493929190614800565b602060405180830381600087803b15801561392957600080fd5b505af1925050508015613959575060408051601f3d908101601f19168201909252613956918101906143aa565b60015b6139b3573d808015613987576040519150601f19603f3d011682016040523d82523d6000602084013e61398c565b606091505b5080516139ab5760405162461bcd60e51b815260040161092e90614919565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c83565b506001610c83565b600054610100900460ff166139fc5760405162461bcd60e51b815260040161092e906149e9565b80600080516020614d628339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613a555760405162461bcd60e51b815260040161092e906149e9565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613a0d565b600080825160411415613ab35760208301516040840151606085015160001a613aa787828585613ac2565b94509450505050613abb565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613af95750600090506003613ba6565b8460ff16601b14158015613b1157508460ff16601c14155b15613b225750600090506004613ba6565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613b76573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613b9f57600060019250925050613ba6565b9150600090505b94509492505050565b828054613bbb90614c90565b90600052602060002090601f016020900481019282613bdd5760008555613c23565b82601f10613bf65782800160ff19823516178555613c23565b82800160010185558215613c23579182015b82811115613c23578235825591602001919060010190613c08565b5061337a929150613ca3565b828054613c3b90614c90565b90600052602060002090601f016020900481019282613c5d5760008555613c23565b82601f10613c7657805160ff1916838001178555613c23565b82800160010185558215613c23579182015b82811115613c23578251825591602001919060010190613c88565b5b8082111561337a5760008155600101613ca4565b60008083601f840112613cc9578182fd5b5081356001600160401b03811115613cdf578182fd5b6020830191508360208260051b8501011115613abb57600080fd5b80358015158114613d0a57600080fd5b919050565b60008083601f840112613d20578182fd5b5081356001600160401b03811115613d36578182fd5b602083019150836020828501011115613abb57600080fd5b600082601f830112613d5e578081fd5b81356001600160401b03811115613d7757613d77614d20565b613d8a601f8201601f1916602001614aba565b818152846020838601011115613d9e578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215613dc9578081fd5b8135610d8f81614d36565b600060208284031215613de5578081fd5b8151610d8f81614d36565b60008060408385031215613e02578081fd5b8235613e0d81614d36565b91506020830135613e1d81614d36565b809150509250929050565b60008060008060808587031215613e3d578182fd5b8435613e4881614d36565b93506020850135613e5881614d36565b92506040850135613e6881614d36565b91506060850135613e7881614d36565b939692955090935050565b600080600060608486031215613e97578081fd5b8335613ea281614d36565b92506020840135613eb281614d36565b929592945050506040919091013590565b600080600080600060808688031215613eda578283fd5b8535613ee581614d36565b94506020860135613ef581614d36565b93506040860135925060608601356001600160401b03811115613f16578182fd5b613f2288828901613d0f565b969995985093965092949392505050565b60008060008060808587031215613f48578182fd5b8435613f5381614d36565b93506020850135613f6381614d36565b92506040850135915060608501356001600160401b03811115613f84578182fd5b613f9087828801613d4e565b91505092959194509250565b60008060008060008060006080888a031215613fb6578485fd5b8735613fc181614d36565b965060208801356001600160401b0380821115613fdc578687fd5b613fe88b838c01613cb8565b909850965060408a0135915080821115614000578384fd5b61400c8b838c01613cb8565b909650945060608a0135915080821115614024578384fd5b506140318a828b01613cb8565b989b979a50959850939692959293505050565b60008060408385031215614056578182fd5b823561406181614d36565b9150612c6860208401613cfa565b600080600060408486031215614083578081fd5b833561408e81614d36565b925060208401356001600160401b038111156140a8578182fd5b6140b486828701613d0f565b9497909650939450505050565b600080604083850312156140d3578182fd5b82356140de81614d36565b946020939093013593505050565b60008060008060008060808789031215614104578384fd5b863561410f81614d36565b95506020870135945060408701356001600160401b0380821115614131578586fd5b61413d8a838b01613cb8565b90965094506060890135915080821115614155578384fd5b5061416289828a01613cb8565b979a9699509497509295939492505050565b60008060008060608587031215614189578182fd5b843561419481614d36565b93506020850135925060408501356001600160401b038111156141b5578283fd5b6141c187828801613d0f565b95989497509550505050565b600080602083850312156141df578182fd5b82356001600160401b038111156141f4578283fd5b61420085828601613cb8565b90969095509350505050565b600080600080600060608688031215614223578283fd5b85356001600160401b0380821115614239578485fd5b61424589838a01613cb8565b9097509550602088013591508082111561425d578485fd5b5061426a88828901613cb8565b96999598509660400135949350505050565b600080600060408486031215614290578081fd5b83356001600160401b038111156142a5578182fd5b6142b186828701613cb8565b909790965060209590950135949350505050565b600060208083850312156142d7578182fd5b82356001600160401b038111156142ec578283fd5b8301601f810185136142fc578283fd5b803561430f61430a82614aea565b614aba565b80828252848201915084840188868560051b870101111561432e578687fd5b8694505b83851015614350578035835260019490940193918501918501614332565b50979650505050505050565b60006020828403121561436d578081fd5b610d8f82613cfa565b600060208284031215614387578081fd5b5051919050565b60006020828403121561439f578081fd5b8135610d8f81614d4b565b6000602082840312156143bb578081fd5b8151610d8f81614d4b565b60008060008060008060006080888a0312156143e0578081fd5b87356001600160401b03808211156143f6578283fd5b6144028b838c01613d0f565b909950975060208a0135965060408a0135915080821115614421578283fd5b61442d8b838c01613cb8565b909650945060608a0135915080821115614024578283fd5b60008060208385031215614457578182fd5b82356001600160401b0381111561446c578283fd5b61420085828601613d0f565b60008060008060006060868803121561448f578283fd5b85356001600160401b03808211156144a5578485fd5b6144b189838a01613d0f565b909750955060208801359150808211156144c9578485fd5b5061426a88828901613d0f565b6000806000604084860312156144ea578081fd5b83356001600160401b038111156144ff578182fd5b6142b186828701613d0f565b60006020828403121561451c578081fd5b81356001600160401b03811115614531578182fd5b610c8384828501613d4e565b600080600060408486031215614551578081fd5b83356001600160401b0380821115614567578283fd5b908501906080828803121561457a578283fd5b9093506020850135908082111561458f578283fd5b506140b486828701613d0f565b6000602082840312156145ad578081fd5b5035919050565b6000806000604084860312156145c8578081fd5b8335925060208401356001600160401b038111156140a8578182fd5b600080600080606085870312156145f9578182fd5b8435935060208501356001600160401b03811115614615578283fd5b61462187828801613d0f565b9598909750949560400135949350505050565b60008060408385031215614646578182fd5b50508035926020909101359150565b600081518084526020808501808196508360051b81019150828601855b8581101561469c57828403895261468a8483516146d2565b98850198935090840190600101614672565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600081518084526146ea816020860160208601614c4d565b601f01601f19169290920160200192915050565b60008251614710818460208701614c4d565b9190910192915050565b6000845161472c818460208901614c4d565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b6000835161476b818460208801614c4d565b601760f91b9083019081528351614789816001840160208801614c4d565b01600101949350505050565b8183823760009101908152919050565b600083516147b7818460208801614c4d565b8351908301906147cb818360208801614c4d565b01949350505050565b6001600160a01b03848116825283166020820152606060408201819052600090610b17908301846146d2565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090613030908301846146d2565b602081526000610d8f6020830184614655565b6040815260006148596040830185614655565b8281036020840152610d8b8185614655565b828152604060208201526000610c8360408301846146d2565b602081526000610c836020830184866146a9565b602081526000610d8f60208301846146d2565b6040815260006148be60408301856146d2565b8281036020840152610d8b81856146d2565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b60208082526017908201527f52656769737472793a20544f4b454e5f494e56414c4944000000000000000000604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b6000808335601e19843603018112614a8c578283fd5b8301803591506001600160401b03821115614aa5578283fd5b602001915036819003821315613abb57600080fd5b604051601f8201601f191681016001600160401b0381118282101715614ae257614ae2614d20565b604052919050565b60006001600160401b03821115614b0357614b03614d20565b5060051b60200190565b60008219821115614b2057614b20614cf4565b500190565b600082614b3457614b34614d0a565b500490565b600082821015614b4b57614b4b614cf4565b500390565b6000614b5e61430a84614aea565b808482526020808301925084368760051b87011115614b7b578485fd5b845b87811015614bb95781356001600160401b03811115614b9a578687fd5b614ba636828a01613d4e565b8652509382019390820190600101614b7d565b50919695505050505050565b600060808236031215614bd6578081fd5b604051608081016001600160401b038282108183111715614bf957614bf9614d20565b8160405284359150614c0a82614d36565b81835260208501356020840152604085013560408401526060850135915080821115614c34578384fd5b50614c4136828601613d4e565b60608301525092915050565b60005b83811015614c68578181015183820152602001614c50565b8381111561149d5750506000910152565b600081614c8857614c88614cf4565b506000190190565b600181811c90821680614ca457607f821691505b6020821081141561144e57634e487b7160e01b600052602260045260246000fd5b6000600019821415614cd957614cd9614cf4565b5060010190565b600082614cef57614cef614d0a565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146111f857600080fd5b6001600160e01b0319811681146111f857600080fdfebe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafea164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class UNSRegistry__factory extends ethers_1.ContractFactory {
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
exports.UNSRegistry__factory = UNSRegistry__factory;
UNSRegistry__factory.bytecode = _bytecode;
UNSRegistry__factory.abi = _abi;
