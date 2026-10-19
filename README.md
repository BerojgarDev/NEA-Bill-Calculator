# NEA Bill Calculator 🇳🇵

> A fast and simple web app to calculate domestic electricity bills based on the official Nepal Electricity Authority (NEA) slab rates.

🔗 **Live Demo:** [https://berojgardev.github.io/NEA-Bill-Calculator/](https://berojgardev.github.io/NEA-Bill-Calculator/)

---

## 🌟 Overview

The **NEA Bill Calculator** helps domestic consumers in Nepal calculate their exact monthly electricity bill. Instead of manually calculating tariff slabs and minimum charges, users can simply enter their meter readings or total units to get a complete breakdown instantly.

---

## ⚡ Features

- **Automatic Unit Calculation:** Enter previous and current meter readings to automatically calculate total units consumed.
- **Slab-Based Tariff Breakdown:** Accurately applies NEA's tiered rates for domestic consumption.
- **Service & Minimum Charge:** Includes the fixed monthly service charge.
- **Responsive UI:** Clean, simple, and fully responsive across mobile and desktop devices.

---

## 🧮 Calculation Logic & Tariff System

The **NEA Bill Calculator** implements the official Nepal Electricity Authority (Nepal Tariffs) domestic calculation rules, slab breakdowns, service charges, and VAT criteria.

---

### 📋 Step-by-Step Calculation Workflow

1. **Unit Consumption:** 
   $$\text{Total Units} = \text{Current Reading} - \text{Previous Reading}$$
2. **Energy Charge Slabs:** 
   Energy charges are calculated tier-by-tier based on the consumer category (e.g., Single Phase 5 Ampere, 15 Ampere, etc.). 
   > *Note (5 Ampere Special Rule):* If a 5 Ampere consumer exceeds 20 kWh total units, the first 20 units are billed at the special rate of **Rs. 3.00 per unit**.
3. **Minimum Charge:** 
   Applied according to the meter type and total consumption slab defined by NEA rules.
4. **VAT Calculation (New Rule for $>50$ Units):**
   - **VAT-Free Amount:** Calculated for the first 50 units (consumption up to 50 units is exempt from VAT).
   - **Taxable Amount:** $\text{Total Energy Charges} - \text{VAT-Free Amount}$
   - **VAT Amount:** $5\%$ of the taxable amount for domestic households.
5. **Final Bill Amount:**
   $$\text{Bill Amount} = \text{Total Energy Charges} + \text{Minimum Charges} + \text{VAT Amount}$$

---

### 📝 Example Calculation (5 Ampere / Domestic Meter)

* **Current Reading:** 1345
* **Previous Reading:** 1215
* **Total Units Consumed:** $1345 - 1215 = 130 \text{ units}$

#### 1. Energy Charges Breakdown (130 Units):
* First 20 units (at Rs. 3.00): $20 \times 3.00 = 60$
* Next 10 units (21–30): $10 \times 6.50 = 65$
* Next 20 units (31–50): $20 \times 8.00 = 160$
* Next 50 units (51–100): $50 \times 9.50 = 475$
* Remaining 30 units (101–130): $30 \times 9.50 = 285$
* **Total Energy Charges = Rs. 1,045**

#### 2. Minimum & Total Base Amount:
* **Minimum Charge:** Rs. 100
* **Total Base Amount:** $1045 + 100 = \text{Rs. 1,145}$

#### 3. VAT Calculation:
* **VAT-Free Amount (First 50 Units):** $(20 \times 0) + (10 \times 6.50) + (20 \times 8.00) = \text{Rs. 225}$
* **VAT Amount (5% on taxable energy):** $5\% \times (1045 - 225) = 5\% \times 820 = \text{Rs. 41}$

#### 🧮 **Final Payable Bill Amount:** 
$$\text{Total Amount} + \text{VAT Amount} = 1145 + 41 = \mathbf{Rs. 1,186}$$

---

You can view the pdf that I made this so I hope you can understand the logic better here:
[Download/View Electricity Rate List (PDF)](./Electricity%20Rate%20List.pdf)

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **GitHub Pages** (Hosting)

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/BerojgarDev/NEA-Bill-Calculator.git](https://github.com/BerojgarDev/NEA-Bill-Calculator.git)
