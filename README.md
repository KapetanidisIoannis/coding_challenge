# Junior Coding Challenge – GitHub Repositories Viewer

## Project Description

Αυτή η εφαρμογή είναι μια React web app που αντλεί δεδομένα από το **GitHub Public API** και εμφανίζει όλα τα repositories του λογαριασμού **Google**.  
Παρέχει λειτουργίες όπως:

- Φόρτωση και εμφάνιση repos σε μορφή καρτών.
- Εμφάνιση βασικών πληροφοριών (όνομα, stars, περιγραφή, link).
- Ειδικό εικονίδιο για “popular” repos με πάνω από 1000 stars.
- Δυναμικό **search** για φιλτράρισμα repos με βάση το όνομα.
- **Sorting** (αλφαβητικά και κατά stars).

---

## Technical & Design Decisions

- **React.js** με χρήση **Hooks (useState, useEffect)** για state management.
- **App.css** για layout και styling.
- Δημιουργία ξεχωριστών components (`RepoCard`, `SearchBar`, `Loader`) για καθαρή και επαναχρησιμοποιήσιμη δομή κώδικα.

---

## How to Run Locally

1. Κάνε clone το repository:
   ```bash
   git clone https://github.com/KapetanidisIoannis/Junior_Coding_Challenge.git
   cd Junior_Coding_Challenge
   ```
2. Εγκατάστησε τα dependencies: npm install
3. Τρέξε την εφαρμογή σε development mode: npm start
