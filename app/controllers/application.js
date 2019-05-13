import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
	@tracked numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	@action
	prime (n) {
		for (let i = 2; i < n; i++) {
			if (n % i === 0)
				return false;
		}
		return true;
	}

	@action
	odd (n) {
		if (n % 2 === 0)
			return false;
		else
			return true;
	}

	@action
	pow (n) {
		return n * n;
	}
}
