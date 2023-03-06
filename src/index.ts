/** Given a font size, name, and string, measures the space that the string given takes up
 *
 * Usage:
 * @example
 * getFontDetails(10, "monospace", "abc")
 * @returns {TextMetrics | undefined}
 *
 * Size can also be given as a string with units
 * @example
 * getFontDetails("10px", "monospace", "abc")
 * @returns {TextMetrics | undefined}
 */
export function getFontDetails(
	size: number | string,
	font: string,
	strToMeasure?: string
): TextMetrics | undefined {
	if (strToMeasure == undefined) {
		strToMeasure = "a";
	}
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d", { willReadFrequently: true });
	if (ctx == null) return;
	ctx.font = `${typeof size === "number" ? size + "px" : size} ${font}`;
	return ctx.measureText(strToMeasure);
}
