// @todo: przyklad rysowania po canvasie zeby wyswietlic ikonki wykresu liniowego/slupkowego
const chartScaleIconPlugin = {
    id: 'scaleLegendIcons',
    afterDraw(chart, args, options) {
        const ctx = chart.ctx;
        const leftScale = chart.scales.left;
        const rightScale = chart.scales.right;

        // left
        let x = leftScale.left + 14;
        let y = leftScale.top;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('L', 0, 0);
        ctx.restore();

        // right
        x = rightScale.left + 50;
        y = rightScale.top;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.PI / 2);
        ctx.fillText('R', 0, 0);
        ctx.restore();

    }
}

export default chartScaleIconPlugin;