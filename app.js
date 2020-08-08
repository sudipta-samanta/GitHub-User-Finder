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
					// Show profile
					ui.showProfile(userProfileData);
				}
			})
			.catch();
	} else {
		// clear profile
		ui.clearProfile();
	}
});
