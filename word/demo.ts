const mapBatchSetByValue = <T, P extends keyof T>(
    mapKey: P[],
    obj: T,
    objKey: keyof T[P],
    value?: T[P][keyof T[P]],
): T => {
    const newVal = {} as T;
    mapKey.forEach(key => {
        newVal[key] = { ...obj[key], [objKey]: value };
    });
    const res = { ...obj, ...newVal };
    return res;
};

const mapBatchSetByFn = <T, P extends keyof T>(
    mapKey: P[],
    obj: T,
    fn: (item: T[P], key?: P, index?: number) => Partial<T[P]> | void,
    defaultValue?: T[P],
): T => {
    const newVal = {} as T;
    mapKey.forEach((key, index) => {
        const res = fn(obj[key], key, index);
        if (res === undefined) {
            return;
        }

        if (obj[key]) {
            newVal[key] = { ...obj[key], ...res };
            return;
        }

        newVal[key] = { ...obj[key], ...defaultValue, ...res };
    });
    return { ...obj, ...newVal };
};

export function mapBatchSet<T, P extends keyof T>(
    mapKey: P[],
    obj: T,
    objKey: keyof T[P],
    value: T[P][keyof T[P]],
    useFreeze?: boolean
): T;
export function mapBatchSet<T, P extends keyof T>(
    mapKey: P[],
    obj: T,
    fn: (item: T[P], key?: P, index?: number) => Partial<T[P]> | void,
    defaultValue?: T[P],
    useFreeze?: boolean
): T;
export function mapBatchSet<T, P extends keyof T>(
    mapKey: P[] = [],
    obj: T,
    objKeyOrFn: keyof T[P] | ((item: T[P], key?: P, index?: number) => Partial<T[P]> | void),
    valueOrDefaultValue?: T[P][keyof T[P]] | T[P],
    useFreeze: boolean = true,
): T {
    const res = typeof objKeyOrFn === 'function'
        ? mapBatchSetByFn(mapKey, obj, objKeyOrFn, valueOrDefaultValue as T[P])
        : mapBatchSetByValue(mapKey, obj, objKeyOrFn, valueOrDefaultValue as T[P][keyof T[P]]);
    return useFreeze ? Object.freeze(res) : res;
}