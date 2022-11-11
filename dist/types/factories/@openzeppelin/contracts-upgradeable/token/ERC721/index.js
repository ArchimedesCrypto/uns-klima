"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC721Upgradeable__factory = exports.IERC721ReceiverUpgradeable__factory = exports.ERC721Upgradeable__factory = exports.extensions = void 0;
exports.extensions = __importStar(require("./extensions"));
var ERC721Upgradeable__factory_1 = require("./ERC721Upgradeable__factory");
Object.defineProperty(exports, "ERC721Upgradeable__factory", { enumerable: true, get: function () { return ERC721Upgradeable__factory_1.ERC721Upgradeable__factory; } });
var IERC721ReceiverUpgradeable__factory_1 = require("./IERC721ReceiverUpgradeable__factory");
Object.defineProperty(exports, "IERC721ReceiverUpgradeable__factory", { enumerable: true, get: function () { return IERC721ReceiverUpgradeable__factory_1.IERC721ReceiverUpgradeable__factory; } });
var IERC721Upgradeable__factory_1 = require("./IERC721Upgradeable__factory");
Object.defineProperty(exports, "IERC721Upgradeable__factory", { enumerable: true, get: function () { return IERC721Upgradeable__factory_1.IERC721Upgradeable__factory; } });
