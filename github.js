class GitHub {
	constructor() {
		this.client_id = '54e241d3f1301e164433';
		this.client_secret = '4e355eb856e3a0291b09fcb40ca51ed71d09127b';
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

	// show repos
	async getRepos(repoUrl, count = 5) {
		const reposPromise = await fetch(
			`${repoUrl}?per_page=${count}&sort="created:asc"&${this.client_id}&client_secret=${this.client_secret}`
		);
		const repos = await reposPromise.json();
		//console.log(repos);
		return repos;
	}
}
