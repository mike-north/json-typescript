import { join } from 'path';
import { assertTsThrows } from './helpers';
// tslint:disable-next-line: no-relative-import-in-test
import * as J from '..';
import { describe, it } from 'mocha';

describe('JSON Type Definition Tests', () => {
	it('functions are not allowed in JSON values', async () => {
		await assertTsThrows(
			join(__dirname, 'examples/function.ts'),
			/is not assignable to type 'Value'/
		);
	});
	it('JSON.Object is not considered a JSON.Arr', async () => {
		await assertTsThrows(
			join(__dirname, 'examples/array-isnt-object.ts'),
			/is not assignable to type 'Object'/
		);
	});
	it('JSON.Arr is not considered a JSON.Object', async () => {
		await assertTsThrows(
			join(__dirname, 'examples/object-isnt-array.ts'),
			/is not assignable to type 'Arr'/
		);
	});

	it('Some valid JSON values', () => {
		let v: J.Value;
		v = 'string';
		v = 4;
		v = true;
		v = {};
		v = [];
	});

	it('Nested JSON values', () => {
		let v: J.Value = {
			a: {
				b: {
					c: 'd',
					e: false
				}
			}
		};
	});

	it('JSON.Object', () => {
		let v: J.Value = {
			a: {
				b: {
					c: 'd',
					e: false
				}
			}
		};
	});

	it('JSON.Array', () => {
		let v: J.Arr = [
			{
				a: {
					b: {
						c: 'd',
						e: false
					}
				}
			},
			4,
			5,
			6
		];
	});
});
