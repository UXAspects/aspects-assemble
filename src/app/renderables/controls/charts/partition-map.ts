import { Renderable, VectorElement } from '../../renderable';

export class PartitionMap extends Renderable {

    private _chart: VectorElement;
    private _colors = {
        lightPurple: '#7B63A3',
        purple: '#635387',
        darkPurple: '#624F82',
        green: '#3BAA43',
        lightBlue: '#18A6DF',
        darkBlue: '#1C899A',
        lightOrange: '#ECD491',
        darkOrange: '#E7A263',
        grey: '#363636'
    };

    private _blocks: PartitionMapBlock[] = [
        {
            x: 62,
            y: 0,
            width: 1124,
            height: 202,
            color: this._colors.lightPurple,
            label: 'Home'
        },
        {
            x: 0,
            y: 0,
            width: 62,
            height: 202,
            color: this._colors.darkPurple,
            label: 'Edit'
        },
        {
            x: 0,
            y: 202,
            width: 772,
            height: 203,
            color: this._colors.purple,
            label: 'Mittie Salazar'
        },
        {
            x: 772,
            y: 202,
            width: 414,
            height: 203,
            color: this._colors.green,
            label: 'Jared Potter'
        },
        {
            x: 0,
            y: 405,
            width: 593,
            height: 203,
            color: this._colors.darkBlue,
            label: 'English'
        },
        {
            x: 593,
            y: 405,
            width: 179,
            height: 203,
            color: this._colors.lightBlue,
            label: 'German'
        },
        {
            x: 772,
            y: 405,
            width: 235,
            height: 203,
            color: this._colors.darkBlue,
            label: 'English'
        },
        {
            x: 1007,
            y: 405,
            width: 179,
            height: 203,
            color: this._colors.lightBlue,
            label: 'German'
        },
        {
            x: 0,
            y: 607,
            width: 474,
            height: 203,
            color: this._colors.darkOrange,
            label: 'Email'
        },
        {
            x: 474,
            y: 607,
            width: 119,
            height: 203,
            color: this._colors.lightOrange,
            label: 'Microsoft Word'
        },
        {
            x: 593,
            y: 607,
            width: 119,
            height: 203,
            color: this._colors.darkOrange,
            label: 'Email'
        },
        {
            x: 712,
            y: 607,
            width: 60,
            height: 203,
            color: this._colors.lightOrange,
            label: 'Mi...'
        },
        {
            x: 772,
            y: 607,
            width: 178,
            height: 203,
            color: this._colors.darkOrange,
            label: 'Email'
        },
        {
            x: 950,
            y: 607,
            width: 57,
            height: 203,
            color: this._colors.lightOrange,
            label: 'Mi...'
        },
        {
            x: 1007,
            y: 607,
            width: 120,
            height: 203,
            color: this._colors.darkOrange,
            label: 'Email'
        },
        {
            x: 1127,
            y: 607,
            width: 59,
            height: 203,
            color: this._colors.lightOrange,
            label: 'Mi...'
        }
    ];

