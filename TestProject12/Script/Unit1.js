function Test1(User)
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx");
  //Sets the specified position and size for the specific BrowserWindow object.
  Aliases.browser.BrowserWindow.Position(0, 0, 1920, 1030);
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageWebOrdersLogin.Wait();
  //Sets the text in the 'textboxUsername' text editor.
  Aliases.browser.pageWebOrdersLogin.formAspnetform.textboxUsername.SetText(User);
  //Enters '[Tab]' in the 'textboxUsername' object.
  Aliases.browser.pageWebOrdersLogin.formAspnetform.textboxUsername.Keys("[Tab]");
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageWebOrdersLogin.formAspnetform.passwordboxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'submitbuttonLogin' button.
 // Aliases.browser.pageWebOrdersLogin.formAspnetform.submitbuttonLogin.ClickButton();
  //Modified code
  Aliases.browser.pageWebOrdersLogin.formAspnetform.submitbuttonLogin.ClickButton();
}