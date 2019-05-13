import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TheComponentComponent extends Component {
	@tracked newNumbers = [];

	@action
	doAction () {
		this.newNumbers = [];
		for (let i = 0; i < this.args.list.length; i++) {
			if (typeof this.args.btnAction(this.args.list[i]) === 'boolean' && this.args.btnAction(this.args.list[i]))
				this.newNumbers.push(this.args.list[i]);
			if (typeof this.args.btnAction(this.args.list[i]) === 'number') {
				this.newNumbers.push(this.args.btnAction(this.args.list[i]));
			}
		}
	}
}
