declare var sitename: string;

export function constructUrl(s: string) {
    return sitename + s;
}