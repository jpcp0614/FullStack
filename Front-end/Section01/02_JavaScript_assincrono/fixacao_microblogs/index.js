import './style.css';

import {
	fillUsersSelect,
	fillPosts,
	fillFeaturedPostComments,
	clearPageData,
	fillErrorMessage,
} from './utils/updateUI';

const USERS_API = 'https://dummyjson.com/user';
const POSTS_SELECT_API = 'https://dummyjson.com/posts/user/';

fetch(USERS_API)
  .then(response => response.json())
  .then(({ users }) => fillUsersSelect(users));

const selectUsers = document.querySelector('#users-select');

selectUsers.addEventListener('change', () => {
	clearPageData();
	const userID = selectUsers.value;

	fetch(`${POSTS_SELECT_API}${userID}`)
		.then(response => response.json())
		.then(({ posts }) => fillPosts(posts))
});
