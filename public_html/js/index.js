window.onload = Main;

let count = 0;

function Main() {
	Vue.createApp(
		{
			data() {
				return {
					showPage: 0
				}
			},
			methods: {
				changePage: function (event) {
					this.showPage = 1;
					console.log("okmaru");
				}
			},
			mounted: function (event) {
			}
		}
	).mount('#portApp');
}
