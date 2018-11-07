import { suite, test } from 'mocha-typescript';
import { join } from 'path';
import { assertTsThrows } from './helpers';
import * as J from '../index';

@suite('JSON Type Definition Tests')
class JSONTests {
	@test('functions are not allowed in JSON values')
	async noFunctions() {
		await assertTsThrows(
			join(__dirname, 'examples/function.ts'),
			/is not assignable to type 'Value'/
		);
	}

	@test('JSON.Object is not considered a JSON.Arr')
	async arrayIsntObject() {
		await assertTsThrows(
			join(__dirname, 'examples/array-isnt-object.ts'),
			/is not assignable to type 'Object'/
		);
	}

	@test('JSON.Arr is not considered a JSON.Object')
	async objectIsntArray() {
		await assertTsThrows(
			join(__dirname, 'examples/object-isnt-array.ts'),
			/is not assignable to type 'Arr'/
		);
	}

	@test('Some valid JSON values')
	validValues() {
		let v: J.Value;
		v = 'string';
		v = 4;
		v = true;
		v = {};
		v = [];
	}

	@test('Nested JSON values')
	nestedValues() {
		let v: J.Value = {
			a: {
				b: {
					c: 'd',
					e: false
				}
			}
		};
	}

	@test('JSON.Object')
	jsonObject() {
		let v: J.Value = {
			a: {
				b: {
					c: 'd',
					e: false
				}
			}
		};
	}

	@test('JSON.Array')
	jsonArray() {
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
	}
}
