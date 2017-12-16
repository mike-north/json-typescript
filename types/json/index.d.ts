// tslint:disable-next-line:no-namespace
type Arr<T> = Array<T>;
declare namespace JSON {
	type Primitive = string | number | boolean | null;
	type Value = Primitive | Object | Array;
	interface Object {
		[member: string]: Value;
	}
	interface Array extends Arr<Value> {}
}
