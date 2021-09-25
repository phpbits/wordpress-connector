declare var Sitename: string;

export function constructUrl(s: string) {
    return Sitename + s;
}