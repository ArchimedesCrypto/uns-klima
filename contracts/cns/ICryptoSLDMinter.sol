// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface ICryptoSLDMinter {
    /**
     * @dev Minter function that mints a Second Level Domain (SLD).
     * @param to address to mint the new SLD to.
     * @param label SLD label to mint.
     */
    function mintSLD(address to, string calldata label) external;

    /**
     * @dev Minter function that safely mints a Second Level Domain (SLD).
     * Implements a ERC721Reciever check unlike mintSLD.
     * @param to address to mint the new SLD to.
     * @param label SLD label to mint.
     */
    function safeMintSLD(address to, string calldata label) external;

    /**
     * @dev Minter function that safely mints a Second Level Domain (SLD).
     * Implements a ERC721Reciever check unlike mintSLD.
     * @param to address to mint the new SLD to.
     * @param label SLD label to mint.
     * @param _data bytes data to send along with a safe transfer check
     */
    function safeMintSLD(address to, string calldata label, bytes calldata _data) external;

    /**
     * @dev Minter function that mints a Second Level Domain (SLD) with resolver.
     * @param to address to mint the new SLD to.
     * @param label SLD label to mint.
     * @param resolver address.
     */
    function mintSLDWithResolver(address to, string memory label, address resolver) external;
}
