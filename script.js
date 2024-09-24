// Funktion til at skifte mellem prisoptioner
function togglePriceInput() {
    const priceOption = document.getElementById('priceOption').value;
    const samePriceSection = document.getElementById('samePriceSection');
    const sizePriceSections = document.querySelectorAll('.sizePriceSection');

    if (priceOption === 'same') {
        samePriceSection.style.display = 'block';
        sizePriceSections.forEach(section => {
            section.style.display = 'none';
        });
    } else {
        samePriceSection.style.display = 'none';
        sizePriceSections.forEach(section => {
            section.style.display = 'block';
        });
    }
}

// Funktion til at tilføje en ny størrelsessektion
function addSizeSection(colorButton) {
    const sizeSections = colorButton.parentElement.querySelector('.sizeSections');
    const priceOption = document.getElementById('priceOption').value;

    const newSizeSection = document.createElement('div');
    newSizeSection.classList.add('size-section');
    newSizeSection.innerHTML = `
        <label>Størrelse:</label>
        <input type="text" class="sizeInput" placeholder="Indtast størrelse (f.eks. Small)" required>
        <div class="sizePriceSection" style="display: ${priceOption === 'different' ? 'block' : 'none'};">
            <label>Indkøbspris for denne størrelse (DKK):</label>
            <input type="number" class="sizePriceInput" placeholder="Indtast pris" min="0" step="0.01">
        </div>
        <label>Antal:</label>
        <input type="number" class="qtyInput" placeholder="Indtast antal" min="1" required>
        <button class="remove-btn" onclick="removeSizeSection(this)">Fjern Størrelse</button>
    `;
    sizeSections.appendChild(newSizeSection);

    // Opdater visningen af prisinputfeltet
    togglePriceInput();
}

// Funktion til at fjerne størrelsessektion
function removeSizeSection(button) {
    button.parentElement.remove();
}

// Funktion til at tilføje en ny tryksektion
function addPrintSection(printButton) {
    const printSections = printButton.parentElement.querySelector('.printSections');
    const newPrintSection = document.createElement('div');
    newPrintSection.classList.add('print-section', 'print-fields');
    newPrintSection.innerHTML = `
        <label>Produktionsmetode:</label>
        <select class="productionMethod" onchange="togglePrintArea(this)">
            <option value="screen_print">Serigrafi</option>
            <option value="transfer">Transfer</option>
            <option value="digital_transfer">Digital Transfer</option>
            <option value="embroidery">Broderi</option>
        </select>
        <label>Tryk Placering:</label>
        <select class="printLocation">
            <option value="none">Uden tryk</option>
            <option value="front">Foran</option>
            <option value="back">Ryg</option>
            <option value="left_sleeve">Venstre ærme</option>
            <option value="right_sleeve">Højre ærme</option>
            <option value="neck">Nakke</option>
            <option value="collar">Hals</option>
            <option value="lower_back">Lænd</option>
        </select>
        <label>Antal farver i trykket:</label>
        <select class="printColors">
            <option value="0">Ingen tryk</option>
            <option value="1">1 farve</option>
            <option value="2">2 farver</option>
            <option value="3">3 farver</option>
            <option value="4">4 farver</option>
        </select>
        <label>Enhedspris for tryk pr. stk. (DKK):</label>
        <input type="number" class="customPrintPrice" placeholder="Indtast enhedspris" min="0" step="0.01" required>
        <div class="printAreaSection" style="display: none;">
            <label>Trykareal (cm²):</label>
            <input type="number" class="printArea" placeholder="Indtast areal af trykket" min="0" step="1">
        </div>
        <button class="remove-btn" onclick="removePrintSection(this)">Fjern Tryk</button>
    `;
    printSections.appendChild(newPrintSection);
}

// Funktion til at fjerne tryksektion
function removePrintSection(button) {
    button.parentElement.remove();
}

