class GitHub {
	constructor() {
		this.client_id = '<enter your github oauth id>';
		this.client_secret = '<enter your github oauth secret key>';
	}

	// get user data
	async getUser(username) {
		// Fetch user data from github-api
		const userProfile = await fetch(
			`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);
		const userProfileData = await userProfile.json();

		return userProfileData;
	}
}
