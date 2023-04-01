export class ObjectConverter {
    static camelToSnakeCase(obj: Record<string, any>): Record<string, any> {
        const snakeObj: Record<string, any> = {};
        for (const [key, value] of Object.entries(obj)) {
            const snakeKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
            if (value instanceof Object && !(value instanceof Date)) {
                snakeObj[snakeKey] = ObjectConverter.camelToSnakeCase(value);
            } else {
                snakeObj[snakeKey] = value;
            }
        }
        return snakeObj;
    }

    static parseObject<T>(input: Record<string, unknown>, targetType: { new(): T }): T {
        const output = new targetType();
        for (const key in input) {
            if (Object.prototype.hasOwnProperty.call(input, key)) {
                // const targetKey = key.replace(/([-_][a-z])/ig, ($1) =>
                //     $1.toUpperCase().replace(/[-_]/g, '')
                // );
                if (Object.prototype.hasOwnProperty.call(output, key)) {
                    const inputValue = (input as Record<string, unknown>)[key];
                    const targetValue = (output as Record<string, unknown>)[key];
                    if (typeof targetValue === 'object' && typeof inputValue === 'object') {
                        (output as Record<string, unknown>)[key] = ObjectConverter.parseObject(
                            inputValue as Record<string, unknown>,
                            (targetValue as object).constructor as { new(): unknown }
                        );
                    } else {
                        (output as Record<string, unknown>)[key] = inputValue;
                    }
                }
            }
        }
        return output as T;
    }


    static snakeToCamelCase(obj: any): any {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }

        const newObj: any = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const camelKey = key.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase());
                newObj[camelKey] = ObjectConverter.snakeToCamelCase(obj[key]);
            }
        }

        return newObj;
    }
}