// Funktion til at tilføje en ny farvesektion
function addColorSection() {
    const colorSections = document.getElementById('colorSections');
    const priceOption = document.getElementById('priceOption').value;

    const newColorSection = document.createElement('div');
    newColorSection.classList.add('color-section');
    newColorSection.innerHTML = `
        <h3>Produktfarve</h3>
        <div class="input-group">
            <label>Farve:</label>
            <input type="text" class="productColor" placeholder="Indtast produktets farve" required>
        </div>
        <div class="sizeSections">
            <div class="size-section">
                <label>Størrelse:</label>
                <input type="text" class="sizeInput" placeholder="Indtast størrelse (f.eks. Small)" required>
                <div class="sizePriceSection" style="display: ${priceOption === 'different' ? 'block' : 'none'};">
                    <label>Indkøbspris for denne størrelse (DKK):</label>
                    <input type="number" class="sizePriceInput" placeholder="Indtast pris" min="0" step="0.01">
                </div>
                <label>Antal:</label>
                <input type="number" class="qtyInput" placeholder="Indtast antal" min="1" required>
                <button class="remove-btn" onclick="removeSizeSection(this)">Fjern Størrelse</button>
            </div>
        </div>
        <button class="calculate-btn" onclick="addSizeSection(this)">Tilføj Størrelse</button>

        <!-- Tryksektioner inden for farve -->
        <div class="printSections">
            <h4>Tryk for denne farve</h4>
            <div class="print-section print-fields">
                <label>Produktionsmetode:</label>
                <select class="productionMethod" onchange="togglePrintArea(this)">
                    <option value="screen_print">Serigrafi</option>
                    <option value="transfer">Transfer</option>
                    <option value="digital_transfer">Digital Transfer</option>
                    <option value="embroidery">Broderi</option>
                </select>
                <label>Tryk Placering:</label>
                <select class="printLocation">
                    <option value="none">Uden tryk</option>
                    <option value="front">Foran</option>
                    <option value="back">Ryg</option>
                    <option value="left_sleeve">Venstre ærme</option>
                    <option value="right_sleeve">Højre ærme</option>
                    <option value="neck">Nakke</option>
                    <option value="collar">Hals</option>
                    <option value="lower_back">Lænd</option>
                </select>
                <label>Antal farver i trykket:</label>
                <select class="printColors">
                    <option value="0">Ingen tryk</option>
                    <option value="1">1 farve</option>
                    <option value="2">2 farver</option>
                    <option value="3">3 farver</option>
                    <option value="4">4 farver</option>
                </select>
                <label>Enhedspris for tryk pr. stk. (DKK):</label>
                <input type="number" class="customPrintPrice" placeholder="Indtast enhedspris" min="0" step="0.01" required>
                <div class="printAreaSection" style="display: none;">
                    <label>Trykareal (cm²):</label>
                    <input type="number" class="printArea" placeholder="Indtast areal af trykket" min="0" step="1">
                </div>
                <button class="remove-btn" onclick="removePrintSection(this)">Fjern Tryk</button>
            </div>
        </div>

        <button class="calculate-btn" onclick="addPrintSection(this)">Tilføj Tryk</button>

        <button class="remove-btn" onclick="removeColorSection(this)">Fjern Farve</button>
    `;
    colorSections.appendChild(newColorSection);

    // Opdater visningen af prisinputfelter
    togglePriceInput();
}

// Funktion til at fjerne en farvesektion
function removeColorSection(button) {
    button.parentElement.remove();
}

// Funktion til at vise/skjule printArea afhængigt af produktionsmetode
function togglePrintArea(selectElement) {
    const printAreaSection = selectElement.closest('.print-section').querySelector('.printAreaSection');
    if (selectElement.value === 'digital_transfer') {
        printAreaSection.style.display = 'block';
    } else {
        printAreaSection.style.display = 'none';
    }
}

// Funktion til at validere inputfelter
function validateInputs() {
    let isValid = true;
    const requiredFields = document.querySelectorAll('input[required], select[required]');
    requiredFields.forEach(field => {
        if (!field.value || (field.type === 'number' && field.value <= 0)) {
            isValid = false;
            field.classList.add('error'); // Tilføj en rød kant eller lignende for at vise fejlen
        } else {
            field.classList.remove('error');
        }
    });
    return isValid;
}

