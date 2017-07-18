import { Renderable, VectorElement } from '../renderable';
import { PAGE_CONTENT_HEIGHT } from '../constants';
import { PartitionMap } from '../controls/charts/partition-map';

export class PartitionMapLayout extends Renderable {
    
    private _partitionMap: VectorElement;

    constructor() {
        super();

        // create the partition map control
        let chart = new PartitionMap();

        this._partitionMap = new VectorElement('svg')
            .insert(chart);
    }

    getVectorElement(): VectorElement {
        return this._partitionMap;
    }

}