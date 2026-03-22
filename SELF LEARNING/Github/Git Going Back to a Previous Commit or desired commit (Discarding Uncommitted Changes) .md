## 📝 Git — Going Back to a Previous or Desired Commit

### What does "Going Back to a Previous Commit" mean?
You want to travel back in your git history — to a point where your code was in a known, clean state. Like an **undo button** for your entire codebase.

### What does "or Desired Commit" mean?
It doesn't have to be just the *latest* commit — you can go back to **any specific commit** you choose from your history, whether it was 1 commit ago or 50 commits ago.

### What does "Discarding Uncommitted Changes" mean?
You have written new code on your local machine but haven't run `git commit` yet — and you want to **throw that code away** and return to a clean committed state.

---

### 🧠 The full picture in simple words

> *"I wrote some code locally, didn't commit it, and now I don't want it — I want my project to look exactly like it did at a specific past commit."*

---

### ⚠️ Important — These commands only affect your Local Machine

> GitHub / remote repo is **completely untouched** unless you run `git push`

---

### Case 1 — Go back to your Latest Commit

> *"I made a mess in my local code, just take me back to where I last committed"*

If you only have **unstaged changes** (you did NOT run `git add`):

#### Go back to last commit — but won't delete any NEW files you created
`git restore .`

#### Delete new (untracked) files AND revert modified code
`git clean -fd`

#### Dry run — preview which files WOULD be deleted, without actually deleting
`git clean -fdn`

#### Do both at once: revert changes + delete new files
`git restore . && git clean -fd`

#### Also remove ignored files (e.g. node_modules, build output)
`git clean -fdx`

If you have **both staged + unstaged changes** (you ran `git add` on some files):
```bash
git reset --hard HEAD
```

---

### Case 2 — Go back to a Specific Older Commit

> *"I want to go back to a specific point in my history"*

First find your commit hash:
```bash
git log --oneline

# e5f3a12  added payment feature   ← latest (HEAD)
# b2c9d45  added user login page
# a1f8e23  added homepage
# 7d4c001  initial project setup
```

Then reset to it:
```bash
git reset --hard b2c9d45
```

Your project now looks exactly like it did at that commit. Everything after it is wiped locally.

---

### Case 3 — Go back but DON'T lose your local code

> *"I want to go to an older commit but want to keep the code I just wrote"*

Use `git stash` — it saves your uncommitted changes temporarily, lets you switch commits, then brings your code back.

```bash
git stash              # saves your local changes safely
git checkout b2c9d45   # go to the desired commit
git stash pop          # restore your saved changes back
```

---

### 🗺️ Quick Reference

| Situation | Command | Deletes local code? | Affects GitHub? |
|---|---|---|---|
| Undo unstaged changes | `git restore .` | ✅ yes | ❌ no |
| Undo staged + unstaged | `git reset --hard HEAD` | ✅ yes | ❌ no |
| Go to older commit | `git reset --hard <hash>` | ✅ yes | ❌ no |
| Go back, keep your code | `git stash` + `checkout` | ❌ no | ❌ no |