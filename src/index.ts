export function getFontDetails(
	size: number | string,
	font: string,
	strToMeasure?: string
) {
	if (strToMeasure == undefined) {
		strToMeasure = "a";
	}
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d", { willReadFrequently: true });
	if (ctx == null) return;
	ctx.font = `${typeof size === "number" ? size + "px" : size} ${font}`;
	return ctx.measureText(strToMeasure);
}
