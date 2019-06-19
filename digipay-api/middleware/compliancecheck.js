'use strict';

const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');
const path = require('path');
const ccpPath = "local_fabric_connection.json";

//const ccpPath = path.resolve(__dirname, '..', '..', 'basic-network', 'connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');

const ccp = JSON.parse(ccpJSON);

async function connect_fabric(){
    const walletPath = path.join(process.cwd(), 'local_fabric_wallet');
    const wallet = new FileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);

    const userExists = await wallet.exists('admin');
        if (!userExists) {
            console.log('hai');
            console.log('An identity for the user "admin" does not exist in the wallet')
            return;
        }
    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: 'admin', discovery: { enabled: false } });
    const network = await gateway.getNetwork('mychannel');
    return network.getContract('tatasteel');
    
}

async function storeComplianceDetails(vendorId, vendorName, month, year, pfdetails, saldetails, tsdetails){
    try{
        const walletPath = path.join(process.cwd(), 'local_fabric_wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);
    
        const userExists = await wallet.exists('admin');
            if (!userExists) {
                console.log('hai');
                console.log('An identity for the user "admin" does not exist in the wallet')
                return;
            }
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'admin', discovery: { enabled: false } });
        const network = await gateway.getNetwork('mychannel');
            
        const sContract = network.getContract('tatasteel');
            console.log("Got the contract");
    const result = await sContract.evaluateTransaction("storeComplianceDetails",vendorId.toString('utf8'),vendorName.toString('utf8'),month.toString('utf8'),year.toString('utf8'),pfdetails.toString('utf8'),saldetails.toString('utf8'),tsdetails.toString('utf8'));
   // const result = await sContract.evaluateTransaction("storeComplianceDetails","111","134","april","2019","test","one","two");
    console.log(`Transaction has been submitted, result is: ${result.toString()}`);
        var result1 = JSON.parse(result.toString());
        return result1;
    }catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}

module.exports.storeComplianceDetails = storeComplianceDetails;
