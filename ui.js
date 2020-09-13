const month = [
	'January',
	'February',
	'March',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

class UI {
	constructor() {
		this.profile = document.querySelector('.profile');
	}

	// Show profile
	showProfile(user) {
		let output = `   
			<div class="profile-section">       
				<h2>${user.name == null ? 'N/A' : user.name}</h2>
				<div class="profile-box-container">
					<div class= "profile-img-section">
						<div class="profile-img-section-items">
							<img src="${user.avatar_url}">
						</div>
						<div class="profile-img-section-items">
							
							<p>
								<strong>${user.company == null ? 'N/A' : user.company}</strong>
							</p>
							<p>${user.location == null ? 'N/A' : user.location}</p>
				
							<a href="${
								user.html_url
							}" target="_blank"><ion-icon name="logo-github" class="github-icon"></ion-icon
							>  Visit Profile</a>
						</div>						
					</div>
					<div class="repo-follower-following-section">
						<ul>
							<li>Public Repos: ${user.public_repos}</li>
							<li>Followers: ${user.followers}</li>
							<li>Following: ${user.following}</li>					
						
						</ul>	
					</div>
				</div> 
			</div>          
            `;
		this.profile.innerHTML = output;
	}

	// clear profile
	clearProfile() {
		this.profile.innerHTML = '';
	}

	// show alert
	showAlert(className = 'user-not-found') {
		// clear previous alert
		this.clearAlert();

		// create alert box
		const alertsection = document.createElement('span');
		alertsection.className = className;
		alertsection.textContent = 'User not found';

		const parentelement = document.querySelector('.search-box');
		parentelement.appendChild(alertsection);
	}

	// clear alert
	clearAlert() {
		const currentAlert = document.querySelector('.user-not-found');
		if (currentAlert) {
			currentAlert.remove();
		}
	}

	// show repos
	showRepos(repos) {
		console.log(repos);
		const reposSection = document.querySelector('.reposSection');
		let output = `
		<div class="repos">
			<h2>Latest Repos</h2>
		`;
		if (repos.length === 0) {
			output += '<p>No repository found</p>';
		} else {
			repos.forEach((repo) => {
				output += `		
				<div class="repos-list">
					<ul>
						<li>${repo.name}</li>
						<li>Stars: ${repo.stargazers_count}</li>
						<li>Forks: ${repo.forks_count}</li>
						<li>
							<a href="${repo.html_url}" target="_blank">
								<ion-icon name="arrow-forward-outline" class="repo-link"></ion-icon>
							</a>
						</li>
					</ul>			
				</div>			
				`;
			});
		}
		output += '</div>';
		reposSection.innerHTML = output;
		//this.addRepoListHoverEvent();
	}

	// clear repos section
	clearRepos() {
		document.querySelector('.repos').innerHTML = '';
	}
}
