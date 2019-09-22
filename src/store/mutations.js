export default {
  SET_ACCOUNTS: (state, accounts) => { state.accounts = accounts },
  SET_ACCOUNT: (state, account) => { state.account = account },
  SET_VOTING_THRESHHOLD: (state, threshhold) => { state.votingThreshhold = threshhold },
  SET_TOTAL_BUDGET: (state, totalBudget) => { state.totalBudget = totalBudget },
  SET_DAILY_BUDGET: (state, dailyBudget) => { state.dailyBudget = dailyBudget },
  SET_PROPOSALS: (state, proposals) => { 
    let newproposals = []
    newproposals = proposals.map(p => {
      const container = {}
      
      // duration
      const dt2 = new Date(p.end_date)
      const dt1 = new Date(p.start_date)
      const oneDay = 1000 * 60 * 60 * 24
      const duration = Math.round((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - 
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / oneDay)

      container.id = p.id
      container.proposal_id = p.proposal_id
      container.receiver = p.receiver
      container.creator = p.creator
      container.daily_pay = p.daily_pay.amount / 1000
      container.permlink = p.permlink
      container.start_date = p.start_date
      container.end_date = p.end_date
      container.duration = duration
      container.total_requested = p.daily_pay.amount/1000*duration
      container.status = p.status
      container.subject = p.subject
      container.total_votes = p.total_votes * state.steemPerMVest / 1000000000

      // returning/ burning status
      if (p.receiver === 'steem.dao') {
        container.returning_status = true
      } else {
        container.returning_status = false
      }
      if (p.receiver === 'null') {
        container.burning_status = true
      } else {
        container.burning_status = false
      }
      return container
    })
    state.proposals = newproposals 
  },
  SET_PROPOSAL: (state, proposal) => { state.proposal = proposal },
  SET_RETURNING_PROPOSAL: (state, proposal) => {
    Object.keys(proposal).map(p => {
      if (p === 'total_votes') {
        proposal['total_votes'] = proposal['total_votes'] * state.steemPerMVest / 1000000000
      } else {
        proposal[p] = proposal[p]
      }
    })
    state.returningProposal = proposal
  },
  SET_VOTERS: (state, voters) => { state.voters = voters },
  SET_GLOBAL_PROPERTIES: (state, properties) => { state.globalProperties = properties },
  SET_STEEM_PER_MVEST: (state, steemPerMVest) => { state.steemPerMVest = steemPerMVest },
  SET_LANGUAGE: (state, language) => { state.language = language },
  SET_TOTAL_PROPOSAL_VOTERS: (state, totalVoters) => { state.totalProposalVoters = totalVoters },
  SET_PROPOSAL_VOTERS: (state, voters) => { 
    if(voters !== undefined && voters.length && state.accounts !== undefined && state.accounts.length) {
      let newVoters = []
      let totalSP = 0
      let steemPerMVest = state.steemPerMVest
      let account = ''
      let proxyAccount = ''
      let proxySP = 0
      let voterSP = 0
      voters.forEach(voter => {
        account = state.accounts.find(account => account.name === voter)
        proxySP = 0
        voterSP = 0
        proxyAccount = account.proxy
        if(account !== undefined) {
          voterSP = parseFloat(account.vesting_shares)*steemPerMVest/1000
          account.proxied_vsf_votes.forEach(votes => {
            proxySP += parseFloat(votes)*steemPerMVest/1000000000
          })
          let totalAccountSP = voterSP + proxySP
          if (proxyAccount === '') {
            totalSP += voterSP + proxySP
          }
          newVoters.push({voter: voter, sp: voterSP, proxySP: proxySP, totalAccountSP: totalAccountSP, totalSP: totalSP, proxyAccount: proxyAccount})
        }
      })
    newVoters.sort((a, b) => b.totalAccountSP - a.totalAccountSP)
    state.proposalVoters = newVoters
    }
  }
}
