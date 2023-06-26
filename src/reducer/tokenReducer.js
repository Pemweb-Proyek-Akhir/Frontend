import { getUserToken } from '@/utils/storageUtil';
import update from 'immutability-helper';

const INIT_STATE_TOKEN = {
	// token: getUserToken(),
	token: '',
};

const tokenReducer = (state, action) => {
	switch (action.type) {
		case 'update': {
			console.log(action.payload);
			return update(state, {
				token: { $set: action.payload.token },
			});
		}

		case 'delete':
			return update(state, {
				token: { $set: null },
			});
	}
};

tokenReducer.INIT = INIT_STATE_TOKEN;

export default tokenReducer;
