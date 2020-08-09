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
				<h2>${user.name}</h2>
				<div class="profile-box">
					<div class= "profile-img">
						<img src="${user.avatar_url}"><br>
						<a href="${
							user.html_url
						}" target="_blank"><ion-icon name="logo-github" class="github-icon"></ion-icon
						>  Visit Profile</a>
					</div>
					<div class="profile-details">
						<ul>
							<li>Public Repos: ${user.public_repos}</li>
							<li>Public Gists: ${user.public_gists}</li>
							<li>Followers: ${user.followers}</li>
							<li>Following: ${user.following}</li>					
						
						</ul>
						<table>
							<tr>
								<td>Company: <strong>${
									user.company == null ? 'N/A' : user.company
								}</strong></td>
							</tr>
							<tr>
								<td>Location: ${user.location == null ? 'N/A' : user.location}</td>
							</tr>
							<tr>
								<td>Member since: ${month[new Date(user.created_at).getMonth()]}, ${new Date(
			user.created_at
		).getFullYear()}</td>
							</tr>
						</table>
					
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

		// Timeout after 2 sec
		/* setTimeout(() => {
			this.clearAlert();
		}, 2000); */
	}

	// clear alert
	clearAlert() {
		const currentAlert = document.querySelector('.user-not-found');
		if (currentAlert) {
			currentAlert.remove();
		}
	}
}
