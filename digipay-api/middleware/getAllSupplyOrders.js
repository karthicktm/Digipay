/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');
const path = require('path');

const ccpPath = path.resolve(__dirname, '..', '..', 'basic-network', 'connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

async function getrfqlist() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.evaluateTransaction('getRFQList');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function getVendorList() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.evaluateTransaction('getVendorList');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}


async function getRfqAckVendorList() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.evaluateTransaction('getRfqAckVendorList','RFQ-101');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}



async function getVendorList() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.evaluateTransaction('getVendorList');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}


async function getRfqIssuedVendorList() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.evaluateTransaction('getRfqIssuedVendorList','RFQ-101');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}


async function getVendorList() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.evaluateTransaction('getVendorList');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}


async function createRfq() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.submitTransaction("createRfq","RFQ-210","Mysore Plant");
        
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        //var result1 = JSON.parse(result.toString());
        //return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}


async function vendorExists() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.evaluateTransaction('vendorExists','Vendor-4');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}


async function rfqExists() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.evaluateTransaction('rfqExists','RFQ-101');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}


async function readRfq()  {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.evaluateTransaction('readRfq','RFQ-101');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function issueRfq()  {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.evaluateTransaction('issueRfq','RFQ-101');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function issueRfq()  {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.submitTransaction('issueRfq','RFQ-101');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function deleteRfq()  {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.submitTransaction("deleteRfq","RFQ-210");
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function createVendor() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.submitTransaction("createVendor","Vendor-5","Amazon","Shopping");
        
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        //var result1 = JSON.parse(result.toString());
        //return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function closeRfq() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.submitTransaction("closeRfq","RFQ-120");
        
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        //var result1 = JSON.parse(result.toString());
        //return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function createVendor() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.submitTransaction("createVendor","Vendor-5","Amazon","Shopping");
        
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        //var result1 = JSON.parse(result.toString());
        //return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function selectRfqVendorList() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.submitTransaction("selectRfqVendorList",);
        
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        //var result1 = JSON.parse(result.toString());
        //return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function vendorExistingQuery() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.submitTransaction("vendorExistingQuery","RFQ-101","Vendor-1","1","submit");
        
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        //var result1 = JSON.parse(result.toString());
        //return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function selectRfqVendorList() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.submitTransaction("selectRfqVendorList",);
        
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        //var result1 = JSON.parse(result.toString());
        //return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function vendorNewQuery() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.submitTransaction("vendorNewQuery","RFQ-101","Vendor-1","submit","n");
        
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        //var result1 = JSON.parse(result.toString());
        //return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}


async function ackRfq() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('steelscm');

        // Evaluate the specified transaction.
        // queryOrder transaction - requires 1 argument, ex: ('queryOrder', 'ORDER-1')
        // queryAllOrders transaction - requires no arguments, ex: ('queryAllOrders')
        const result = await contract.submitTransaction("ackRfq","RFQ-101","Vendor-1");
        
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        //var result1 = JSON.parse(result.toString());
        //return result1;
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}
 //main();
module.exports.getrfqlist = getrfqlist;
module.exports.getVendorList = getVendorList;
module.exports.getRfqAckVendorList = getRfqAckVendorList;
module.exports.getRfqIssuedVendorList = getRfqIssuedVendorList;
module.exports.rfqExists = rfqExists;
module.exports.vendorExists = vendorExists;
module.exports.readRfq = readRfq;
module.exports.createRfq = createRfq;
module.exports.createVendor = createVendor;
module.exports.closeRfq = closeRfq;
module.exports.ackRfq = ackRfq;


module.exports.deleteRfq = deleteRfq;
module.exports.issueRfq = issueRfq;
module.exports.selectRfqVendorList = selectRfqVendorList;
module.exports.vendorExistingQuery = vendorExistingQuery;
module.exports.vendorNewQuery = vendorNewQuery;
module.exports.ackRfq = ackRfq;
//module.exports.get=main;


