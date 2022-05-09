function test(){
Browsers.Item(btChrome).Navigate("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx");

Aliases.browser.pageWebOrdersLogin.formAspnetform.textboxUsername.SetText("Tester");
Aliases.browser.pageWebOrdersLogin.formAspnetform.passwordboxPassword.SetText("test");
Aliases.browser.pageWebOrdersLogin.formAspnetform.submitbuttonLogin.Click();
}