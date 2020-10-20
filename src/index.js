const SINGLE_DIGITS = {
    1: `one`,
    2: `two`,
    3: `three`,
    4: `four`,
    5: `five`,
    6: `six`,
    7: `seven`,
    8: `eight`,
    9: `nine`,
};

const TEENS = {
    0: `ten`,
    1: `eleven`,
    2: `twelve`,
    3: `thirteen`,
    4: `fourteen`,
    5: `fifteen`,
    6: `sixteen`,
    7: `seventeen`,
    8: `eighteen`,
    9: `nineteen`,
};

const DOZENS = {
    2: `twenty`,
    3: `thirty`,
    4: `forty`,
    5: `fifty`,
    6: `sixty`,
    7: `seventy`,
    8: `eighty`,
    9: `ninety`,
};


module.exports = function toReadable (number) {
    const str = Array.from(number.toString());

    switch (str.length) {
        case 1:
            if (str[0] === `0`) return `zero`;
            else return SINGLE_DIGITS[str];
            break;
        case 2:
            if (number < 20) return TEENS[str[1]];
            else if (str[1] === `0`) return DOZENS[str[0]];
            else return `${DOZENS[str[0]]} ${SINGLE_DIGITS[str[1]]}`;
            break;
        case 3:
            const arr = [];
            arr.push(`${SINGLE_DIGITS[str[0]]} hundred`);

            if (str[1] === `1`) arr.push(TEENS[str[2]]);
            else if (str[1] !== `0`) arr.push(DOZENS[str[1]]);

            if (str[1] !== `1` && str[2] !== `0`) arr.push(SINGLE_DIGITS[str[2]]);

            return arr.join(` `);
            break;
        default:
            return;
    }
}
