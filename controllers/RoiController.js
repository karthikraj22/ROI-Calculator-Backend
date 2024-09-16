const RoiController = {};

RoiController.Calculate = async (req, res) => {
    try {
        const {
          totalEmployees,
          softwareApps,
          avgSoftwareLicenseCost,
          newSoftwareSolutionCost,
          exEmployees,
          avgOnboardingCost,
          contractorsEmployed,
          contractorHourlyRate,
          contractorWeeklyHours,
          avgEmployeeHourlyWage,
          manualTaskHoursPerWeek,
          manualTaskReduction,
          itSupportStaff,
          itTicketReduction,
          currentAnnualServerCosts,
          newAnnualServerCosts,
          implementationCost,
        } = req.body;
    
        // Ensure all inputs are numbers
        const totalEmployeesNum = parseFloat(totalEmployees);
        const softwareAppsNum = parseFloat(softwareApps);
        const avgSoftwareLicenseCostNum = parseFloat(avgSoftwareLicenseCost);
        const newSoftwareSolutionCostNum = parseFloat(newSoftwareSolutionCost);
        const exEmployeesNum = parseFloat(exEmployees);
        const avgOnboardingCostNum = parseFloat(avgOnboardingCost);
        const contractorsEmployedNum = parseFloat(contractorsEmployed);
        const contractorHourlyRateNum = parseFloat(contractorHourlyRate);
        const contractorWeeklyHoursNum = parseFloat(contractorWeeklyHours);
        const avgEmployeeHourlyWageNum = parseFloat(avgEmployeeHourlyWage);
        const manualTaskHoursPerWeekNum = parseFloat(manualTaskHoursPerWeek);
        const manualTaskReductionNum = parseFloat(manualTaskReduction);
        const itSupportStaffNum = parseFloat(itSupportStaff);
        const itTicketReductionNum = parseFloat(itTicketReduction);
        const currentAnnualServerCostsNum = parseFloat(currentAnnualServerCosts);
        const newAnnualServerCostsNum = parseFloat(newAnnualServerCosts);
        const implementationCostNum = parseFloat(implementationCost);
    
        // Calculations
        const productivityHoursSaved = (manualTaskHoursPerWeekNum * (manualTaskReductionNum / 100) * totalEmployeesNum * 52);
        
        const currentSoftwareCosts = softwareAppsNum * avgSoftwareLicenseCostNum;
        const softwareSavings = currentSoftwareCosts - newSoftwareSolutionCostNum;
    
        const currentOnboardingCosts = exEmployeesNum * avgOnboardingCostNum;
        const onboardingSavings = currentOnboardingCosts - currentOnboardingCosts;  // Assuming no change
    
        const currentContractorCosts = contractorsEmployedNum * contractorHourlyRateNum * contractorWeeklyHoursNum * 52;
        const contractorSavings = currentContractorCosts; // Assuming unchanged for now
    
        const currentITSupportCosts = itSupportStaffNum * avgEmployeeHourlyWageNum * 40 * 52;
        const newITSupportCosts = currentITSupportCosts * (1 - (itTicketReductionNum / 100));
        const itSupportSavings = currentITSupportCosts - newITSupportCosts;
    
        const infrastructureSavings = currentAnnualServerCostsNum - newAnnualServerCostsNum;
    
        const totalAnnualSavings = softwareSavings + onboardingSavings + itSupportSavings + infrastructureSavings;
        const totalCosts = implementationCostNum;
    
        const threeYearROI = ((totalAnnualSavings * 3) - totalCosts) / totalCosts * 100;
        const paybackPeriodMonths = (totalCosts / totalAnnualSavings) * 12;
    
        const recommendation = threeYearROI <= 0 ? "Re-evaluate or consider alternatives" : "Proceed";
    
        return res.status(200).json({
          roiPercentage: threeYearROI.toFixed(2) + '%',
          paybackPeriodMonths: paybackPeriodMonths.toFixed(2),
          annualSavings: totalAnnualSavings.toFixed(2),
          totalCosts: totalCosts.toFixed(2),
          productivityHoursSaved: productivityHoursSaved.toFixed(2),
          recommendation
        });
      } catch (error) {
        console.error('Error in ROI Calculation:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
  };


module.exports = RoiController;
