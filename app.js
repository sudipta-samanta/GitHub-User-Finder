// Init GitHub
const github = new GitHub();
// Init GitHub
const ui = new UI();

document.querySelector('#github-username').addEventListener('keyup', (e) => {
	const username = e.target.value;
	if (username !== '') {
		github
			.getUser(username)
			.then((userProfileData) => {
				if (userProfileData.message === 'Not Found') {
					// Show alert
					ui.showAlert();
				} else {
					// clear alert
					ui.clearAlert();
					// Show profile
					ui.showProfile(userProfileData);
					// show latest 5 repos
					github
						.getRepos(userProfileData.repos_url, 5)
						.then((repos) => ui.showRepos(repos))
						.catch((err) => console.log(`Something went wrong: ${err}`));
				}
			})
			.catch((err) => console.log(`Something went wrong: ${err}`));
	} else {
		// clear profile
		ui.clearProfile();
		// clear repos
		ui.clearRepos();
	}
});
