// Controller
import BindableController from "../../cardinal/base-controllers/BindableController.js";

const model = {
    gdpr: 0,
};

export default class TestConditionController extends BindableController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));

        this.on('toggle-property', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            const property = e.data;
            const value = this.model[property];
            this.model[property] = !value;
        })
    }
}