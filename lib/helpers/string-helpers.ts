export const uppercaseFirstChar = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const uppercaseEveryFirstChar = (string: string) => {
    var splitStr = string.toLowerCase().replaceAll("-", " ").split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

export const snos = (value: string | number | any[], word: string) => {
    let l = typeof value === "number" ? value : value?.length;
    return word + (l !== 1 ? "s" : "");
}

export function getAsString(value?: string | string[]): string {
    if (!value) return "";
    if (Array.isArray(value)) {
        return value[0];
    }
    return value;
}

export function getPageNumber(value?: string | string[]): number {
    if (!value) return 1;
    if (Array.isArray(value)) {
        return parseInt(value[0]);
    }
    return parseInt(value);
}



