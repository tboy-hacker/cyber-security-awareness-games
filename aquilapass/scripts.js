// commonPasswords.js

// List of common passwords with corresponding flags
const commonPasswords = {
    "password123": "FLAG{Avoid_Common_Passwords}",
    "123456": "FLAG{123456_Is_Not_A_Strong_Password}",
    "qwerty": "FLAG{Qwerty_Is_Too_Easy}",
    "letmein": "FLAG{LetMeIn_Is_A_Weak_Password}",
    "welcome": "FLAG{Welcome_To_Insecure_Passwords}",
    "admin": "FLAG{Admin_Is_Not_Secure}",
    "iloveyou": "FLAG{Love_Cannot_Protect_Your_Data}",
    "12345678": "FLAG{12345678_Is_Still_Weak}",
    "football": "FLAG{Football_Is_Not_Secure}",
    "monkey": "FLAG{Monkey_Is_Too_Common}",
    "sunshine": "FLAG{Sunshine_Won't_Save_You}",
    "princess": "FLAG{Princess_Is_Easy_To_Guess}",
    "dragon": "FLAG{Dragons_Are_Not_Secure}",
    "aquilacyber": "FLAG{AquilaCyber_Rocks_But_Not_For_Passwords}",
    "password1": "FLAG{Adding_1_Does_Not_Make_It_Strong}",
    "letmein123": "FLAG{LetMeIn_Still_Weak_With_123}",
    "baseball": "FLAG{Baseball_Is_Not_A_Strong_Password}",
    "superman": "FLAG{Superman_Is_Not_Invincible}",
    "trustno1": "FLAG{TrustNo1_Is_Easy_To_Guess}",
    "000000": "FLAG{All_Zeros_Is_Weak}",
    "123123": "FLAG{Repeating_123_Is_Not_Strong}",
    "password": "FLAG{Just_Password_Is_Too_Common}",
    "password2024": "FLAG{Year-Based_Passwords_Are_Weak}",
    "iloveyou123": "FLAG{Love_With_123_Is_Not_Secure}",
    "mypassword": "FLAG{MyPassword_Is_Too_Obvious}",
    "rockyou": "FLAG{RockYou_Is_A_Common_Leak}",
    "starwars": "FLAG{StarWars_Is_Easy_To_Guess}",
    "aquila2024": "FLAG{AquilaCyber_2024_Still_Weak}",
    "internet": "FLAG{Internet_Is_Not_Secure_Enough}",
    "cookie": "FLAG{Cookies_Cannot_Protect_Your_Data}",
    "shadow": "FLAG{Shadows_Are_Not_Enough_Security}",
    "batman": "FLAG{Batman_Is_Not_Secure}",
    "welcome123": "FLAG{Welcome_With_123_Is_Still_Insecure}",
    "111111": "FLAG{Repeating_Ones_Is_Not_Strong}",
    "123qwe": "FLAG{Common_Patterns_Are_Weak}",
    "letmein2024": "FLAG{LetMeIn_With_Year_Is_Still_Weak}",
    "password!": "FLAG{Special_Character_Does_Not_Make_It_Strong}",
    "iloveaquila": "FLAG{Aquila_Love_But_Not_For_Passwords}",
    "summer2024": "FLAG{Season_And_Year_Is_Weak}",
    "secureme": "FLAG{SecureMe_Is_Not_Secure_Enough}",
    "aquilacyber2024": "FLAG{AquilaCyber2024_Is_Too_Predictable}"
};


// Function to check if the input password is in the list of common passwords
function checkCommonPassword(password) {
    if (commonPasswords[password]) {
        return commonPasswords[password];
    }
    return null;
}
