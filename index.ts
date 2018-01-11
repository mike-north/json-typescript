// tslint:disable-next-line:array-type
type Arr<T> = Array<T>;
// tslint:disable-next-line:no-namespace
namespace JSON {
	export type Primitive = string | number | boolean | null;
	export interface Object {
		[member: string]: Value;
	}
	export interface Array extends Arr<Value> {}
	// tslint:disable-next-line:array-type
	export type Value = Primitive | Object | Array;
}
export = JSON;
