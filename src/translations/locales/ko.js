export default {
  common: {
    homeLabel: 'Home',
    proposalsLabel: 'proposals',
    proposalsLabel2: 'Proposals',
    aboutLabel: 'About',
    workersLabel: 'Workers',
    findOutMore: 'Find out more',
    days: 'days',
    day: 'day',
    ends: 'ends',
    starts: 'starts',
    proxy: 'proxy',
    total: 'total',
    by: 'by',
    for: 'for',
    here: 'here',
    supportLabel: 'Support',
    contactsLabel: 'Contacts',
    createProposalLabel: 'Create Proposal',
    totalProposals: 'Total Proposals',
    completedProposals: 'Completed Proposals',
    totalBudget: 'Total Budget',
    dailyBudget: 'Daily Budget',
    dailyPay: 'Daily pay',
    duration: 'Duration',
    totalVotes: 'Total votes',
    loadingVotes: 'Loading votes. Be patient!',
    submitWithButton: 'Submit with ',
    pageNotFound: 'Page not found',
    returnHome: 'Return Home?',
    underConstruction: 'This page is under construction!',
    cantFindProposal: 'Ooops. Can\'t find your proposal!',
    startedProposalsLabel: 'Started',
    upcomingProposalsLabel: 'Upcoming',
    completedProposalsLabel: 'Completed',
    allProposalsLabel: 'All',
    dmitrydaoProposalsLabel: 'By @dmitrydao'
  },

  keychain: {
    voteApprove: 'Approve Vote',
    voteRemove: 'Remove Vote',
    inputLabel: 'Enter your Steem account name:',
    placeholder: 'name',
    voteLabel1: '2. Do you want to approve or remove your vote?',
    voteLabel2: '3. Choose one of the options to vote for this proposal:',
    voteLabel3: '3. Vote: ',
    voteWithLabel: 'Vote with'
  },

  about: {
    subtitle: 'Some basic info on Steem Proposals',
    
    header1: 'What is Steem Ppoposals?',
    description1: 'Steem Proposals is a budgeting system for Steem blockchain. It’s a basic UI that shows the latest proposals that entrepreneurs, companies and individuals publish to receive funding for projects that can help to grow and improve Steem ecosystem.',
    
    header2: 'Developed for Community',
    description2: 'Worker Proposal System (SPS) was developed by a community member @blocktrades for community members and implemented during HF21. This website represents only one of the potenital interfaces of proposals on Steem blockchain.',
    
    header3: 'Supported by Community',
    description3: 'Steem Proposals is supported by @dmitrydao, a front-end dev and a Steem Witness.'
  },

  createProposal: {
    submitProposalTitle: 'Submit the form for your proposal to go live',
    titleInputLabel: 'A short title for your proposal',
    titleInputPlaceholder: 'Enter subject',

    dailypayInputLabel: 'Daily requested amount in SBD',
    dailypayInputDescription: 'SBD is Steen-backed dollars (1 SBD ~ 1 USD)',
    dailypayInputPlaceholder: 'Enter requested daily pay in SBD',

    permlinkInputLabel: 'Proposal permlink',
    permlinkInputDescription: 'Permlink is a URL for proposal description (Steem post), i.e. create-cool-app',
    permlinkInputPlaceholder: 'Enter proposal permlink',

    creatorInputLabel: 'Proposal creator',
    creatorInputDescription: 'Creator is a Steem account that publishes a proposal',
    creatorInputPlaceholder: 'Enter proposal creator',

    receiverInputLabel: 'Proposal receiver',
    receiverInputDescription: 'Receiver is a Steem account that receives funding for proposal',
    receiverInputPlaceholder: 'Enter proposal receiver',

    startdateLabel: 'Start date',
    enddateLabel: 'End date',
    feeLabel: '*Notice, there\'s 10 SBD submission fee, so make sure to have it in your creator account.',
    
  },

  dashboard: {
    title: 'Steem Proposals',
    subtitle: 'A list of latest proposals submitted to a Steem network',
    newsText: 'Like what you see? Support the devs with your vote!',
    newsBadge: 'Hot',
    newsDescription: 
    'Steem Proposal platform was created by' + '@dmitrydao'.link('https://steemit.com/@dmitrydao') +
    '. This proposal covers development efforts of existing system and ensures frequent releases of new features.' +
    ' You can read the full description ' + 'here'.link('https://steemit.com/steemdao/@dmitrydao/steem-proposals-proposal-reimbursement-and-upcoming-features') +
    ' and approve your vote below if you find this service useful.'
  },
  
  faq: {
    title: 'FAQ',
    subtitle: 'The most frequently asked questions about Steem Proposals',
    category1: 'Steem Proposals 101',
    category2: 'Steem Blockchain 101',

    faqQuestion1: 'What is a Steem Worker Proposal System?',
    faqAnswer1: 'A worker proposal system allows Steem users to publicly propose work that they are willing to do in exchange\
    for pay. Steem users can then vote on these proposals in almost the same way they vote for witnesses\
    (stake weighted votes, but voters can vote for as many proposals as they want). The proposals that get a sufficient\
    amount of vote weight get funded from a special Steem account controlled by the blockchain.',

    faqQuestion2: 'Where does the funding come from?',
    faqAnswer2: 'The funding is generated from an extra inflation that was established during the hardfork 21.\
    Since then 10% of all newly generated tokens are going to SteemDAO account.',

    faqQuestion3: 'Is it free to submit a proposal?',
    faqAnswer3: 'There\'s a 10 SBD fee that is charged before you submit a proposal. This prevents spamming and creation of projects with no value.',

    faqQuestion4: 'What is a Steem Blockchain?',
    faqAnswer4: 'Steem is a social blockchain that grows communities and makes immediate revenue streams possible for users by rewarding\
    them for sharing content. It’s currently the only blockchain that can power real applications via social apps like Steemit.',

    faqQuestion5: 'What is steemit.com?',
    faqAnswer5: 'Steemit has redefined social media by building a living, breathing, and growing social economy - a community where users\
    are rewarded for sharing their voice. It\'s a new kind of attention economy. Steemit.com is one of the many websites (including Busy.org, DTube, \
    and Utopian.io) that are powered by the Steem blockchain and STEEM cryptocurrency.'
  },

  features: {
    title: 'A modern way to fund your projects',
    subtitle: 'With Steem Proposals System you get financial, as well as professional support from the biggest blockchain community.',
    benefit1: 'Perfect for modern startups',
    benefit2: 'Built with security in mind',
    benefit3: 'Quality feedback from likeminded entrepreneurs',
    process: 'The process',
    processStep1Title: 'Research',
    processStem1Info: 'Make a research on how you can help Steem blockchain to grow. You can start with your current skillset.',

    processStep2Title: 'Explain',
    processStem2Info: 'Compose a detailed post about your proposal with milestones, deadlines and your team background.',

    processStep3Title: 'Receive votes',
    processStem3Info: 'Submit your proposal to Steem blockchain. Engage with community to get enough votes and funding.',

    processStep4Title: 'Build',
    processStem4Info: 'Create what you envisioned. Share the results with Steem community. Improve and experiment.',

    cta1Title: 'It\'s time to change your life',
    cta1Subtitle: 'Steem has helped dozens of entrepreneurs to create unique business models and attract thousands of active users to Steem-based applications.',

    recentProposalTitle: 'Recent proposals',
    recentProposalSubtitle: 'Check the most recent proposals to get inspired to create your own',
    viewAllProposalsLabel: 'View all proposals',

    cta2Title: 'It\'s time to create your proposal',
    cta2Subtitle: 'You never know how great your idea is until you make it happen. You can always go back to your job, \
    you can\'t always make something worthwhile for the people around you. Don\'t wait.'
  },

  home: {
    title: 'Explore Steem Proposals System',
    subtitle: 'Steem allocates budget for talented entrepreneurs to grow its ecosystem. Have some skill or service to offer? Give it a chance.',
    browse: 'Browse Proposals'
  },

  vote: {
    steemOn: 'Steem On',
    steemProposalsTitle: 'Steem Proposals is a new way to fund and grow blockchain communities',
    supportWith: 'Support With',
    supportingProposal: 'Supporting Proposal',
    steemAccount: '*You need to have a Steem Account to support this initiative.',
    supportersLabel: ' supporters',
    totalVotesValue: 'Total votes value: ',
    details: 'Details: ',
    steemitPost: 'Steemit post',
    requestedFunding: 'Requested funding ',
    createdBy: 'Created by',
    supportedByCommunity: 'This proposal is supported by the following community members'
  },
  
  workers: {
    cantFindWorkers: 'Oops. It seems there are no workers available yet.',
    findWorkerHistoryBelow: 'You can find the full history of proposals below.',
    completedWorkerProposals: 'Completed proposals',
    proposalsInProgress: 'Proposals in progress',
    upcomingProposals: 'Upcoming proposals',
    workerStats: 'Worker stats'
  },

  workerProposals: {
    title: 'Worker Proposals',
    subtitle: 'A list of all proposals submitted by particular worker'
  },

  proposals: {
    emptyState: 'Empty is also a beautiful state',
    insufficientVotes: 'INSUFFICIENT VOTES',
    miminumThreshold: 'The minimum votes threshold to receive funding is',
    proposalVoters: 'Proposal voters',
    returningProposalTitle: 'This is a returning proposal',
    returningProposalInfo1: 'Returning proposal acts as a certain threshhold you need to pass to receive funding',
    returningProposalInfo2: 'Essentially, it returns money back to Steem Proposal System\'s account',
    returningProposalInfo3: 'The current returning proposal was created by',
    returningProposalInfo4: 'You can check the full description',
    returningProposalInfo5: 'It is advisable to upvote this proposal only if your goal is to increase the passing threshhold. You can approve/romove your vote using the form below.'
  }
}