function calculateNetSalary(basicSalary, benefits){
    const personalRelief = 2400;
    const shifRate = 0.0275;
    const nssfTier1Rate = 0.06;
    const nssfTier2Rate = 0.06;
    const nssfTier1Limit = 8000;
    const nssfTiear2Limit = 72000;

    const grossSalary = basicSalary + benefits;

    const tier1Contribution = nssfTier1Limit * nssfTier1Rate;
    let tier2Contribution = 0;
    if(grossSalary > nssfTier1Limit){
        tier2Contribution = Math.min(grossSalary, nssfTiear2Limit) - tier2Contribution * nssfTier2Rate;
    } 

    const nssfContribution = tier1Contribution + tier2Contribution;

    const shifContribution = grossSalary * shifRate;

    const taxableIncome = grossSalary - nssfContribution;


    let paye = 0;
    if (taxableIncome <= 24000){
        paye = taxableIncome * 0.10;
    }
    else if(taxableIncome <= 32333){
        paye = (24000*0.10)+ ((taxableIncome-24000)*0.25);
    }
    else if(taxableIncome <=500000){
        paye = (24000*0.10)+((32333-24000)*0.25)+((taxableIncome-32333)*0.30);
    }
    else if(taxableIncome <=800000){
        paye = (24000*0.10)+((32333-24000)*0.25)+((500000-32333)*0.30)+((taxableIncome-500000)*0.325);
    }
    else{
        paye = (24000*0.10)+((32333-24000)*0.25)+((500000-32333)*0.30)+((800000-500000)*0.325)+((taxableIncome-800000)*0.35);
    }

    paye -=personalRelief;
    paye = Math.max(paye, 0);


    const netSalary = grossSalary - (nssfContribution + shifContribution + paye);


    return{
        grossSalary:grossSalary,
        nssfContribution:nssfContribution,
        shifContribution:shifContribution,
        paye:paye,
        netSalary:netSalary,
    }

}