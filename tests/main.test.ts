import { suite, test, slow, timeout, only } from 'mocha-typescript';
import { assert } from 'chai';
import { check, checkDirectory } from 'typings-tester';
import { join } from 'path';
import { assertTsThrows } from './helpers';
import JSON from '../index';
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
		let v: JSON.Value;
		v = 'string';
		v = 4;
		v = true;
		v = {};
		v = [];
	}

	@test('Nested JSON values')
	nestedValues() {
		let v: JSON.Value = {
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
		let v: JSON.Value = {
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
		let v: JSON.Arr = [
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