// Funktion til at beregne tilbuddet
function calculateOffer() {
    if (!validateInputs()) {
        document.getElementById('fullOfferText').innerText = 'Udfyld venligst alle felterne korrekt.';
        document.getElementById('internalDetails').innerText = '';
        return;
    }

    const priceOption = document.getElementById('priceOption').value;
    const customerName = document.getElementById('customerName').value || 'Kunde';
    const productTitle = document.getElementById('productTitle').value || '';
    const productNumber = document.getElementById('productNumber').value || '';
    const tshirtProfitPercent = parseFloat(document.getElementById('tshirtProfit').value) / 100;
    const printProfitPercent = parseFloat(document.getElementById('printProfit').value) / 100;
    const vatRate = parseFloat(document.getElementById('vatRate').value) / 100;
    const freightCost = parseFloat(document.getElementById('freightCost').value) || 0;
    const freightProfitPercent = parseFloat(document.getElementById('freightProfit').value) / 100 || 0;

    let tshirtPrice = 0;
    if (priceOption === 'same') {
        tshirtPrice = parseFloat(document.getElementById('tshirtPrice').value);
        if (isNaN(tshirtPrice) || tshirtPrice <= 0) {
            alert('Indtast venligst en gyldig indkøbspris for produktet.');
            return;
        }
    }

    // Startomkostninger for hver metode
    const screenPrintStartupCost = 220;
    const transferStartupCost = 270;
    const digitalTransferStartupCost = 270;
    const embroideryStartupCost = 295;

    // Indsamle data fra farvesektionerne
    const colorData = [];
    const colorSections = document.querySelectorAll('.color-section');

    for (let i = 0; i < colorSections.length; i++) {
        const colorSection = colorSections[i];
        const productColor = colorSection.querySelector('.productColor').value;
        const sizeData = [];
        const sizeSections = colorSection.querySelectorAll('.size-section');

        for (let j = 0; j < sizeSections.length; j++) {
            const sizeSection = sizeSections[j];
            const size = sizeSection.querySelector('.sizeInput').value;
            const qty = parseInt(sizeSection.querySelector('.qtyInput').value);
            let sizePrice = tshirtPrice;

            if (priceOption === 'different') {
                sizePrice = parseFloat(sizeSection.querySelector('.sizePriceInput').value);
                if (isNaN(sizePrice) || sizePrice <= 0) {
                    alert(`Indtast venligst en gyldig pris for størrelse ${size}.`);
                    return;
                }
            }

            if (size && qty > 0) {
                sizeData.push({ size, qty, sizePrice });
            } else {
                alert('Udfyld venligst alle størrelsesfelter korrekt.');
                return;
            }
        }

        // Indsamle trykdata for denne farve
        const printData = [];
        const printSections = colorSection.querySelectorAll('.print-section');

        for (let k = 0; k < printSections.length; k++) {
            const printSection = printSections[k];
            const method = printSection.querySelector('.productionMethod').value;
            const location = printSection.querySelector('.printLocation').value;
            const colors = parseInt(printSection.querySelector('.printColors').value);
            const customPrintPrice = parseFloat(printSection.querySelector('.customPrintPrice').value);
            const printAreaInput = printSection.querySelector('.printArea');
            const printArea = printAreaInput ? parseFloat(printAreaInput.value) : 0;

            let printCost = 0;
            let startupCosts = 0;

            // Beregn totalQty for farven (sum af alle størrelses qty)
            const totalQty = sizeData.reduce((total, item) => total + item.qty, 0);

            if (method === "screen_print") {
                startupCosts = screenPrintStartupCost * colors;
                printCost = customPrintPrice * totalQty;
            } else if (method === "transfer") {
                // Sikre, at antallet af farver er mellem 1 og 4
                if (colors < 1 || colors > 4) {
                    alert(`Antal farver for Transfer skal være mellem 1 og 4.`);
                    return;
                }
                startupCosts = transferStartupCost * colors;
                printCost = customPrintPrice * totalQty;
            } else if (method === "digital_transfer") {
                startupCosts = digitalTransferStartupCost;
                if (isNaN(printArea) || printArea <= 0) {
                    alert('Indtast venligst et gyldigt trykareal for Digital Transfer.');
                    return;
                }
                // Prisen afhænger af trykarealet
                if (printArea <= 25) {
                    printCost = 5.47 * totalQty;
                } else if (printArea <= 50) {
                    printCost = 5.78 * totalQty;
                } else if (printArea <= 100) {
                    printCost = 7.39 * totalQty;
                } else if (printArea <= 258) {
                    printCost = 10.16 * totalQty;
                } else {
                    alert('Trykarealet for Digital Transfer overstiger den maksimale grænse (258 cm²).');
                    return;
                }
            } else if (method === "embroidery") {
                startupCosts = embroideryStartupCost;
                printCost = 34.03 * totalQty;
            } else {
                // Standard til serigrafi, hvis ukendt metode
                startupCosts = screenPrintStartupCost * colors;
                printCost = customPrintPrice * totalQty;
            }

            const locationCost = printCost + startupCosts;
            const locationSalesPrice = locationCost * (1 + printProfitPercent);

            // Konvertering af trykplacering til læsbart format
            let locationText = '';
            switch (location) {
                case 'front':
                    locationText = 'Foran';
                    break;
                case 'back':
                    locationText = 'Ryg';
                    break;
                case 'left_sleeve':
                    locationText = 'Venstre ærme';
                    break;
                case 'right_sleeve':
                    locationText = 'Højre ærme';
                    break;
                case 'neck':
                    locationText = 'Nakke';
                    break;
                case 'collar':
                    locationText = 'Hals';
                    break;
                case 'lower_back':
                    locationText = 'Lænd';
                    break;
                default:
                    locationText = 'Andet';
            }

            // Konvertering af produktionsmetode til læsbart format
            let methodText = '';
            switch (method) {
                case 'screen_print':
                    methodText = 'Serigrafi';
                    break;
                case 'transfer':
                    methodText = 'Transfer';
                    break;
                case 'digital_transfer':
                    methodText = 'Digital Transfer';
                    break;
                case 'embroidery':
                    methodText = 'Broderi';
                    break;
                default:
                    methodText = 'Ukendt metode';
            }

            // Tilføj til printData
            printData.push({
                method: methodText,
                location: locationText,
                colors: colors,
                customPrintPrice: customPrintPrice,
                locationCost: locationCost,
                locationSalesPrice: locationSalesPrice,
                totalQty: totalQty
            });
        }

        if (productColor && sizeData.length > 0) {
            colorData.push({ productColor, sizes: sizeData, prints: printData });
        } else {
            alert('Udfyld venligst alle farvefelter korrekt.');
            return;
        }
    }

    // Beregn total antal produkter og salgspris
    let totalProductQty = 0;
    let totalProductCost = 0;
    let productSalesPrice = 0;
    let sizeLines = '';
    let printDetails = '';
    let printCostDetails = [];
    let totalPrintCost = 0;
    let totalPrintSalesPrice = 0;

    colorData.forEach(colorItem => {
        const productColor = colorItem.productColor;

        colorItem.sizes.forEach(item => {
            const totalCost = item.sizePrice * item.qty;
            const salesPricePerItem = item.sizePrice * (1 + tshirtProfitPercent);
            const salesPrice = salesPricePerItem * item.qty;
            totalProductQty += item.qty;
            totalProductCost += totalCost;
            productSalesPrice += salesPrice;
            sizeLines += `
                <tr>
                    <td>${productTitle} (${productColor}) - Størrelse: ${item.size}</td>
                    <td>${item.qty}</td>
                    <td>${salesPricePerItem.toFixed(2)} DKK</td>
                    <td>${salesPrice.toFixed(2)} DKK</td>
                </tr>
            `;
        });

        colorItem.prints.forEach(printItem => {
            const { method, location, colors, customPrintPrice, locationCost, locationSalesPrice, totalQty } = printItem;

            printDetails += `
                <tr>
                    <td>${method} - Tryk på ${location} (${colors} farver) - ${productColor}</td>
                    <td>${totalQty}</td>
                    <td>${(locationSalesPrice / totalQty).toFixed(2)} DKK</td>
                    <td>${locationSalesPrice.toFixed(2)} DKK</td>
                </tr>
            `;

            printCostDetails.push({
                color: productColor,
                method: method,
                location: location,
                colors: colors,
                startupCosts: (method === 'Serigrafi') ? screenPrintStartupCost * colors :
                               (method === 'Transfer') ? transferStartupCost * colors :
                               (method === 'Digital Transfer') ? digitalTransferStartupCost :
                               (method === 'Broderi') ? embroideryStartupCost : 0,
                printCostPerUnit: (method === 'Digital Transfer') ? '-' :
                                  (method === 'Broderi') ? '34.03' : customPrintPrice.toFixed(2),
                totalPrintCost: (method === 'Digital Transfer') ? (customPrintPrice * totalQty).toFixed(2) :
                               (method === 'Broderi') ? (34.03 * totalQty).toFixed(2) :
                               (customPrintPrice * totalQty).toFixed(2),
                totalCost: locationCost.toFixed(2),
                salesPrice: locationSalesPrice.toFixed(2),
                profitPercent: (printProfitPercent * 100).toFixed(2),
                qty: totalQty
            });

            // Opdater totals
            totalPrintCost += locationCost;
            totalPrintSalesPrice += locationSalesPrice;
        });
    });

    // Beregn fortjeneste på fragt
    const freightSalesPrice = freightCost * (1 + freightProfitPercent);

    const totalSalesExclVAT = productSalesPrice + totalPrintSalesPrice + freightSalesPrice;
    const vatAmount = totalSalesExclVAT * vatRate;
    const totalCostInclVAT = totalSalesExclVAT + vatAmount;

    // HTML format for tilbuddet
    const offerHTML = `
        <div class="offer-content">
            <h1>Tilbud</h1>
            <p>Kære ${customerName},</p>
            <p>Hermed dit tilbud på vores produkter:</p>

            <table>
                <tr>
                    <th>Beskrivelse</th>
                    <th>Antal</th>
                    <th>Enhedspris</th>
                    <th>Totalpris</th>
                </tr>
                ${sizeLines}
                ${printDetails}
                ${freightSalesPrice > 0 ? `
                <tr>
                    <td>Fragtomkostninger</td>
                    <td>-</td>
                    <td>-</td>
                    <td>${freightSalesPrice.toFixed(2)} DKK</td>
                </tr>` : ''}
                <tr class="total-row">
                    <td colspan="3"><strong>Totalpris ekskl. moms:</strong></td>
                    <td>${totalSalesExclVAT.toFixed(2)} DKK</td>
                </tr>
                <tr class="total-row">
                    <td colspan="3"><strong>Moms (${(vatRate * 100).toFixed(2)}%):</strong></td>
                    <td>${vatAmount.toFixed(2)} DKK</td>
                </tr>
                <tr class="total-row">
                    <td colspan="3"><strong>Totalpris inkl. moms:</strong></td>
                    <td>${totalCostInclVAT.toFixed(2)} DKK</td>
                </tr>
            </table>

            <p>Med venlig hilsen,</p>
            <p>Medegaard Grafisk</p>
            <p>info@medegaardgrafisk.dk | www.medegaardgrafisk.dk</p>
            <p>Tlf: 31 38 15 70</p>
        </div>
    `;

    // Indsæt HTML i elementet til kundetilbuddet
    document.getElementById('fullOfferText').innerHTML = offerHTML;

    // Interne beregninger
    const grossProfit = totalSalesExclVAT - (totalProductCost + totalPrintCost + freightCost);
    const grossMarginPercent = (grossProfit / totalSalesExclVAT) * 100;

    const internalHTML = `
        <div class="internal-content">
            <h2>Interne Beregninger</h2>
            <p><strong>Varenummer:</strong> ${productNumber}</p>
            <h3>Produktomkostninger</h3>
            <table>
                <tr>
                    <th>Farve</th>
                    <th>Størrelse</th>
                    <th>Antal</th>
                    <th>Indkøbspris pr. stk.</th>
                    <th>Total Indkøbspris</th>
                </tr>
                ${colorData.map(colorItem => {
                    return colorItem.sizes.map(item => `
                        <tr>
                            <td>${colorItem.productColor}</td>
                            <td>${item.size}</td>
                            <td>${item.qty}</td>
                            <td>${item.sizePrice.toFixed(2)} DKK</td>
                            <td>${(item.sizePrice * item.qty).toFixed(2)} DKK</td>
                        </tr>
                    `).join('');
                }).join('')}
            </table>
            <p><strong>Total indkøbspris på produkter:</strong> <span class="highlight">${totalProductCost.toFixed(2)} DKK</span></p>
            <h3>Trykomkostninger</h3>
            <table>
                <tr>
                    <th>Farve</th>
                    <th>Metode</th>
                    <th>Placering</th>
                    <th>Farver</th>
                    <th>Startomk.</th>
                    <th>Trykpris pr. stk.</th>
                    <th>Trykpris i alt</th>
                    <th>Total Omkostning</th>
                </tr>
                ${printCostDetails.map(item => `
                    <tr>
                        <td>${item.color}</td>
                        <td>${item.method}</td>
                        <td>${item.location}</td>
                        <td>${item.colors}</td>
                        <td>${item.startupCosts.toFixed(2)} DKK</td>
                        <td>${item.printCostPerUnit}</td>
                        <td>${item.printCostPerUnit !== '-' ? (item.printCostPerUnit * item.qty).toFixed(2) + ' DKK' : '-'}</td>
                        <td>${item.totalCost} DKK</td>
                    </tr>
                `).join('')}
            </table>
            <p><strong>Total trykomkostninger:</strong> <span class="highlight">${totalPrintCost.toFixed(2)} DKK</span></p>
            ${freightCost > 0 ? `
            <h3>Fragtomkostninger</h3>
            <p><strong>Fragt (indkøbspris):</strong> ${freightCost.toFixed(2)} DKK</p>
            <p><strong>Fragt (salgspris):</strong> ${freightSalesPrice.toFixed(2)} DKK (Fortjeneste: ${(freightProfitPercent * 100).toFixed(2)}%)</p>
            ` : ''}
            <h3>Fortjeneste og Totaler</h3>
            <p><strong>Salgspris på produkter ekskl. moms:</strong> ${productSalesPrice.toFixed(2)} DKK (Fortjeneste: ${(tshirtProfitPercent * 100).toFixed(2)}%)</p>
            <p><strong>Salgspris på tryk ekskl. moms:</strong> ${totalPrintSalesPrice.toFixed(2)} DKK (Fortjeneste: ${(printProfitPercent * 100).toFixed(2)}%)</p>
            <p><strong>Bruttofortjeneste:</strong> ${productSalesPrice.toFixed(2)} DKK + ${totalPrintSalesPrice.toFixed(2)} DKK + ${freightSalesPrice.toFixed(2)} DKK - (${totalProductCost.toFixed(2)} DKK + ${totalPrintCost.toFixed(2)} DKK + ${freightCost.toFixed(2)} DKK) = <span class="highlight">${grossProfit.toFixed(2)} DKK</span></p>
            <p><strong>Bruttoavanceprocent:</strong> <span class="highlight">${grossMarginPercent.toFixed(2)}%</span></p>
            <h3>Totaler</h3>
            <p><strong>Total salgspris ekskl. moms:</strong> ${totalSalesExclVAT.toFixed(2)} DKK</p>
            <p><strong>Moms (${(vatRate * 100).toFixed(2)}%):</strong> ${vatAmount.toFixed(2)} DKK</p>
            <p><strong>Total pris inkl. moms:</strong> ${totalCostInclVAT.toFixed(2)} DKK</p>
        </div>
    `;

    document.getElementById('internalDetails').innerHTML = internalHTML;
}

// Funktion til at kopiere tilbud til clipboard
function copyOffer(format) {
    const offerContent = document.getElementById('fullOfferText').innerHTML;
    if (format === 'text') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = offerContent;
        const text = tempDiv.innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert('Tilbud kopieret som tekst!');
        }).catch(err => {
            alert('Kunne ikke kopiere tilbudtet: ', err);
        });
    } else if (format === 'html') {
        navigator.clipboard.writeText(offerContent).then(() => {
            alert('Tilbud kopieret som HTML!');
        }).catch(err => {
            alert('Kunne ikke kopiere tilbudtet: ', err);
        });
    }
}

// Funktion til at eksportere tilbuddet til PDF
function exportToPDF() {
    const offer = document.getElementById('fullOfferText');
    html2pdf().from(offer).save('tilbud.pdf');
}

// Kald togglePriceInput() ved indlæsning for at indstille den korrekte visning
document.addEventListener('DOMContentLoaded', () => {
    togglePriceInput();
});
