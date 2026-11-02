Explore Learning – installable app (PWA)
Upload ALL files in this folder to the same HTTPS location (e.g. Firebase Hosting, Netlify, GitHub Pages).
Open the https:// address in Chrome on Android -> tap "Install app" (in the app) or Chrome menu -> Install app.
Chrome only offers install over https (or localhost) – opening index.html as a local file will not install.

Password reset by teacher (optional, needs Firebase Blaze plan):
  1. In your Firebase project folder run: firebase init functions  (JavaScript, Node 22)
  2. Replace the generated functions/index.js and functions/package.json with the ones in the "functions" folder here.
  3. Run: firebase deploy --only functions
  Students can always change their own password from the profile card (tap your initial -> Change password).
