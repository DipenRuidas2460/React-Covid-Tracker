function isVowel(ch) {
    return (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u');
}
function calcDiff(str) {
    let vow_count = 0
    let con_count = 0
    let hard_words = 0
    let easy_words = 0
    let consecutive_con = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ' && isVowel(str[i].toLowerCase())) {
            vow_count++;
            consecutive_con = 0;
        }
        else if (str[i] != ' ') {
            con_count++;
            consecutive_con++;
        }
        if (consecutive_con == 4) {
            hard_words++;
            while (i < str.length && str[i] != ' ') i++;
            con_count = 0;
            vow_count = 0;
            consecutive_con = 0;
        }
        else if (i < str.length && (str[i] == ' ' || i == str.length - 1)) {
            if (con_count > vow_count) hard_words++;
            else easy_words++;
            con_count = 0;
            vow_count = 0;
            consecutive_con = 0;
        }
    }
    return 5 * hard_words + 3 * easy_words;
}

console.log(calcDiff("Difficulty of sentence"));
console.log(calcDiff("eaiou sss"));
console.log(calcDiff("asdfghjkqweryuixcvbnmdfghjrtyuvnmdfgrtydfgncv fgghertyhdfgnfvbcvbsdfgerg"));
console.log(calcDiff(""));