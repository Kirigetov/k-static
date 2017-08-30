import {DOC, ACTIVE, SHOW} from '../_global';

const viewBtn = '.js-view-item'
const content = '.js-view-body';

DOC.on('click', viewBtn, function() {
	const target = $(this);
	const type = target.data('target');
	$(content + '[data-view="' + type + '"]').addClass(SHOW).siblings().removeClass(SHOW);
	target.addClass(ACTIVE).siblings().removeClass(ACTIVE);
})
