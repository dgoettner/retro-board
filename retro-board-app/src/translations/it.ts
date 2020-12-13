import { Translation } from './types';
export default {
  Header: {
    subtitle: 'Un buon modo per esprimersi in Agile',
    logout: 'Logout',
    leave: 'Abbandona',
    summaryMode: 'Modalità sommario',
    account: undefined,
  },
  LanguagePicker: {
    header: 'Scegli una lingua',
  },
  Main: {
    hint:
      'Puoi invitare altre persone a questa sessione copiando ed incollando la URL',
  },
  Home: {
    welcome: (userName: string) => `Benvenuto/a, ${userName}`,
  },
  PreviousGame: {
    createdBy: 'Creato da',
    posts: 'post',
    participants: 'partecipanti',
    votes: 'voti',
    actions: 'azioni',
  },
  Column: {
    createGroupTooltip: 'Crea un gruppo per raggruppare i post',
  },
  Group: {
    emptyGroupTitle: 'Questo gruppo è vuoto',
    emptyGroupContent: 'Sposta qui un post per popolare il gruppo',
  },
  Post: {
    openExtra: 'Features aggiuntive',
    closeExtra: 'Chiudi',
    vote: 'voto',
    votes: 'voti',
    deleteButton: 'Cancella',
    setActionButton: 'Imposta azione',
    setGiphyButton: 'Scegli una immagine Giphy',
    noContent: '(Questo post non ha contenuto)',
    by: 'da',
    upVote: 'mi piace',
    downVote: 'non mi piace',
    voteRemainingMultiple: (count: number, type: string) =>
      `Hai ${count} ${type}/i restanti.`,
    voteRemainingOne: (type: string) =>
      `Hai solo un ${type} restante, usalo bene!`,
    voteRemainingNone: (type: string) => `Non hai nessun ${type} restante.`,
    toggleGiphyButton: 'Toggle immagine Giphy',
  },
  Customize: {
    title: 'Personalizza il tuo gioco!',
    votingCategory: 'Votazione',
    votingCategorySub:
      'Imposta tutte le regole relative a "mi piace" e "non mi piace"',
    postCategory: 'Impostazioni del Post',
    postCategorySub:
      "Imposta le azioni che l'utente può fare quando crea o vede un post ",
    customTemplateCategory: 'Template di Colonna',
    customTemplateCategorySub:
      'Imposta il numero di colonne e le sue caratteristiche',
    startButton: 'Fai partire il gioco!',
    maxUpVotes: 'Numero massimo di "mi piace"',
    maxUpVotesHelp: `Numero massimo di "mi piace" che un utente può mettere`,
    maxDownVotes: 'Numero massimo di "non mi piace"',
    maxDownVotesHelp: `Numero massimo di "non mi piace" che un utente può mettere`,
    allowSelfVoting: "Permettere l'auto votazione",
    allowSelfVotingHelp:
      'Se consentire ad un utente di votare sul proprio post',
    allowMultipleVotes: 'Permettere votazioni multiple',
    allowMultipleVotesHelp:
      'Se consentire a un utente di votare più volte sullo stesso post',
    allowActions: 'Permettere Azioni',
    allowActionsHelp: `Se consentire il campo "Azione" (follow-up) su ciascun post`,
    allowAuthorVisible: 'Mostra Autore',
    allowAuthorVisibleHelp: "Mostra l'autore del post nel post stesso.",
    allowGiphy: 'Consenti Giphy',
    allowGiphyHelp: 'Permetti la creazione di gruppi per raggruppare post',
    allowGrouping: 'Consenti il raggruppamento',
    allowGroupingHelp: 'Permetti la creazione di gruppi per raggruppare post',
    allowReordering: 'Consenti il riordinamento',
    allowReorderingHelp:
      'Permetti il riordinamento dei post con il trascinamento',
    blurCards: undefined,
    blurCardsHelp: undefined,
    template: 'Template',
    templateHelp: 'Usa un set di colonne predefinito',
    numberOfColumns: 'Numbero di colonne',
    numberOfColumnsHelp: 'Imposta il numero di colonne',
    makeDefaultTemplate: 'Rendi questo template quello di default',
  },
  PostBoard: {
    customQuestion: 'Colonna personalizzata',
    notWellQuestion: 'Cosa potrebbe essere migliorato?',
    wellQuestion: 'Cosa è andato bene?',
    ideasQuestion: 'Qualche idea brillante da condividere?',
    startQuestion: 'Inizia',
    editButton: undefined,
    stopQuestion: 'Stop',
    continueQuestion: 'Continua',
    likedQuestion: 'Piaciuto',
    lackedQuestion: 'Mancava',
    learnedQuestion: 'Imparato',
    longedForQuestion: 'Atteso',
    anchorQuestion: 'Ancora',
    boatQuestion: 'Barca',
    islandQuestion: 'Isola',
    windQuestion: 'Vento',
    rockQuestion: 'Roccia',
    disconnected: 'Ti sei disconnesso/a dalla sessione corrente.',
    reconnect: 'Riconnesso',
    notLoggedIn:
      'Non sei autenticato. Puoi assistere a questa sessione come spettatore ma non puoi partecipare',
  },
  GameMenu: {
    board: 'Board',
    summary: 'Sommario',
  },
  Template: {
    default: 'Default',
    wellNotWell: 'Ok / Non Ok',
    startStopContinue: 'Inizia / Stop / Continua',
    fourLs: 'Quattro Ls',
    sailboat: 'Barca a Vela',
  },
  Clients: {
    header: 'Partecipanti:',
    joined: undefined,
    left: undefined,
  },
  Join: {
    welcome: 'Benvenuto su Retrospected',
    standardTab: {
      header: 'Crea',
      text: 'Clicca qui sotto per iniziare la retrospective',
      button: 'Crea una nuova sessione',
      customizeButton: 'Personalizza',
    },
    optionsTab: {
      header: 'Opzioni',
      input: 'Nome',
      button: 'Crea una sessione personalizzata',
    },
    previousTab: {
      header: 'Precedente',
      rejoinButton: 'Riunisciti',
    },
  },
  AnonymousLogin: {
    namePlaceholder:
      'Benvenuto! Per favore inserisci il tuo nome per continuare',
    buttonLabel: 'Iniziamo',
    header: 'Login',
    anonymousAuthHeader: 'Login anonimo',
    anonymousAuthDescription:
      'Questo creerà un account anonimo, ma non ti permetterà di recuperare le sessioni precedenti.',
    authenticatingWith: 'Accedi con',
    or: 'oppure',
  },
  SocialMediaLogin: {
    header: 'Autenticazione con i Social Media',
    info:
      'Questo utilizzerà il tuo account per autenticarti e ti permetterà di recuperare tutte le tue sessioni. Nessuna password viene memorizzata.',
  },
  AuthCommon: {
    emailField: undefined,
    passwordField: undefined,
    nameField: undefined,
    passwordScoreWords: undefined,
  },
  AccountLogin: {
    header: undefined,
    loginButton: undefined,
    info: undefined,
    registerLink: undefined,
    forgotPasswordLink: undefined,
    errorEmailPasswordIncorrect: undefined,
  },
  Register: {
    header: undefined,
    info: undefined,
    registerButton: undefined,
    errorAlreadyRegistered: undefined,
    errorGeneral: undefined,
    messageSuccess: undefined,
    errorInvalidEmail: undefined,
  },
  ValidateAccount: {
    success: undefined,
    error: undefined,
    loading: undefined,
  },
  ResetPassword: {
    // Reset Modal
    doneMessage: undefined,
    header: undefined,
    resetButton: undefined,
    info: undefined,
    // Reset Page
    success: undefined,
    error: undefined,
    loading: undefined,
    resetInfo: undefined,
  },
  SummaryBoard: {
    noPosts: 'Non ci sono post da mostrare',
    copyAsMarkdown: 'Copia il sommario come Markdown',
    copyAsRichText: 'Copia il sommario come Rich Text',
    copySuccessful: 'Hai copiato con successo il testo nella clipboard',
  },
  SessionName: {
    defaultSessionName: 'La mia Retrospective',
  },
  Invite: {
    inviteButton: 'Invita',
    dialog: {
      title: 'Invita persone alla tua retrospective',
      text:
        'Per invitare persone alla tua sessione di retrospective, devi solo inviare loro' +
        'la seguente URL',
      copyButton: 'Copia la URL nella Clipboard',
    },
  },
  Generic: {
    ok: 'OK',
    cancel: 'Cancella',
  },
  Actions: {
    tooltip: "Crea un'azione dietro a questo item",
    label: "Apri l'Action panel",
    summaryTitle: 'Le tue Azioni',
    title: 'Azione',
  },
  DeleteSession: {
    header: undefined,
    firstLine: undefined,
    secondLine: undefined,
    yesImSure: undefined,
    cancel: undefined,
  },
  RevealCards: {
    buttonLabel: undefined,
    dialogTitle: undefined,
    dialogContent: undefined,
    confirmButton: undefined,
    cancelButton: undefined,
  },
  AccountPage: {
    anonymousError: undefined,
    details: {
      header: undefined,
      username: undefined,
      email: undefined,
      accountType: undefined,
    },
    plan: {
      header: undefined,
      plan: undefined,
      youAreOwner: undefined,
      youAreMember: undefined,
    },
    subscription: {
      header: undefined,
      manageButton: undefined,
      membersEditor: {
        title: undefined,
        limitReached: undefined,
        info: undefined,
      },
    },
  },
  SubscribePage: {
    alertAlreadyPro: undefined,
    alertAlreadySubscribed: undefined,
    currency: {
      title: undefined,
      description: undefined,
      warning: undefined,
    },
    plan: {
      title: undefined,
      description: undefined,
    },
    domain: {
      title: undefined,
      description: undefined,
      invalidDomain: undefined,
    },
    subscribe: {
      title: undefined,
      description: undefined,
      cannotRegisterWithAnon: undefined,
      checkout: undefined,
    },
  },
  SubscribeModal: {
    title: undefined,
    header: undefined,
    description: undefined,
    features: {
      encryptedSession: {
        title: undefined,
        description: undefined,
      },
      privateSessions: {
        title: undefined,
        description: undefined,
      },
    },
    subscribeButton: undefined,
    cancelButton: undefined,
  },
  Products: {
    team: undefined,
    unlimited: undefined,
    users: undefined,
    unlimited_seats: undefined,
    month: undefined,
  },
  Encryption: {
    createEncryptedSession: undefined,
    sessionNotEncrypted: undefined,
    sessionEncryptedHaveKeyTooltip: undefined,
    sessionEncryptedNoKeyTooltip: undefined,
    sessionEncryptedWrongKeyTooltip: undefined,
    newEncryptedSessionWarningTitle: undefined,
    newEncryptedSessionWarningContent: undefined,
    sessionEncryptionError: undefined,
    passwordModalTitle: undefined,
    passwordModelIncorrect: undefined,
  },
  Private: {
    lockSuccessNotification: undefined,
    unlockSuccessNotification: undefined,
    lockButton: undefined,
    unlockButton: undefined,
    lockDescription: undefined,
    cancelButton: undefined,
    sessionLockedTitle: undefined,
    sessionLockedDescription: undefined,
    sessionNonProTitle: undefined,
    sessionNonProDescription: undefined,
    sessionIsPublic: undefined,
    sessionIsPrivate: undefined,
    sessionIsPrivateNoAccess: undefined,
  },
} as Translation;
