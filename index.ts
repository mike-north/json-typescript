export type Primitive = string | number | boolean | null;
export interface Object {
	[member: string]: Value;
}
export interface Arr extends Array<Value> {}

export type Value = Primitive | Object | Arr;
