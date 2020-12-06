// This is a draft, needs to be refined and tested

export const getRegexp = (str: string) => new RegExp(`(\\.*)(${str})(\\.*)`);
