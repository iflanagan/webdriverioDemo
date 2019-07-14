const Page = require('./page');

class LoginPage extends Page {

    constructor() {
        super();
    }
    
    open() {
       super.open("");
    }

    loginAs(username, password) {
        $("#user-name").addValue(username);
        $("#password").addValue(password);
        $(".btn_action").click();
    }
    logout() {

	$("#menu_button_container > div > div:nth-child(3) > div > button").click();
	$("#logout_sidebar_link").click();
	}

    isErrorVisible() {
        return $("[data-test='error']").isDisplayed();
    }

    
};

module.exports = LoginPage;