    constructor() {
        super();

        let blocks = this._blocks.map(block => this.createBlock(block.x, block.y, block.width, block.height, block.color, block.label));
        let blockBackgrounds = blocks.map(block => block.background);
        let blockText = blocks.map(block => block.text);

        let sidePanel = new VectorElement('rect')
            .attr('x', 1186)
            .attr('width', 194)
            .attr('height', 810)
            .attr('fill', this._colors.grey);

        let callout = new VectorElement('polygon')
            .attr('points', '1186 109.42 1194.5 117.75 1186 126.08 1186 109.42')
            .attr('fill', this._colors.lightPurple);

        let hardDrives = new VectorElement('text')
            .attr('x', 1205)
            .attr('y', 31)
            .attr('font-size', 15)
            .attr('fill', this._colors.lightPurple)
            .text('HARD DRIVES');

        let home = new VectorElement('text')
            .attr('x', 1205)
            .attr('y', 78)
            .attr('font-size', 27)
            .attr('fill', '#fff')
            .text('Home');

        let itemCount = new VectorElement('text')
            .attr('x', 1205)
            .attr('y', 110)
            .attr('font-size', 16)
            .attr('fill', '#6d6e71')
            .text('100');

        let items = new VectorElement('text')
            .attr('x', 1233)
            .attr('y', 110)
            .attr('font-size', 16)
            .attr('fill', '#58595b')
            .text('ITEMS');

        let colorBlock1 = new VectorElement('rect')
            .attr('x', 1204)
            .attr('y', 214)
            .attr('width', 21)
            .attr('height', 11)
            .attr('fill', this._colors.purple);

        let colorBlock2 = colorBlock1.clone()
            .attr('y', 240)
            .attr('fill', this._colors.green);

        let user1Name = new VectorElement('text')
            .attr('x', 1233)
            .attr('y', 225)
            .attr('font-size', 16)
            .attr('fill', '#e6e7e8')
            .text('Mittie Salazar');

        let user1Count = user1Name.clone()
            .attr('x', 1350)
            .attr('fill', '#939598')
            .text('65');
            
        let user2Name = user1Name.clone()
            .attr('y', 250)
            .text('Jared Potter');

        let user2Count = user2Name.clone()
            .attr('x', 1350)
            .attr('fill', '#939598')
            .text('35');

        let stop1 = new VectorElement('stop')
            .attr('offset', 0)
            .attr('stop-color', this._colors.grey);

        let stop2 = new VectorElement('stop')
            .attr('offset', 0.35)
            .attr('stop-color', '#7d65a5');

        let gradient = new VectorElement('linearGradient')
            .attr('id', 'mini-chart-gradient')
            .attr('x1', '1283')
            .attr('y1', '200')
            .attr('x2', '1283')
            .attr('y2', '128')
            .attr('gradientUnits', 'userSpaceOnUse')
            .insert(stop1, stop2);

        let definitions = new VectorElement('defs')
            .insert(gradient);

        let miniChart = new VectorElement('polygon')
            .attr('fill', 'url(#mini-chart-gradient)')
            .attr('points', '1186 199.33 1198 127.67 1201 181.84 1205 171.18 1210 189.95 1214.5 177.58 1219.33 194.64 1227.67 138.76 1233.5 158.81 1242 134.06 1243.67 174.16 1250 190.38 1258.67 195.92 1265.67 171.6 1279.33 137.48 1279.33 166.06 1284.67 153.69 1290.33 192.94 1296.33 175.87 1300.33 181.84 1309.67 156.68 1314 186.11 1325.33 147.29 1334 179.71 1342 190.38 1350.5 168.19 1356.33 175.02 1360.33 157.1 1363.67 167.34 1370 148.57 1374.33 169.05 1376.67 190.38 1380 199.33 1186 199.33');

        this._chart = new VectorElement('svg')
            .attr('viewBox', '0 0 1380 810')
            .insert(...blockBackgrounds, ...blockText, sidePanel, callout, hardDrives, home, itemCount, items, colorBlock1, colorBlock2, miniChart, user1Name, user2Name, user1Count, user2Count, definitions);
    }

    createBlock(x: number, y: number, width: number, height: number, color: string, label: string): PartitionMapBlockElements {

        let background = new VectorElement('rect')
            .attr('x', x)
            .attr('y', y)
            .attr('width', width)
            .attr('height', 202)
            .attr('shape-rendering', 'crispEdges')
            .attr('fill', color);

        let text = new VectorElement('text')
            .attr('x', x + (width / 2))
            .attr('y', y + (height / 2))
            .attr('fill', '#fff')
            .attr('text-anchor', 'middle')
            .text(label);

        return {
            background: background,
            text: text
        };
    }

    getVectorElement(): VectorElement {
        return this._chart;
    }

}

interface PartitionMapBlock {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    label: string;
}

interface PartitionMapBlockElements {
    background: VectorElement;
    text: VectorElement;
}