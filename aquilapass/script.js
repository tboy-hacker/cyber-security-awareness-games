const passwordInput = document.getElementById("passwordInput");
const ruleStatus = document.getElementById("ruleStatus");
const rulesList = document.querySelectorAll("#rulesList li");

passwordInput.addEventListener("input", validatePassword);

// script.js

document.getElementById("passwordInput").addEventListener("input", function() {
    const password = this.value;
    const flagDisplay = document.getElementById("flagDisplay");

    // Clear the flag display
    flagDisplay.textContent = "";

    // Check if the password matches any in the commonPasswords list
    if (commonPasswords[password]) {
        // Display the corresponding flag
        flagDisplay.textContent = commonPasswords[password];
    }
});


function validatePassword() {
    const password = passwordInput.value;

    // Rule 1: Password must be at least five characters long
    validateCondition(password.length >= 5, 1);

    // Rule 2: Must include a number
    validateCondition(/\d/.test(password), 2);

    // Rule 3: Must include an uppercase letter
    validateCondition(/[A-Z]/.test(password), 3);

    // Rule 4: Must include a special character
    validateCondition(/[!@#$%^&*(),.?":{}|<>]/.test(password), 4);

    // Rule 5: Digits must add up to 25
    const digits = (password.match(/\d/g) || []).map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    validateCondition(sum === 25, 5);

    // Rule 6: Password must include a month of the year
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    validateCondition(months.some(month => password.toLowerCase().includes(month.toLowerCase())), 6);

    // Rule 7: Must include a Roman numeral (I, V, X, L, C, D, M)
    validateCondition(/[IVXLCDM]/.test(password), 7);

    // Rule 8: Must include one of our sponsors
    const sponsors = ['CyberCorp', 'SecureTech', 'SafeGuard'];
    validateCondition(sponsors.some(sponsor => password.toLowerCase().includes(sponsor.toLowerCase())), 8);

    // Rule 9: The Roman numerals in the password should multiply to 35
    const romanNumerals = (password.match(/[IVXLCDM]/g) || []).map(convertRomanToValue);
    const product = romanNumerals.reduce((a, b) => a * b, 1);
    validateCondition(product === 35, 9);

    // Rule 10: CAPTCHA validation (Example logic, you'll need a real CAPTCHA)
    validateCondition(checkCaptcha(password), 10);

    // Rule 11: Password should not contain sequential letters or numbers (like 'abc', '123')
    validateCondition(!/(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789|890)/i.test(password), 11);

    // Rule 12: Must not repeat any character more than twice consecutively
    validateCondition(!/(.)\1{2,}/.test(password), 12);

    // Rule 13: The sum of the digits must be an odd number
    validateCondition(sum % 2 !== 0, 13);

    // Helper function to convert Roman numerals to their numeric values
    function convertRomanToValue(roman) {
        const romanValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        return romanValues[roman] || 0;
    }
}

// Helper function to validate conditions and set rules as valid or invalid
function validateCondition(condition, ruleNumber) {
    if (condition) {
        setValid(ruleNumber);
    } else {
        setInvalid(ruleNumber);
    }
}

// Helper functions to set rules as valid or invalid
function setValid(ruleNumber) {
    document.getElementById(`rule${ruleNumber}`).classList.remove('invalid');
    document.getElementById(`rule${ruleNumber}`).classList.add('valid');
}

function setInvalid(ruleNumber) {
    document.getElementById(`rule${ruleNumber}`).classList.remove('valid');
    document.getElementById(`rule${ruleNumber}`).classList.add('invalid');
}

// Simulate CAPTCHA validation (You need to integrate a real CAPTCHA service)
function checkCaptcha(password) {
    // Placeholder logic for CAPTCHA validation
    return password.toLowerCase().includes("captcha");
}

// script.js

document.getElementById("passwordInput").addEventListener("input", function() {
    const password = this.value;
    const flagDisplay = document.getElementById("flagDisplay");
    const strengthBar = document.getElementById("strengthBar");

    // Clear previous feedback
    flagDisplay.classList.remove("show");
    flagDisplay.textContent = "";
    strengthBar.style.width = "0";
    strengthBar.style.backgroundColor = "#da3633";

    // Check for common passwords and display the flag if found
    if (commonPasswords[password]) {
        flagDisplay.textContent = "Flag: " + commonPasswords[password];
        flagDisplay.classList.add("show");
    }

    // Update password strength meter
    const strength = calculatePasswordStrength(password);
    updateStrengthMeter(strength);
});

// Calculate password strength based on criteria
function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 5) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    return strength;
}

// Update the visual representation of the strength meter
function updateStrengthMeter(strength) {
    const strengthBar = document.getElementById("strengthBar");
    const colors = ["#da3633", "#d97706", "#facc15", "#2ea043"];
    const widths = ["25%", "50%", "75%", "100%"];

    strengthBar.style.width = widths[strength - 1] || "0";
    strengthBar.style.backgroundColor = colors[strength - 1] || "#da3633";
}
