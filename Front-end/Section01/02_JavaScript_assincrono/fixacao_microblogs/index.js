import './style.css';

import {
	fillUsersSelect,
	fillPosts,
	fillFeaturedPostComments,
	clearPageData,
	fillErrorMessage,
} from './utils/updateUI';

const USERS_API = 'https://dummyjson.com/user';

fetch(USERS_API)
  .then(response => response.json())
  .then(data => {
		const { users } = data;
		
		fillUsersSelect(users);
	})