export default class BaseModel {
    static fromJson<T extends object>(json: Record<string, unknown>, obj: T): T {
        for (const key in json) {
            if (key in obj) {
                (obj as Record<string, unknown>)[key] = json[key];
            }
        }

        return obj;
    }
}
