# Deploy GPSL Technology to the web

Your project is ready to deploy. Choose **Option A** (recommended) or **Option B**.

---

## Option A: Deploy with Vercel (no GitHub required)

1. **Open Terminal** and run (loads Node, then deploys):
   ```bash
   cd ~/Desktop/gpsl-technology
   export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
   npx vercel login
   ```
   When the browser opens, sign in with **GitHub**, **GitLab**, or **Email**.  
   If it says “Success! Authentication complete”, you’re done with login.

2. **Deploy** (production URL):
   ```bash
   npx vercel --prod
   ```
   Accept the defaults (project name, directory) by pressing **Enter**.

3. **Get your link**  
   At the end you’ll see something like:
   ```text
   Production: https://gpsl-technology-xxxx.vercel.app
   ```
   Share that URL with your business partner.

**Later updates:** From the same folder run `npx vercel --prod` again after you make changes.

---

## Option B: Deploy via GitHub + Vercel (good for ongoing updates)

1. **Create a new repo on GitHub**
   - Go to [github.com/new](https://github.com/new)
   - Name it e.g. `gpsl-technology`
   - Leave it empty (no README, no .gitignore). Create repository.

2. **Push your code** (replace `YOUR_USERNAME` with your GitHub username):
   ```bash
   cd ~/Desktop/gpsl-technology
   git remote add origin https://github.com/YOUR_USERNAME/gpsl-technology.git
   git branch -M main
   git push -u origin main
   ```
   Log in to GitHub when prompted if needed.

3. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
   - Click **Add New…** → **Project**.
   - Import the `gpsl-technology` repo.
   - Leave settings as default. Click **Deploy**.

4. **Get your link**  
   When the deploy finishes, Vercel shows a URL like  
   `https://gpsl-technology-xxxx.vercel.app`.  
   Share that with your partner.

**Later updates:** Push to `main` on GitHub; Vercel will auto-deploy.

---

## If something goes wrong

- **“npm not found”**  
  Run: `export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"`  
  then run the deploy commands again.

- **Build fails on Vercel**  
  Make sure you pushed the latest code and that the project builds locally:  
  `npm run build`
