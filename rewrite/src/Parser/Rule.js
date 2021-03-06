import {RULE} from '../Constant.js'
import {trim, substr, push, sizeof, node} from '../Utility.js'

/**
 * @param {Array<string>} stack
 * @param {string} value
 * @param {Array<number>} points
 * @param {number} length
 * @param {number} offset
 * @param {Array<string>} parents
 * @param {string} type
 * @param {Array<string>} props
 * @param {Array<string>} children
 * @param {Object} source
 */
export function rule (stack, value, points, length, offset, parents, type, props, children, source) {
	for (var i = 0, j = offset - 1, k = '', l = sizeof(parents), m = 0; i < length; ++i)
		for (k = substr(value, j + 1, j = points[i]), m = 0; m < l; ++m)
			if (k = trim(parents[m] + ' ' + k))
				push(props, k)

	push(stack, node(type || RULE, props, children, value, source))
}
