/**
 * @module b
 * @desc
 * @author Created by kimhou on 16/1/28
 */

import {Hello} from './a'
import m1 from './1'
import m2 from './2'
import m3 from './3'
import m4 from './4'
import m5 from './5'

export function sayHello() {
	console.log(Hello)
}

export function helloToModule(moduleId){
	console.log({
		1: m1, 2: m2, 3: m3, 4: m4, 5: m5
	}[moduleId]);
}