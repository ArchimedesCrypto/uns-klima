const { signTypedData } = require('../helpers/metatx');

const { utils } = ethers;

describe('RegistryForwarder', () => {
  let Registry, registry;
  let signers, owner, nonOwner, root;

  const receiverAddress = '0x1234567890123456789012345678901234567890';

  const getReason = (returnData) => {
    let reason;
    if (returnData && returnData.slice(2, 10).toString('hex') === '08c379a0') {
      var abiCoder = new utils.AbiCoder();
      reason = abiCoder.decode(['string'], '0x' + returnData.slice(10))[0];
    }
    return reason;
  }

  before(async () => {
    signers = await ethers.getSigners();
    [coinbase, owner, nonOwner, receiver, accessControl, operator] = signers;

    Registry = await ethers.getContractFactory('Registry');

    registry = await Registry.deploy();
    await registry.initialize();
    await registry.setTokenURIPrefix('/');

    root = await registry.root();
  })

  describe('meta-transferFrom', () => {
    it('should transfer using meta-transferFrom', async () => {
      const tok = await registry.childIdOf(root, 'meta_1591');
      await registry.mintSLD(owner.address, 'meta_1591');

      const req = {
        from: owner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData('transferFrom', [owner.address, receiverAddress, tok]),
      };
      const sig = await signTypedData(registry, owner, req);
      await registry.execute(req, sig);

      assert.equal(await registry.ownerOf(tok), receiverAddress);
    })

    it('should revert meta-transferFrom for non-onwer', async () => {
      const tok = await registry.childIdOf(root, 'meta_6458');
      await registry.mintSLD(owner.address, 'meta_6458');

      const req = {
        from: nonOwner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData('transferFrom', [nonOwner.address, receiverAddress, tok]),
      };
      const sig = await signTypedData(registry, nonOwner, req);
      const [success, ] = await registry.callStatic.execute(req, sig);
      expect(success).to.be.false;
    })
  })

  describe('meta-safeTransferFrom(address,address,uint256)', () => {
    it('should transfer using meta-safeTransferFrom', async () => {
      const tok = await registry.childIdOf(root, 'meta_10235');
      await registry.mintSLD(owner.address, 'meta_10235');

      const req = {
        from: owner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData(
          'safeTransferFrom(address,address,uint256)',
          [owner.address, receiverAddress, tok]
        ),
      };
      const sig = await signTypedData(registry, owner, req);
      await registry.execute(req, sig);

      assert.equal(await registry.ownerOf(tok), receiverAddress);
    })

    it('should revert meta-safeTransferFrom for non-onwer', async () => {
      const tok = await registry.childIdOf(root, 'meta_e5iuw');
      await registry.mintSLD(owner.address, 'meta_e5iuw');

      const req = {
        from: nonOwner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData(
          'safeTransferFrom(address,address,uint256)',
          [nonOwner.address, receiverAddress, tok]
        ),
      };
      const sig = await signTypedData(registry, nonOwner, req);
      const [success, ] = await registry.callStatic.execute(req, sig);
      expect(success).to.be.false;
    })
  })

  // TODO: add tests for safeTransferFrom(address,address,uint256,bytes)

  describe('meta-burn', () => {
    it('should burn using meta-burn', async () => {
      const tok = await registry.childIdOf(root, 'meta_ar093');
      await registry.mintSLD(owner.address, 'meta_ar093');

      const req = {
        from: owner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData('burn', [tok]),
      };
      const sig = await signTypedData(registry, owner, req);
      await registry.execute(req, sig);
  
      await expect(registry.ownerOf(tok)).to.be.revertedWith('ERC721: owner query for nonexistent token');
    })

    it('should revert meta-burn for non-onwer', async () => {
      const tok = await registry.childIdOf(root, 'meta_53dg3');
      await registry.mintSLD(owner.address, 'meta_53dg3');

      const req = {
        from: nonOwner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData('burn', [tok]),
      };
      const sig = await signTypedData(registry, nonOwner, req);
      const [success, ] = await registry.callStatic.execute(req, sig);
      expect(success).to.be.false;
    })
  })

  describe('meta-mintChild', () => {
    it('should mint using meta-mintChild', async () => {
      const tok = await registry.childIdOf(root, 'meta_2435fg');
      await registry.mintSLD(owner.address, 'meta_2435fg');

      const req = {
        from: owner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData('mintChild', [owner.address, tok, 'label']),
      };
      const sig = await signTypedData(registry, owner, req);
      await registry.execute(req, sig);

      const subTok = await registry.childIdOf(tok, 'label');
      assert.equal(await registry.ownerOf(subTok), owner.address);

      // transfer sub-domain by domain owner
      await registry.connect(owner).transferFrom(owner.address, receiverAddress, subTok);
      assert.equal(await registry.ownerOf(subTok), receiverAddress);
    })

    it('should revert meta-mintChild for non-onwer', async () => {
      const tok = await registry.childIdOf(root, 'meta_23fwsg');
      await registry.mintSLD(owner.address, 'meta_23fwsg');

      const req = {
        from: nonOwner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData('mintChild', [owner.address, tok, 'label']),
      };
      const sig = await signTypedData(registry, nonOwner, req);
      const [success, ] = await registry.callStatic.execute(req, sig);
      expect(success).to.be.false;
    })
  })

  describe('meta-transferFromChild', () => {
    it('should mint using transferFromChild', async () => {
      const tok = await registry.childIdOf(root, 'meta_oih245');
      await registry.mintSLD(owner.address, 'meta_oih245');

      const threeld = await registry.childIdOf(tok, 'label')
      await registry.connect(owner).mintChild(owner.address, tok, 'label')

      const req = {
        from: owner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData(
          'transferFromChild',
          [owner.address, receiverAddress, tok, 'label']
        ),
      };
      const sig = await signTypedData(registry, owner, req);
      await registry.execute(req, sig);

      assert.equal(await registry.ownerOf(threeld), receiverAddress);
      await registry.connect(owner).transferFrom(owner.address, '0x5678901234567890123456789012345678901234', tok);
    })

    it('should revert meta-transferFromChild for non-onwer', async () => {
      const tok = await registry.childIdOf(root, 'meta_dsvg34');
      await registry.mintSLD(owner.address, 'meta_dsvg34');

      const req = {
        from: nonOwner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData(
          'transferFromChild',
          [owner.address, receiverAddress, tok, 'label']
        ),
      };
      const sig = await signTypedData(registry, nonOwner, req);
      const [success, ] = await registry.callStatic.execute(req, sig);
      expect(success).to.be.false;
    })
  })

  describe('meta-safeTransferFromChild', () => {
    it('should mint using safeTransferFromChild', async () => {
      const tok = await registry.childIdOf(root, 'meta_we23r');
      await registry.mintSLD(owner.address, 'meta_we23r');

      const threeld = await registry.childIdOf(tok, 'label');
      await registry.connect(owner).mintChild(owner.address, tok, 'label');

      const req = {
        from: owner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData(
          'safeTransferFromChild(address,address,uint256,string)',
          [owner.address, receiverAddress, tok, 'label']  
        ),
      };
      const sig = await signTypedData(registry, owner, req);
      await registry.execute(req, sig);

      assert.equal(await registry.ownerOf(threeld), receiverAddress);
      await registry.connect(owner).transferFrom(owner.address, '0x5678901234567890123456789012345678901234', tok);
    })

    it('should revert meta-safeTransferFromChild for non-onwer', async () => {
      const tok = await registry.childIdOf(root, 'meta_kj345c');
      await registry.mintSLD(owner.address, 'meta_kj345c');

      const req = {
        from: nonOwner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData(
          'safeTransferFromChild(address,address,uint256,string)',
          [owner.address, receiverAddress, tok, 'label']
        ),
      };
      const sig = await signTypedData(registry, nonOwner, req);
      const [success, ] = await registry.callStatic.execute(req, sig);
      expect(success).to.be.false;
    })
  })

  describe('meta-burnChild', () => {
    it('should mint using burnChild', async () => {
      const tok = await registry.childIdOf(root, 'meta_sfhk2');
      await registry.mintSLD(owner.address, 'meta_sfhk2');

      const threeld = await registry.childIdOf(tok, 'label');
      await registry.connect(owner).mintChild(owner.address, tok, 'label');

      const req = {
        from: owner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData('burnChild', [tok, 'label']),
      };
      const sig = await signTypedData(registry, owner, req);
      await registry.execute(req, sig);

      await expect(registry.ownerOf(threeld)).to.be.revertedWith('ERC721: owner query for nonexistent token');
      await registry.connect(owner).transferFrom(owner.address, '0x5678901234567890123456789012345678901234', tok);
    })

    it('should revert meta-burnChild for non-onwer', async () => {
      const tok = await registry.childIdOf(root, 'meta_we2jh3');
      await registry.mintSLD(owner.address, 'meta_we2jh3');

      const req = {
        from: nonOwner.address,
        gas: '100000',
        tokenId: tok,
        nonce: Number(await registry.nonceOf(tok)),
        data: registry.interface.encodeFunctionData('burnChild', [tok, 'label']),
      };
      const sig = await signTypedData(registry, nonOwner, req);
      const [success, ] = await registry.callStatic.execute(req, sig);
      expect(success).to.be.false;
    })
  })

  describe('ABI-based tests', () => {
    const registryFuncs = () => {
      return Registry.interface.fragments
        .filter(x => x.type === 'function' && !['view', 'pure'].includes(x.stateMutability))
    }

    const buidRequest = async (fragment, from, reqId, paramsMap) => {
      const funcSig = funcFragmentToSig(fragment);
      const req = {
        from,
        gas: '200000',
        tokenId: reqId,
        nonce: Number(await registry.nonceOf(reqId || from)),
        data: registry.interface.encodeFunctionData(funcSig, fragment.inputs.map(x => paramsMap[x.name])),
      };
      return req;
    }

    const funcFragmentToSig = (fragment) => {
      return `${fragment.name}(${fragment.inputs.map(x => `${x.type} ${x.name}`).join(',')})`;
    };

    describe('Token-based functions', () => {
      const paramValueMap = {
        label: 'label',
        '_data': '0x',
        key: 'key1',
        value: 'value',
        keys: ['key1'],
        values: ['value1']
      }

      const getFuncs = () => {
        return registryFuncs()
          .filter(x => x.inputs.filter(i => i.name === 'tokenId').length);
      }

      const mintToken = async (fragment, owner, label) => {
        await registry.mintSLD(owner.address, label);
        if(['burnChild', 'safeTransferFromChild', 'transferFromChild'].includes(fragment.name)) {
          await registry.connect(owner)
            .mintChild(owner.address, paramValueMap.tokenId, paramValueMap.label);
        }
      }

      before(async () => {
        paramValueMap.from = owner.address;
        paramValueMap.to = receiver.address;
      })

      it('should execute all functions successfully', async () => {
        for(const func of getFuncs()) {
          const funcSigHash = utils.id(`${funcFragmentToSig(func)}_ok`);
          paramValueMap.tokenId = await registry.childIdOf(root, funcSigHash);
          await mintToken(func, owner, funcSigHash);

          const req = await buidRequest(func, owner.address, paramValueMap.tokenId, paramValueMap);
          const sig = await signTypedData(registry, owner, req);
          const [success, returnData] = await registry.callStatic.execute(req, sig);

          if(!success) {
            console.error(getReason(returnData));
          }
          expect(success).to.be.true;
        }
      })

      it('should revert execution of all token-based functions when used signature', async () => {
        for(const func of getFuncs()) {
          const funcSigHash = utils.id(`${funcFragmentToSig(func)}_doubleUse`);
          paramValueMap.tokenId = await registry.childIdOf(root, funcSigHash);
          await mintToken(func, owner, funcSigHash);

          const req = await buidRequest(func, owner.address, paramValueMap.tokenId, paramValueMap);
          const sig = await signTypedData(registry, owner, req);

          const [success, returnData] = await registry.callStatic.execute(req, sig);
          if(!success) {
            console.log(funcSig, func.inputs.map(x => paramValueMap[x.name]));
            console.error(getReason(returnData));
          }
          expect(success).to.be.true;

          await registry.execute(req, sig);

          await expect(registry.execute(req, sig)).to.be
            .revertedWith('RegistryForwarder: signature does not match request');
        }
      })

      it('should fail execution of all token-based functions when tokenId does not match', async () => {
        for(const func of getFuncs()) {
          const funcSig = funcFragmentToSig(func);
          const funcSigHash = utils.id(`${funcSig}_wrongToken`);

          paramValueMap.tokenId = await registry.childIdOf(root, funcSigHash);
          await mintToken(func, owner, funcSigHash);

          const tokenIdForwarder = await registry.childIdOf(root, utils.id(`_${funcSig}`));
          const req = await buidRequest(func, owner.address, tokenIdForwarder, paramValueMap);
          const sig = await signTypedData(registry, owner, req);
          const [success, returnData] = await registry.callStatic.execute(req, sig);

          expect(success).to.be.false;
          expect(getReason(returnData)).to.be.eql('ERC2771RegistryContext: TOKEN_INVALID');
        }
      })

      it('should fail execution of all token-based functions when tokenId is empty', async () => {
        for(const func of getFuncs()) {
          const funcSigHash = utils.id(`${funcFragmentToSig(func)}_emptyTokenId`);
          paramValueMap.tokenId = await registry.childIdOf(root, funcSigHash);
          await mintToken(func, owner, funcSigHash);

          const req = await buidRequest(func, owner.address, 0, paramValueMap);
          const sig = await signTypedData(registry, owner, req);
          const [success, returndata] = await registry.callStatic.execute(req, sig);

          expect(success).to.be.false;
          expect(getReason(returndata)).to.be.eql('ERC2771RegistryContext: TOKEN_INVALID');
        }
      })
    })

    describe('Non-Token functions', () => {
      const paramValueMap = {
        label: 'label',
        '_data': '0x',
        role: '0x1000000000000000000000000000000000000000000000000000000000000000',
        keys: ['key1'],
        values: ['value1'],
        approved: true,
        prefix: '/'
      };

      const excluded = [
        'execute',
        'initialize',
        'renounceController', // might influence tests
        'renounceMinter',     // might influence tests
        'renounceRole',       // might influence tests
        'grantRole',          // requires Default Admin role
        'revokeRole',         // requires Default Admin role
      ];

      before(async () => {
        paramValueMap.account = accessControl.address;
        paramValueMap.to = owner.address;
        paramValueMap.operator = operator.address;
      })

      const getFuncs = () => {
        return registryFuncs()
          .filter(x => !x.inputs.filter(i => i.name === 'tokenId').length)
          .filter(x => !excluded.includes(x.name));
      }

      it('should execute all functions successfully', async () => {
        for(const func of getFuncs()) {
          const funcSig = funcFragmentToSig(func);
          paramValueMap.label = utils.id(`${funcSig}_label`);

          const req = await buidRequest(func, coinbase.address, 0, paramValueMap);
          const sig = await signTypedData(registry, coinbase, req);
          const [success, returnData] = await registry.callStatic.execute(req, sig);

          if(!success) {
            console.log(funcSig, func.inputs.map(x => paramValueMap[x.name]));
            console.error(getReason(returnData));
          }
          expect(success).to.be.true;
        }
      })

      it('should revert execution of all functions when used signature', async () => {
        for(const func of getFuncs()) {
          const funcSig = funcFragmentToSig(func);
          paramValueMap.label = utils.id(`${funcSig}_doubleUse`);

          const tokenIdForwarder = await registry.childIdOf(root, utils.id(`_${funcSig}`));
          const req = await buidRequest(func, coinbase.address, tokenIdForwarder, paramValueMap);
          const sig = await signTypedData(registry, coinbase, req);

          const [success, returnData] = await registry.callStatic.execute(req, sig);
          if(!success) {
            console.log(funcSig, func.inputs.map(x => paramValueMap[x.name]));
            console.error(getReason(returnData));
          }
          expect(success).to.be.true;

          await registry.execute(req, sig);

          await expect(registry.execute(req, sig)).to.be
            .revertedWith('RegistryForwarder: signature does not match request');
        }
      })

      it('should revert execution of all functions when used signature and tokenId is empty', async () => {
        for(const func of getFuncs()) {
          const funcSig = funcFragmentToSig(func);
          paramValueMap.label = utils.id(`${funcSig}_doubleUse_0`);

          const nonce = await registry.nonceOf(coinbase.address);
          const req = await buidRequest(func, coinbase.address, 0, paramValueMap);
          const sig = await signTypedData(registry, coinbase, req);

          const [success, returnData] = await registry.callStatic.execute(req, sig);
          if(!success) {
            console.log(funcSig, func.inputs.map(x => paramValueMap[x.name]));
            console.error(getReason(returnData));
          }
          expect(success).to.be.true;

          await registry.execute(req, sig);

          expect(await registry.nonceOf(coinbase.address)).to.be.equal(nonce.add(1));
          await expect(registry.execute(req, sig)).to.be
            .revertedWith('RegistryForwarder: signature does not match request');
        }
      })
    })
  })
})
