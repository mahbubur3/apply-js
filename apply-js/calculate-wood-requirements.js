function woodCalculation(charQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    let chairWoodQuantity = charQuantity * perChairWood;
    let tableWoodQuantity = tableQuantity * perTableWood;
    let bedWoodQuantity = bedQuantity * perBedWood;
    let totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
let optionOne = woodCalculation(4, 2, 2);
console.log(optionOne)


function desktopComponents(cpuQuantity, mbQuantity, ramQuantity, ssdQuantity, caseQuantity, psuQuantity, monitorQuantity, headsetQuantity, caseFanQuantity, mouseQuantity, keyboardQuantity, mousePadQuantity) {
    const perCpuPrice = 15900;
    const perMbPrice = 14000;
    const perRamPrice = 4200;
    const perSsdPrice = 4700;
    const perCasePrice = 6200;
    const perPsuPrice = 3700;
    const perMonitorPrice = 10200;
    const perHeadsetPrice = 3900;
    const perCaseFanPrice = 700;
    const perMousePrice = 1800;
    const perKeyboardPrice = 1500;
    const perMousepadPrice = 500;

    const cpuPrice = cpuQuantity * perCpuPrice;
    const mbPrice = mbQuantity * perMbPrice;
    const ramPrice = ramQuantity * perRamPrice;
    const ssdPrice = ssdQuantity * perSsdPrice;
    const casePrice = caseQuantity * perCasePrice;
    const psuPrice = psuQuantity * perPsuPrice;
    const monitorPrice = monitorQuantity * perMonitorPrice;
    const headsetPrice = headsetQuantity * perHeadsetPrice;
    const caseFanPrice = caseFanQuantity * perCaseFanPrice;
    const mousePrice = mouseQuantity * perMousePrice;
    const keyboardPrice = keyboardQuantity * perKeyboardPrice;
    const mousepadPrice = mousePadQuantity * perMousepadPrice;

    totalCost = cpuPrice + mbPrice + ramPrice + ssdPrice + casePrice + psuPrice + monitorPrice + headsetPrice + caseFanPrice + mousePrice + keyboardPrice + mousepadPrice;
    return totalCost;
}
const myDesktopPrice = desktopComponents(1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
console.log(myDesktopPrice);