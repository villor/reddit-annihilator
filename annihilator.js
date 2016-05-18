// If the url is for the front page or a specific subreddit (or /r/all), the page is replaced.
// If the url contains /comments after the /r/{something} part it is not replaced (to allow specific reddit posts to be loaded)
if (/^.*:\/\/.*reddit\.com(\/)?(r\/((?!\/comments).)*)?$/.test(window.location.href)) {
	document.open();
	document.write('nope');
	document.close();
}
