class UI {
	constructor() {
		this.profile = document.querySelector('.profile');
	}

	// Show profile
	showProfile(user) {
		let output = `            
            <h2>Profile</h2>
            <div class="profile-box">
                <div class= "profile-img">
                    <img src="${user.avatar_url}">
                    <button href="${user.html_url}">Visit profile</button>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>Company: ${
															user.company == null ? 'N/A' : user.company
														}</td>
                        </tr>
                        <tr>
                            <td>Location: ${user.location}</td>
                        </tr>
                        <tr>
                            <td>Member since: ${user.created_at}</td>
                        </tr>
                    </table>
                
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
	showAlert(className = 'alert') {
		// clear previous alert
		this.clearAlert();

		// create alert box
		const alertsection = document.createElement('div');
		alertsection.className = className;
		alertsection.textContent = 'User not found';

		const parentelement = document.querySelector('.search-box');
		const childElement = document.querySelector('.search-box h1');
		parentelement.insertBefore(alertsection, childElement);

		// Timeout after 2 sec
		setTimeout(() => {
			this.clearAlert();
		}, 2000);
	}

	// clear alert
	clearAlert() {
		const currentAlert = document.querySelector('.alert');
		if (currentAlert) {
			currentAlert.remove();
		}
	}
}
