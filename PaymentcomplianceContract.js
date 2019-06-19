/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class PaymentcomplianceContract extends Contract {

    async storeComplianceDetails(ctx, vendorId, vendorName, month, year, tsGateEmpDetails, pfEmpDetails, vendorSalDetails ){
        console.log("Inside chaincode:"+vendorId, vendorName, month, year, tsGateEmpDetails, pfEmpDetails, vendorSalDetails);
        let complianceDoc ={
            vendorId : vendorId,
            vendorName : vendorName,
            month : month,
            year : year,
            tsGateEmpDetails : tsGateEmpDetails,
            pfEmpDetails : pfEmpDetails,
            vendorSalDetails : vendorSalDetails
        }
        const buffer = Buffer.from(JSON.stringify(complianceDoc));
        await ctx.stub.putState(vendorId+"_"+month+"_"+year, buffer);
        console.info("uploaded successfully");
    }

    async getComplianceDetails(ctx,vendorId,month,year)
    {
        const exists = await this.paymentcomplianceExists(ctx, vendorId+"_"+month+"_"+year);
        if (!exists) {
        const exists = await this.paymentcomplianceExists(ctx, vendorId+"_"+month+"_"+year);
            throw new Error(`The paymentcompliance Details ${vendorId} does not exist`);
        }
        const buffer = await ctx.stub.getState(vendorId+"_"+month+"_"+year);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    
}

module.exports = PaymentcomplianceContract;
