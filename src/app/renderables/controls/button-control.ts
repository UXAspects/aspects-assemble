import { Renderable, VectorElement } from '../renderable';
import { stateServiceInstance } from '../../app.component';

export class ButtonControl extends Renderable {

    private _button: VectorElement;
    // private _border: VectorElement;
    private _background: VectorElement;
    private _label: VectorElement;

    constructor(private _type: ButtonType, title: string, width: number, height: number) {
        super();

        this._background = new VectorElement('rect')
            .attr('x', 1)
            .attr('y', 1)
            .attr('width', width - 1)
            .attr('height', height - 4)
            .attr('shape-rendering', 'crispEdges')
            .attr('stroke-width', 1);

        this._label = new VectorElement('text')
            .attr('x', '50%')
            .attr('y', '65%')
            .attr('text-anchor', 'middle')
            .text(title);

        this._button = new VectorElement('svg')
            .attr('width', width)
            .attr('height', height)
            .insert(this._background, this._label);

        // watch for changes to theme colors
        stateServiceInstance.theme.primary.subscribe(() => this.applyTheme());
        stateServiceInstance.theme.accent.subscribe(() => this.applyTheme());
        stateServiceInstance.theme.warning.subscribe(() => this.applyTheme());
        stateServiceInstance.theme.secondary.subscribe(() => this.applyTheme());
    }

    applyTheme() {

        let borderColor, backgroundColor, labelColor;

        switch (this._type) {
            
            case ButtonType.Primary:
                borderColor = stateServiceInstance.theme.primary.getValue();
                backgroundColor = stateServiceInstance.theme.primary.getValue();
                labelColor = '#fff';
                break;
            
            case ButtonType.Accent:
                borderColor = stateServiceInstance.theme.accent.getValue();
                backgroundColor = stateServiceInstance.theme.accent.getValue();
                labelColor = '#fff';
                break;
            
            case ButtonType.Warning:
                borderColor = stateServiceInstance.theme.warning.getValue();
                backgroundColor = stateServiceInstance.theme.warning.getValue();
                labelColor = '#fff';
                break;
            
            case ButtonType.Secondary:
                borderColor = '#ccc';
                backgroundColor = stateServiceInstance.theme.secondary.getValue();
                labelColor = '#999';
                break;
        }

        this._background.attr('fill', backgroundColor).attr('stroke', borderColor);
        this._label.attr('fill', labelColor);
    }

    getVectorElement(): VectorElement {
        return this._button;
    }

}

export enum ButtonType {
    Primary,
    Secondary,
    Accent,
    Warning
}


// let button = select(document.createElementNS('http://www.w3.org/2000/svg', 'svg'))
//     .attr('width', width)
//     .attr('height', height);

// let border = button.append('rect')
//     .attr('x', 0)
//     .attr('y', 0)
//     .attr('width', width)
//     .attr('height', height)
//     .attr('shape-rendering', 'crispEdges');


// let background = button.append('rect')
//     .attr('x', 1)
//     .attr('y', 2)
//     .attr('width', width - 2)
//     .attr('height', height - 4)
//     .attr('shape-rendering', 'crispEdges');

// let label = button.append('text')
//     .attr('x', '50%')
//     .attr('y', '65%')
//     .attr('text-anchor', 'middle');

// this.toObservable(borderColor).subscribe(brColor => border.attr('fill', brColor));
// this.toObservable(backgroundColor).subscribe(bgColor => background.attr('fill', bgColor));
// this.toObservable(foregroundColor).subscribe(fgColor => label.attr('fill', fgColor));
// this.toObservable(text).subscribe(textValue => label.text(textValue));

// return button;