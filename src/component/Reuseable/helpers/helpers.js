/**
 * Helpers Functions
 */
import moment from 'moment';
/**
 * Function to convert hex to rgba
 */
export function hexToRgbA(hex, alpha) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    throw new Error('Bad Hex');
}

/**
 * Text Truncate
 */
export function textTruncate(str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
}

/**
 * Get Date
 */
export function getTheDate(timestamp, format) {
    let time = timestamp * 1000;
    let formatDate = format ? format : 'MM-DD-YYYY';
    return moment(time).format(formatDate);
}

/**
 * Convert Date To Timestamp
*/
export function convertDateToTimeStamp(date, format) {
    let formatDate = format ? format : 'YYYY-MM-DD';
    return moment(date, formatDate).unix();
}

/**
 * Function to return current app layout
 */
export function getAppLayout(url) {
    let location = url.pathname;
    let path = location.split('/');
    return path[1];
}

export const ValidateImage = (file) => {
    if (!file.name.match(/\.(jpg|jpeg|png|gif|JPG)/)) {
        return true;
    }
}
export const capitalize = (char) => {
    return  char[0].toUpperCase() + char.slice(1);
}
export const check_for_access  = (permission,checkPermission) =>{
    return permission.some(perm => perm.name ===  'Access ' +capitalize(checkPermission))
}
export const check_for_roll_access  = (permission,checkPermission) =>{
    return permission.some(perm => perm.name ===  capitalize(checkPermission))
}

//Image type
export const FIXER_CERTIFICATES = 1;
export const CNIC = 4;
export const SELFIE = 3;

//Car Image Types
export const CAR_IMAGES = 2;
export const CAR_REGISTERATION = 9;
export const CAR_LISENCE = 10;

//Bike Image Types
export const BIKE_IMAGES = 7;
export const BIKE_REGISTERATION = 11;
export const BIKE_LISENCE = 12;

//RickShaw Image Types
export const RICKSHAW_IMAGES = 6;
export const RICKSHAW_REGISTERATION = 13;
export const RICKSHAW_LISENCE = 14;

//DRIVER Types
export const DRIVER_DOCUMENTS = 8;

//Rider Services
export const BIKE_SERVICE = 6;
export const RICKSHAW_SERVICE = 7;
export const CAR_SERVICE = 8;
export const DRIVER_SERVICE = 9;

export const GetImageTypeByService = (service, name) => {
    if(service === BIKE_SERVICE) {
        if(name === "vehicle") {
            return BIKE_IMAGES;
        } else if(name === "lisence") {
            return BIKE_LISENCE;
        } else {
            return BIKE_REGISTERATION;
        }
    }

    if(service === CAR_SERVICE) {
        if(name === "vehicle") {
            return CAR_IMAGES;
        } else if(name === "lisence") {
            return CAR_LISENCE;
        } else {
            return CAR_REGISTERATION;
        }
    }

    if(service === RICKSHAW_SERVICE) {
        if(name === "vehicle") {
            return RICKSHAW_IMAGES;
        } else if(name === "lisence") {
            return RICKSHAW_LISENCE;
        } else {
            return RICKSHAW_REGISTERATION;
        }
    }

    if(service === DRIVER_SERVICE) {
        return DRIVER_DOCUMENTS;
    }
}



export const validate = (val, rules, connectedValue) => {
    let isValid = true;
    for (let rule in rules) {
        switch (rule) {
            case "isEmail":
                isValid = isValid && emailValidator(val);
                break;
            case "minLength":
                isValid = isValid && minLengthValidator(val, rules[rule]);
                break;
            case "equalTo":
                isValid = isValid && equalToValidator(val, connectedValue[rule]);
                break;
            case "checkPassword":
                isValid = isValid && passwordChecl(val);
                break;
            case "notEmpty":
                isValid = isValid && notEmptyValidator(val);
                break;
            case "nameValid":
                isValid = isValid && nameValidator(val);
                break;
            default:
                isValid = true;
        }
    }

    return isValid;
};

export const validateText = (val, rules, connectedValue) => {
    let isValid = val;
    for (let rule in rules) {
        switch (rule) {
            case 'onlyAcceptNumbers':
                isValid = isValid && onlyAcceptNumber(val);
                break;
            case 'dontAcceptFirstLetterAsZero':
                isValid = isValid && dontAcceptFirstLetterAsZero(val);
                break;
            default:
                isValid = val;
        }
    }

    return isValid;
};




const emailValidator = val => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        val
    );
};

const minLengthValidator = (val, minLength) => {

    return val.length >= minLength;
};

const equalToValidator = (val, checkValue) => {
    return val === checkValue;
};

const onlyAcceptNumber = (val) => {
    return val.replace(/[^0-9]/g, '');
};
const dontAcceptFirstLetterAsZero = (val) => {
    let checkZero = val.replace(/^0+(?=\d)/,'');
    return checkZero.replace(/[^0-9]/g, '');
};

const notEmptyValidator = val => {
    return val.trim() !== "";
};
const passwordChecl = val => {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (val.match(passw)) {
        return true;
    } else {
        return false;
    }
}
const nameValidator = val => {
    return  /^[0-9a-zA-Z \b]+$/.test(
        val
    );
};
