# But du projet
Ce projet a pour but de concevoir un bot Ddiscord qui permettra une mise en contact avec une API, ici celle de [chatGPT](https://platform.openai.com/).

# Installation
## Cloner le repo
Copiez collez ces ligne dans votre terminal:
```bash
git clone git@github.com:theotime2005/eliza.git
cd eliza
```

## Configurer les variables d'environnement
Créer un fichier ".env" et collez le contenu suivant:
```.dotenv
BOT_TOKEN=votre_token_discord
AI_TYPE=openAI
GEMINI_KEY=
GPT_KEY=votre_clef_gpt
```
Remarque: Gemini est pris en charge mais n'a  pas pu être testé en raison de l'impossibilité d'accéder à la page de l'API.

### Créer le bot sur discord
Dans l'application discord, rendez-vous dans les paramètres section "Avancé" et cocher la case "Activer le mode développeur". Cela fait, rendez-vous sur le [portail des développeurs Discord](https://discord.com/developers/applications).

Là, créez une application et donnez-lui le nom que vous souhaitez. Rendez-vous ensuite dans la section "bot" et définissez votre token ainsi que les autorisation de lectur des messages et l'envoi de messages, que vous copirez dans le fichier ".env". Rendez-vous ensuite dans la section "Installation new" et activez les autorisations avant de cliquer sur "Save".

### Configurerr la plateforme d'OpenAI
Rendez-vous sur la [Plateforme chatGPT](https://platform.openai.com/) et créez un compte. Cela fait, allez dans la section "API keies". Créez un nouveau token auquel vous allez donner un nom, puis copiez le dans le fichier ".env".


## Installation des dépendances
C'est bon? Vous vous êtes bien amusé avec la création du bot et la configuration de OpenAI? Revenons à notre dossier qui contient nos sources. Exécutez la commande suivante pour installer les dépendances:
```bash
npm install
```

## Lancement
Pour lancer le bot, vous avez 2 options:
Le mode développement qui redémarrera après chaques modifications:
```bash
npm run dev
```
Le mode normal, qui s'arrêtera si il plante:
```bash
npm start
```

# Utilisation
Pour utiliser le bot une fois celui-ci intégré dans un serveur, vous n'aurez qu'à mentionner son nom puis à poser votre question. Le bot répondra alors en vous mentionnant, permettant ainsi de bien faire la différence entre plusieurs conversations.