document.querySelector('.load-overlay').style= 'display: flex;'
    getParty((error, partyInfo) => {
    const partyProfile = document.querySelector('.top-profile');
    if (error) {
        partyProfile.innerHTML = `<h2> ${error} </h2>`
        return;
    }
    console.log(partyInfo)
    partyProfile.innerHTML = `
      <img src="${ partyInfo.logourl}" class="party-pix left">
      <div class="profile-menu">
      <h2 class="title font-serif p-name">
        <span id="p-name">${partyInfo.name}</span>
      </h2>
      <div class="">
        <strong>Address:</strong> @<span id="p-address">${partyInfo.hqaddress} </span>
      </div>
    </div>
      `;
      document.querySelector('.load-overlay').style= 'display: none;'
    });