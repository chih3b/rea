# 🔐 Real Estate CRM - Guide d'Accès

## 📌 Interfaces Disponibles

Ce projet contient **3 interfaces distinctes** basées sur les acteurs du document:

---

## 1️⃣ Interface Client/Prospect (PUBLIC) 🏠

### Accès:
```
URL: http://localhost:3000/submit-lead
```

### Description:
- **Interface publique** (sans connexion)
- Formulaire de soumission de lead
- Le client remplit ses informations et critères de recherche
- Envoie les données au webhook n8n pour traitement automatique

### Fonctionnalités:
- ✅ Formulaire de demande de propriété
- ✅ Validation des champs obligatoires
- ✅ Consentement RGPD
- ✅ Confirmation de soumission avec prochaines étapes
- ✅ POST vers webhook n8n (à configurer)

### Qui l'utilise?
- **Prospects/Clients** cherchant à acheter ou louer

---

## 2️⃣ Interface Sales Agent 👨‍💼

### Accès:
```
URL: http://localhost:3000/login
Username: agent
Password: demo123
```

### Description:
- **Interface dédiée aux agents commerciaux**
- Vue de leurs leads assignés uniquement
- Outils pour gérer le contact client

### Fonctionnalités:
- ✅ Mes leads assignés
- ✅ Follow-ups du jour (priorité haute)
- ✅ Script d'appel avec informations client
- ✅ Actions rapides (Appelé, Qualifié, RDV, Converti, Perdu)
- ✅ Prise de notes
- ✅ Stats personnelles (leads, conversions)

### Pages accessibles:
- `/agent-dashboard` - Tableau de bord agent

### Qui l'utilise?
- **Sales Agent / Sales Employee**
- Exemple: Karim Mansour, Leila Najjar

---

## 3️⃣ Interface Sales Manager 👔

### Accès:
```
URL: http://localhost:3000/login
Username: manager
Password: demo123
```

### Description:
- **Interface complète de gestion et monitoring**
- Vue d'ensemble de toute l'activité CRM
- Rapports et analytics avancés

### Fonctionnalités:
- ✅ Dashboard avec KPIs globaux
- ✅ Gestion complète de tous les leads (CRUD)
- ✅ **Base de données propriétés avec CRUD complet**
  - ➕ **Ajouter nouvelles propriétés**
  - ✏️ **Modifier propriétés existantes**
  - 🗑️ **Supprimer propriétés**
  - 📸 **Upload d'images**
  - 🏷️ **Gestion des features/amenities**
- ✅ Visualisation workflow n8n
- ✅ Rapports ROI détaillés
- ✅ Analyse AS-IS vs TO-BE
- ✅ Performance des agents

### Pages accessibles:
- `/dashboard` - Vue d'ensemble & KPIs
- `/leads` - Gestion de tous les leads
- `/properties` - Base de données propriétés (CRUD complet)
- `/properties/new` - Ajouter nouvelle propriété
- `/properties/:id` - Voir détails propriété
- `/properties/:id/edit` - Modifier propriété
- `/automation` - Workflow n8n
- `/reports` - Analytics & ROI
- `/process-comparison` - AS-IS vs TO-BE

### Qui l'utilise?
- **Sales Manager**
- Vue complète et permissions d'administration

---

## 🎯 Résumé des Accès

| Interface | URL | Username | Password | Rôle |
|-----------|-----|----------|----------|------|
| **Client Form** | `/submit-lead` | - | - | Public (pas de login) |
| **Sales Agent** | `/login` | `agent` | `demo123` | Agent commercial |
| **Sales Manager** | `/login` | `manager` | `demo123` | Manager |

---

## 🔄 Workflow Complet

### 1. Client soumet le formulaire
```
/submit-lead → Formulaire public
```

### 2. n8n traite automatiquement
```
Webhook → Validation → Google Sheets → AI → Matching → Email
```

### 3. Agent reçoit le lead
```
Login en tant qu'agent → /agent-dashboard → Voir lead assigné → Appeler client
```

### 4. Manager supervise
```
Login en tant que manager → /dashboard → Voir tous les KPIs et leads
```

---

## 🚀 Pour Démarrer

1. **Installer les dépendances:**
```bash
npm install
```

2. **Lancer le serveur de développement:**
```bash
npm run dev
```

3. **Accéder aux interfaces:**
- Page de login: `http://localhost:3000/login`
- Formulaire public: `http://localhost:3000/submit-lead`

---

## 🔧 Configuration n8n (À faire en production)

### Webhook Configuration:
Dans `PublicLeadForm.jsx`, ligne ~60, modifier:
```javascript
// Remplacer l'URL du webhook par votre webhook n8n
const webhookUrl = 'https://your-n8n-instance.com/webhook/lead-submission'
```

### Google Sheets Configuration:
Votre workflow n8n doit:
1. Recevoir le webhook
2. Valider les données
3. Créer/mettre à jour dans Google Sheets
4. Lancer l'AI pour qualification
5. Matcher les propriétés
6. Envoyer email/WhatsApp
7. Assigner à un agent

---

## 📊 Données de Démonstration

Le système utilise des **données mock** dans `src/data/mockData.js`:
- 6 leads d'exemple
- 5 propriétés
- 3 agents
- KPIs et métriques ROI

En production, ces données viendront de:
- Google Sheets (via API)
- n8n workflow updates
- Base de données réelle

---

## ✅ Checklist de Démonstration

Pour une démo réussie, montrer:

1. ✅ **Formulaire public** - Comment un client soumet sa demande
2. ✅ **Workflow automation** - Page `/automation` montrant n8n
3. ✅ **Agent Dashboard** - Comment l'agent gère ses leads
4. ✅ **Manager Dashboard** - Vue complète avec KPIs
5. ✅ **ROI & Reports** - Justification du projet avec chiffres réels
6. ✅ **AS-IS vs TO-BE** - Démontrer l'optimisation (83% gain)

---

## 🎭 Mode Démo

Les identifiants fournis sont **pour démonstration uniquement**.

En production, implémenter:
- Authentification JWT
- Base de données utilisateurs
- Gestion des rôles (RBAC)
- Session persistante
- Protection des routes

---

## 📝 Notes Importantes

1. **Client = Lead = Prospect** - Termes utilisés de manière interchangeable
2. Le client **NE SE CONNECTE PAS** - il soumet juste le formulaire une fois
3. Seuls **Agent** et **Manager** se connectent à la plateforme
4. Le workflow n8n fait le pont entre le formulaire public et la plateforme interne

---

## 🆘 Support

Pour toute question sur l'utilisation de la plateforme, consulter:
- Documentation du workflow: `/automation`
- Analyse du processus: `/process-comparison`
- Rapports détaillés: `/reports`
