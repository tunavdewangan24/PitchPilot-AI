const $ = (id) => document.getElementById(id);

const venues = [
  'Wankhede Stadium, Mumbai', 'Eden Gardens, Kolkata', 'M. Chinnaswamy Stadium, Bengaluru',
  'MA Chidambaram Stadium, Chennai', 'Narendra Modi Stadium, Ahmedabad', 'Arun Jaitley Stadium, Delhi',
  'Rajiv Gandhi Stadium, Hyderabad', 'Ekana Stadium, Lucknow', 'Dubai International Stadium',
  'Melbourne Cricket Ground', 'Lord\'s, London', 'Gaddafi Stadium, Lahore'
];

const tournaments = {
  'IPL 2026': ['Mumbai Indians', 'Chennai Super Kings', 'Royal Challengers Bengaluru', 'Kolkata Knight Riders', 'Rajasthan Royals', 'Sunrisers Hyderabad', 'Delhi Capitals', 'Punjab Kings', 'Lucknow Super Giants', 'Gujarat Titans'],
  'World Cup': ['India', 'Australia', 'England', 'Pakistan', 'South Africa', 'New Zealand'],
  'T20 International': ['India', 'Australia', 'England', 'Pakistan', 'South Africa', 'New Zealand'],
  'Custom Match': []
};

const fixtures = [
  ['IPL 2026', 'Mumbai Indians', 'Chennai Super Kings', 'Wankhede Stadium, Mumbai'],
  ['IPL 2026', 'Royal Challengers Bengaluru', 'Kolkata Knight Riders', 'M. Chinnaswamy Stadium, Bengaluru'],
  ['IPL 2026', 'Rajasthan Royals', 'Sunrisers Hyderabad', 'Narendra Modi Stadium, Ahmedabad'],
  ['IPL 2026', 'Delhi Capitals', 'Punjab Kings', 'Arun Jaitley Stadium, Delhi'],
  ['IPL 2026', 'Lucknow Super Giants', 'Gujarat Titans', 'Ekana Stadium, Lucknow'],
  ['World Cup', 'India', 'Australia', 'Melbourne Cricket Ground'],
  ['World Cup', 'India', 'Pakistan', 'Dubai International Stadium'],
  ['World Cup', 'England', 'New Zealand', 'Lord\'s, London'],
  ['T20 International', 'South Africa', 'Australia', 'Dubai International Stadium']
];

function p(name, role, bat, bowl, field, form) {
  return { name, role, bat, bowl, field, form, overall: Math.round((bat + bowl + field + form) / 4) };
}

const teams = {
  'Mumbai Indians': {
    short: 'MI', color: '#47d9ff',
    players: [
      p('Rohit Sharma', 'Batter', 91, 28, 79, 84), p('Suryakumar Yadav', 'Batter', 95, 18, 82, 91),
      p('Tilak Varma', 'Batter', 86, 32, 78, 84), p('Hardik Pandya', 'All-Rounder', 84, 83, 86, 81),
      p('Ishan Kishan', 'Wicketkeeper', 85, 12, 82, 78), p('Tim David', 'Batter', 82, 18, 74, 76),
      p('Jasprit Bumrah', 'Bowler', 24, 98, 82, 93), p('Piyush Chawla', 'Bowler', 32, 82, 68, 72),
      p('Gerald Coetzee', 'Bowler', 36, 85, 76, 77), p('Akash Madhwal', 'Bowler', 22, 80, 72, 74),
      p('Nehal Wadhera', 'Batter', 78, 28, 75, 73)
    ]
  },
  'Chennai Super Kings': {
    short: 'CSK', color: '#ffd76d',
    players: [
      p('Ruturaj Gaikwad', 'Batter', 90, 16, 82, 88), p('Devon Conway', 'Batter', 86, 14, 78, 80),
      p('Shivam Dube', 'All-Rounder', 86, 54, 74, 83), p('MS Dhoni', 'Wicketkeeper', 78, 10, 90, 76),
      p('Ravindra Jadeja', 'All-Rounder', 78, 88, 96, 86), p('Moeen Ali', 'All-Rounder', 80, 78, 78, 76),
      p('Deepak Chahar', 'Bowler', 45, 84, 73, 74), p('Matheesha Pathirana', 'Bowler', 18, 88, 70, 82),
      p('Tushar Deshpande', 'Bowler', 20, 80, 72, 75), p('Maheesh Theekshana', 'Bowler', 24, 86, 74, 78),
      p('Ajinkya Rahane', 'Batter', 80, 18, 80, 74)
    ]
  },
  'Royal Challengers Bengaluru': {
    short: 'RCB', color: '#ff6b85',
    players: [
      p('Virat Kohli', 'Batter', 96, 20, 88, 94), p('Faf du Plessis', 'Batter', 88, 15, 86, 82),
      p('Glenn Maxwell', 'All-Rounder', 87, 78, 84, 80), p('Rajat Patidar', 'Batter', 83, 12, 74, 80),
      p('Dinesh Karthik', 'Wicketkeeper', 78, 10, 82, 75), p('Cameron Green', 'All-Rounder', 82, 82, 84, 80),
      p('Mohammed Siraj', 'Bowler', 24, 88, 78, 82), p('Yash Dayal', 'Bowler', 20, 80, 72, 74),
      p('Karn Sharma', 'Bowler', 28, 78, 70, 70), p('Mahipal Lomror', 'All-Rounder', 76, 62, 74, 72),
      p('Anuj Rawat', 'Wicketkeeper', 74, 10, 76, 70)
    ]
  },
  'Kolkata Knight Riders': {
    short: 'KKR', color: '#b56cff',
    players: [
      p('Shreyas Iyer', 'Batter', 88, 14, 80, 84), p('Venkatesh Iyer', 'All-Rounder', 82, 62, 78, 79),
      p('Rinku Singh', 'Batter', 87, 10, 82, 86), p('Andre Russell', 'All-Rounder', 86, 85, 80, 82),
      p('Sunil Narine', 'All-Rounder', 76, 90, 84, 88), p('Rahmanullah Gurbaz', 'Wicketkeeper', 80, 12, 76, 75),
      p('Mitchell Starc', 'Bowler', 28, 91, 76, 80), p('Varun Chakravarthy', 'Bowler', 20, 87, 72, 82),
      p('Harshit Rana', 'Bowler', 24, 82, 74, 78), p('Nitish Rana', 'Batter', 82, 36, 78, 76),
      p('Ramandeep Singh', 'All-Rounder', 74, 58, 80, 72)
    ]
  },
  'Rajasthan Royals': {
    short: 'RR', color: '#ff7ad9',
    players: [
      p('Sanju Samson', 'Wicketkeeper', 89, 12, 82, 87), p('Yashasvi Jaiswal', 'Batter', 91, 20, 80, 88),
      p('Jos Buttler', 'Wicketkeeper', 92, 12, 82, 84), p('Riyan Parag', 'All-Rounder', 83, 55, 78, 82),
      p('Shimron Hetmyer', 'Batter', 82, 10, 74, 76), p('Dhruv Jurel', 'Wicketkeeper', 78, 12, 78, 76),
      p('Ravichandran Ashwin', 'All-Rounder', 62, 88, 82, 80), p('Yuzvendra Chahal', 'Bowler', 18, 90, 70, 82),
      p('Trent Boult', 'Bowler', 24, 89, 78, 80), p('Avesh Khan', 'Bowler', 22, 82, 74, 74),
      p('Sandeep Sharma', 'Bowler', 20, 84, 72, 78)
    ]
  },
  'Sunrisers Hyderabad': {
    short: 'SRH', color: '#ff9548',
    players: [
      p('Travis Head', 'Batter', 92, 28, 82, 91), p('Abhishek Sharma', 'All-Rounder', 88, 60, 80, 89),
      p('Aiden Markram', 'All-Rounder', 84, 66, 84, 79), p('Heinrich Klaasen', 'Wicketkeeper', 93, 12, 78, 90),
      p('Nitish Kumar Reddy', 'All-Rounder', 80, 70, 78, 82), p('Abdul Samad', 'Batter', 78, 14, 72, 73),
      p('Pat Cummins', 'Bowler', 50, 92, 84, 88), p('Bhuvneshwar Kumar', 'Bowler', 28, 84, 76, 76),
      p('T Natarajan', 'Bowler', 18, 86, 70, 80), p('Mayank Markande', 'Bowler', 22, 80, 70, 74),
      p('Washington Sundar', 'All-Rounder', 72, 78, 80, 76)
    ]
  },
  'Delhi Capitals': {
    short: 'DC', color: '#5095ff',
    players: [
      p('Rishabh Pant', 'Wicketkeeper', 89, 12, 84, 86), p('David Warner', 'Batter', 86, 18, 80, 78),
      p('Prithvi Shaw', 'Batter', 82, 10, 70, 74), p('Tristan Stubbs', 'Batter', 84, 20, 78, 82),
      p('Axar Patel', 'All-Rounder', 77, 86, 88, 84), p('Mitchell Marsh', 'All-Rounder', 83, 76, 78, 76),
      p('Kuldeep Yadav', 'Bowler', 18, 90, 72, 86), p('Anrich Nortje', 'Bowler', 18, 87, 72, 75),
      p('Khaleel Ahmed', 'Bowler', 20, 82, 72, 77), p('Mukesh Kumar', 'Bowler', 22, 80, 72, 74),
      p('Jake Fraser-McGurk', 'Batter', 85, 12, 76, 82)
    ]
  },
  'Punjab Kings': {
    short: 'PBKS', color: '#ff4757',
    players: [
      p('Shikhar Dhawan', 'Batter', 84, 12, 76, 75), p('Jonny Bairstow', 'Wicketkeeper', 84, 12, 78, 76),
      p('Prabhsimran Singh', 'Wicketkeeper', 78, 10, 74, 74), p('Liam Livingstone', 'All-Rounder', 85, 72, 78, 78),
      p('Sam Curran', 'All-Rounder', 78, 84, 82, 80), p('Jitesh Sharma', 'Wicketkeeper', 80, 10, 78, 78),
      p('Kagiso Rabada', 'Bowler', 28, 90, 78, 82), p('Arshdeep Singh', 'Bowler', 20, 87, 74, 82),
      p('Rahul Chahar', 'Bowler', 22, 82, 72, 74), p('Harpreet Brar', 'All-Rounder', 64, 78, 76, 72),
      p('Shashank Singh', 'All-Rounder', 80, 42, 78, 82)
    ]
  },
  'Lucknow Super Giants': {
    short: 'LSG', color: '#38d9a9',
    players: [
      p('KL Rahul', 'Wicketkeeper', 88, 12, 80, 82), p('Quinton de Kock', 'Wicketkeeper', 86, 10, 78, 78),
      p('Nicholas Pooran', 'Wicketkeeper', 90, 10, 80, 87), p('Marcus Stoinis', 'All-Rounder', 84, 74, 78, 80),
      p('Deepak Hooda', 'All-Rounder', 76, 55, 74, 70), p('Ayush Badoni', 'Batter', 76, 20, 74, 72),
      p('Krunal Pandya', 'All-Rounder', 72, 80, 82, 76), p('Ravi Bishnoi', 'Bowler', 18, 87, 76, 82),
      p('Naveen-ul-Haq', 'Bowler', 20, 84, 72, 78), p('Mohsin Khan', 'Bowler', 18, 82, 72, 76),
      p('Mayank Yadav', 'Bowler', 15, 88, 70, 82)
    ]
  },
  'Gujarat Titans': {
    short: 'GT', color: '#8ab4ff',
    players: [
      p('Shubman Gill', 'Batter', 92, 16, 84, 88), p('Sai Sudharsan', 'Batter', 86, 12, 78, 84),
      p('Kane Williamson', 'Batter', 84, 12, 82, 76), p('David Miller', 'Batter', 82, 10, 78, 75),
      p('Rahul Tewatia', 'All-Rounder', 78, 66, 80, 76), p('Vijay Shankar', 'All-Rounder', 76, 64, 76, 72),
      p('Rashid Khan', 'All-Rounder', 74, 94, 86, 88), p('Mohit Sharma', 'Bowler', 22, 84, 72, 80),
      p('Noor Ahmad', 'Bowler', 18, 83, 72, 78), p('Umesh Yadav', 'Bowler', 18, 80, 74, 72),
      p('Wriddhiman Saha', 'Wicketkeeper', 75, 10, 82, 70)
    ]
  },
  'India': {
    short: 'IND', color: '#4da3ff',
    players: [
      p('Rohit Sharma', 'Batter', 91, 28, 79, 85), p('Virat Kohli', 'Batter', 96, 20, 88, 94),
      p('Yashasvi Jaiswal', 'Batter', 91, 20, 80, 88), p('Suryakumar Yadav', 'Batter', 95, 18, 82, 91),
      p('Rishabh Pant', 'Wicketkeeper', 89, 12, 84, 86), p('Hardik Pandya', 'All-Rounder', 84, 83, 86, 81),
      p('Ravindra Jadeja', 'All-Rounder', 78, 88, 96, 86), p('Jasprit Bumrah', 'Bowler', 24, 98, 82, 93),
      p('Mohammed Siraj', 'Bowler', 24, 88, 78, 82), p('Kuldeep Yadav', 'Bowler', 18, 90, 72, 86),
      p('Arshdeep Singh', 'Bowler', 20, 87, 74, 82)
    ]
  },
  'Australia': {
    short: 'AUS', color: '#ffe066',
    players: [
      p('Travis Head', 'Batter', 92, 28, 82, 91), p('David Warner', 'Batter', 86, 18, 80, 78),
      p('Mitchell Marsh', 'All-Rounder', 83, 76, 78, 76), p('Glenn Maxwell', 'All-Rounder', 87, 78, 84, 80),
      p('Steve Smith', 'Batter', 84, 16, 86, 76), p('Josh Inglis', 'Wicketkeeper', 79, 10, 76, 75),
      p('Marcus Stoinis', 'All-Rounder', 84, 74, 78, 80), p('Pat Cummins', 'Bowler', 50, 92, 84, 88),
      p('Mitchell Starc', 'Bowler', 28, 91, 76, 80), p('Adam Zampa', 'Bowler', 18, 88, 74, 82),
      p('Josh Hazlewood', 'Bowler', 18, 89, 76, 82)
    ]
  },
  'England': {
    short: 'ENG', color: '#d6e8ff',
    players: [
      p('Jos Buttler', 'Wicketkeeper', 92, 12, 82, 84), p('Phil Salt', 'Wicketkeeper', 87, 10, 78, 84),
      p('Jonny Bairstow', 'Wicketkeeper', 84, 12, 78, 76), p('Harry Brook', 'Batter', 86, 14, 78, 82),
      p('Liam Livingstone', 'All-Rounder', 85, 72, 78, 78), p('Moeen Ali', 'All-Rounder', 80, 78, 78, 76),
      p('Sam Curran', 'All-Rounder', 78, 84, 82, 80), p('Jofra Archer', 'Bowler', 26, 90, 80, 78),
      p('Adil Rashid', 'Bowler', 20, 88, 72, 82), p('Mark Wood', 'Bowler', 18, 88, 74, 78),
      p('Reece Topley', 'Bowler', 18, 82, 72, 74)
    ]
  },
  'Pakistan': {
    short: 'PAK', color: '#52ff99',
    players: [
      p('Babar Azam', 'Batter', 92, 12, 78, 86), p('Mohammad Rizwan', 'Wicketkeeper', 88, 10, 82, 84),
      p('Fakhar Zaman', 'Batter', 84, 14, 76, 78), p('Saim Ayub', 'All-Rounder', 82, 62, 76, 78),
      p('Iftikhar Ahmed', 'All-Rounder', 78, 66, 76, 74), p('Shadab Khan', 'All-Rounder', 76, 84, 84, 78),
      p('Imad Wasim', 'All-Rounder', 72, 80, 78, 76), p('Shaheen Afridi', 'Bowler', 28, 92, 78, 84),
      p('Haris Rauf', 'Bowler', 20, 88, 72, 78), p('Naseem Shah', 'Bowler', 18, 86, 72, 78),
      p('Mohammad Amir', 'Bowler', 20, 84, 76, 76)
    ]
  },
  'South Africa': {
    short: 'SA', color: '#4dffac',
    players: [
      p('Quinton de Kock', 'Wicketkeeper', 86, 10, 78, 78), p('Reeza Hendricks', 'Batter', 82, 10, 76, 76),
      p('Aiden Markram', 'All-Rounder', 84, 66, 84, 79), p('Heinrich Klaasen', 'Wicketkeeper', 93, 12, 78, 90),
      p('David Miller', 'Batter', 82, 10, 78, 75), p('Tristan Stubbs', 'Batter', 84, 20, 78, 82),
      p('Marco Jansen', 'All-Rounder', 66, 84, 78, 78), p('Kagiso Rabada', 'Bowler', 28, 90, 78, 82),
      p('Anrich Nortje', 'Bowler', 18, 87, 72, 75), p('Tabraiz Shamsi', 'Bowler', 18, 86, 70, 78),
      p('Keshav Maharaj', 'Bowler', 24, 84, 76, 76)
    ]
  },
  'New Zealand': {
    short: 'NZ', color: '#d7e3ff',
    players: [
      p('Devon Conway', 'Batter', 86, 14, 78, 80), p('Finn Allen', 'Batter', 84, 10, 76, 78),
      p('Kane Williamson', 'Batter', 84, 12, 82, 76), p('Daryl Mitchell', 'All-Rounder', 84, 72, 82, 80),
      p('Glenn Phillips', 'All-Rounder', 82, 64, 88, 80), p('Mark Chapman', 'Batter', 80, 18, 76, 76),
      p('Mitchell Santner', 'All-Rounder', 70, 84, 86, 80), p('Trent Boult', 'Bowler', 24, 89, 78, 80),
      p('Tim Southee', 'Bowler', 22, 84, 78, 74), p('Lockie Ferguson', 'Bowler', 18, 87, 76, 78),
      p('Ish Sodhi', 'Bowler', 18, 84, 72, 76)
    ]
  }
};

let state = {
  tournament: 'IPL 2026', teamA: 'Mumbai Indians', teamB: 'Chennai Super Kings', venue: venues[0], pitch: 'Balanced',
  toss: 'Mumbai Indians', decision: 'Bat First', batting: 'Mumbai Indians', target: 0,
  score: {}, commentary: [], lastBalls: [], history: JSON.parse(localStorage.getItem('pitchpilotHistory') || '[]'),
  liveTimer: null, matchStarted: false, innings: 1
};

function blankScore() { return { runs: 0, wickets: 0, balls: 0 }; }
function allTeamNames() { return Object.keys(teams); }
function scoreOf(name) { if (!state.score[name]) state.score[name] = blankScore(); return state.score[name]; }
function ballsToOvers(balls) { return `${Math.floor(balls / 6)}.${balls % 6}`; }
function oversToBalls(value) {
  const str = String(value || '0').trim();
  const [o, b = '0'] = str.split('.');
  const overs = Math.max(0, parseInt(o || '0', 10));
  const balls = Math.min(5, Math.max(0, parseInt(b || '0', 10)));
  return overs * 6 + balls;
}
function rate(runs, balls) { return balls ? ((runs / balls) * 6).toFixed(2) : '0.00'; }
function clamp(num, min, max) { return Math.max(min, Math.min(max, num)); }

function teamMetrics(name) {
  const list = teams[name].players;
  const avg = (key) => Math.round(list.reduce((sum, x) => sum + x[key], 0) / list.length);
  return { bat: avg('bat'), bowl: avg('bowl'), field: avg('field'), form: avg('form'), overall: avg('overall') };
}

function populate() {
  $('tournamentSelect').innerHTML = Object.keys(tournaments).map(t => `<option>${t}</option>`).join('');
  $('presetMatchSelect').innerHTML = '<option value="custom">Manual / Custom</option>' + fixtures.map((f, i) => `<option value="${i}">${f[0]}: ${teams[f[1]].short} vs ${teams[f[2]].short} • ${f[3]}</option>`).join('');
  $('venueSelect').innerHTML = venues.map(v => `<option>${v}</option>`).join('');
  refreshTeamOptions();
}

function refreshTeamOptions() {
  const selectedTournament = $('tournamentSelect').value || state.tournament;
  const names = tournaments[selectedTournament]?.length ? tournaments[selectedTournament] : allTeamNames();
  const options = names.map(n => `<option value="${n}">${teams[n].short} - ${n}</option>`).join('');
  $('teamASelect').innerHTML = options;
  $('teamBSelect').innerHTML = options;
  $('teamASelect').value = names.includes(state.teamA) ? state.teamA : names[0];
  $('teamBSelect').value = names.includes(state.teamB) ? state.teamB : names.find(n => n !== $('teamASelect').value) || names[0];
  updateTossBattingOptions();
}

function updateTossBattingOptions() {
  const a = $('teamASelect').value || state.teamA;
  const b = $('teamBSelect').value || state.teamB;
  const two = [a, b].filter(Boolean);
  $('tossSelect').innerHTML = two.map(n => `<option>${n}</option>`).join('');
  $('battingTeamSelect').innerHTML = two.map(n => `<option>${n}</option>`).join('');
  $('tossSelect').value = state.toss && two.includes(state.toss) ? state.toss : a;
  $('battingTeamSelect').value = state.batting && two.includes(state.batting) ? state.batting : a;
}

function createMatch(resetScores = true) {
  const a = $('teamASelect').value;
  const b = $('teamBSelect').value;
  if (a === b) {
    alert('Team A and Team B cannot be same. Please select different teams.');
    return;
  }
  state.tournament = $('tournamentSelect').value;
  state.teamA = a;
  state.teamB = b;
  state.venue = $('venueSelect').value;
  state.pitch = $('pitchSelect').value;
  state.toss = $('tossSelect').value;
  state.decision = $('decisionSelect').value;
  state.batting = state.decision === 'Bat First' ? state.toss : (state.toss === a ? b : a);
  state.target = Number($('targetInput').value || 0);
  state.matchStarted = true;
  state.innings = 1;
  if (resetScores) {
    state.score = { [a]: blankScore(), [b]: blankScore() };
    state.lastBalls = [];
    state.commentary = [];
  }
  addCommentary('Match setup', `${state.tournament}: ${teams[a].short} vs ${teams[b].short} at ${state.venue}. Toss: ${teams[state.toss].short} chose to ${state.decision.toLowerCase()}.`);
  updateAll();
}

function addCommentary(title, text) {
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  state.commentary.unshift({ time, title, text });
  state.commentary = state.commentary.slice(0, 80);
}

function setManualScore() {
  const team = $('battingTeamSelect').value;
  if (![state.teamA, state.teamB].includes(team)) return;
  const s = scoreOf(team);
  s.runs = Math.max(0, Number($('manualRuns').value || 0));
  s.wickets = clamp(Number($('manualWickets').value || 0), 0, 10);
  s.balls = clamp(oversToBalls($('manualOvers').value), 0, 120);
  state.batting = team;
  state.target = Math.max(0, Number($('targetInput').value || 0));
  addCommentary('Manual score update', `${teams[team].short} score changed to ${s.runs}/${s.wickets} after ${ballsToOvers(s.balls)} overs.`);
  updateAll();
}

function addBall(runs, wicket, extra, note = '') {
  if (!state.matchStarted) createMatch(true);
  const s = scoreOf(state.batting);
  if (s.wickets >= 10 || s.balls >= 120) {
    addCommentary('Innings complete', `${teams[state.batting].short} innings is already complete.`);
    updateAll();
    return;
  }
  const totalRuns = Number(runs) + Number(extra);
  s.runs += totalRuns;
  s.wickets += wicket ? 1 : 0;
  s.balls += 1;
  const label = wicket ? 'W' : String(totalRuns);
  state.lastBalls.unshift(label);
  state.lastBalls = state.lastBalls.slice(0, 12);
  const overText = ballsToOvers(s.balls);
  const autoText = wicket ? 'WICKET! Pressure is back on the batting side.' : totalRuns === 6 ? 'Six! Clean strike into the stands.' : totalRuns === 4 ? 'Four! Perfect timing through the gap.' : totalRuns === 0 ? 'Dot ball. Excellent control.' : `${totalRuns} run${totalRuns > 1 ? 's' : ''} added.`;
  addCommentary(`${teams[state.batting].short} ${s.runs}/${s.wickets} (${overText})`, note || autoText);
  animateBall(label);
  if (state.target && s.runs >= state.target) {
    addCommentary('Match finished', `${teams[state.batting].short} chased the target and won the match.`);
    saveHistory(`${state.batting} won by ${10 - s.wickets} wicket(s)`);
    stopAuto();
  } else if (s.wickets >= 10 || s.balls >= 120) {
    addCommentary('Innings complete', `${teams[state.batting].short} finished at ${s.runs}/${s.wickets}.`);
  }
  updateAll();
}

function addManualBall() {
  addBall(Number($('ballRuns').value), $('ballWicket').value === 'true', Number($('ballExtra').value), $('ballNote').value.trim());
  $('ballNote').value = '';
}

function randomBall() {
  const batting = teamMetrics(state.batting);
  const bowlingTeam = state.batting === state.teamA ? state.teamB : state.teamA;
  const bowling = teamMetrics(bowlingTeam);
  const aggression = batting.bat + batting.form - bowling.bowl;
  const r = Math.random() * 100;
  const wicketChance = clamp(7 + (bowling.bowl - batting.bat) / 9, 4, 15);
  if (r < wicketChance) return { runs: 0, wicket: true, extra: 0 };
  if (r < 18 - aggression / 25) return { runs: 0, wicket: false, extra: 0 };
  if (r < 54) return { runs: 1, wicket: false, extra: 0 };
  if (r < 68) return { runs: 2, wicket: false, extra: 0 };
  if (r < 74) return { runs: 3, wicket: false, extra: 0 };
  if (r < 91) return { runs: 4, wicket: false, extra: 0 };
  return { runs: 6, wicket: false, extra: Math.random() < .1 ? 1 : 0 };
}

function startAuto() {
  if (state.liveTimer) { stopAuto(); return; }
  if (!state.matchStarted) createMatch(true);
  $('autoLiveBtn').textContent = 'Stop Auto Live';
  $('liveStatus').textContent = 'LIVE';
  state.liveTimer = setInterval(() => {
    const ball = randomBall();
    addBall(ball.runs, ball.wicket, ball.extra);
  }, 1700);
}

function stopAuto() {
  clearInterval(state.liveTimer);
  state.liveTimer = null;
  $('autoLiveBtn').textContent = 'Start Auto Live';
  $('liveStatus').textContent = 'Paused';
}

function endInnings() {
  const batting = state.batting;
  const s = scoreOf(batting);
  if (state.innings === 1) {
    state.target = s.runs + 1;
    $('targetInput').value = state.target;
    state.batting = batting === state.teamA ? state.teamB : state.teamA;
    $('battingTeamSelect').value = state.batting;
    state.innings = 2;
    state.lastBalls = [];
    addCommentary('Second innings started', `${teams[state.batting].short} need ${state.target} runs to win.`);
  } else {
    const other = batting === state.teamA ? state.teamB : state.teamA;
    const otherScore = scoreOf(other);
    let result = '';
    if (s.runs >= state.target) result = `${batting} won by ${10 - s.wickets} wicket(s)`;
    else result = `${other} won by ${state.target - 1 - s.runs} run(s)`;
    addCommentary('Match finished', result);
    saveHistory(result);
    stopAuto();
  }
  updateAll();
}

function calculateWin() {
  const aM = teamMetrics(state.teamA), bM = teamMetrics(state.teamB);
  const aS = scoreOf(state.teamA), bS = scoreOf(state.teamB);
  let aPower = aM.overall + aM.bat * .22 + aM.bowl * .18 + aM.field * .08 + aM.form * .22;
  let bPower = bM.overall + bM.bat * .22 + bM.bowl * .18 + bM.field * .08 + bM.form * .22;
  if (state.pitch === 'Batting Paradise') { aPower += aM.bat * .18; bPower += bM.bat * .18; }
  if (state.pitch === 'Spin Friendly' || state.pitch === 'Pace Friendly' || state.pitch === 'Slow Wicket') { aPower += aM.bowl * .16; bPower += bM.bowl * .16; }
  aPower += (aS.runs / 8) - (aS.wickets * 4) + (Number(rate(aS.runs, aS.balls)) * 1.8);
  bPower += (bS.runs / 8) - (bS.wickets * 4) + (Number(rate(bS.runs, bS.balls)) * 1.8);
  if (state.target && state.innings === 2) {
    const chasingScore = scoreOf(state.batting);
    const remainingRuns = state.target - chasingScore.runs;
    const remainingBalls = 120 - chasingScore.balls;
    const req = remainingBalls > 0 ? (remainingRuns / remainingBalls) * 6 : 99;
    const chasingBoost = clamp(25 - req * 2.1 + (10 - chasingScore.wickets) * 2.1, -35, 35);
    if (state.batting === state.teamA) aPower += chasingBoost; else bPower += chasingBoost;
  }
  let aProb = Math.round((aPower / (aPower + bPower)) * 100);
  aProb = clamp(aProb, 5, 95);
  return { a: aProb, b: 100 - aProb, aM, bM };
}

function updateAll() {
  updateText();
  renderPlayers();
  renderCommentary();
  renderLastBalls();
  renderPrediction();
  drawComparison();
  renderHistory();
  renderAdvancedStadium();
  renderMatchRoom();
}

function updateText() {
  const a = teams[state.teamA], b = teams[state.teamB];
  const aS = scoreOf(state.teamA), bS = scoreOf(state.teamB), batS = scoreOf(state.batting);
  $('matchBadge').textContent = `${state.tournament} • ${state.pitch}`;
  $('matchTitle').textContent = `${state.teamA} vs ${state.teamB}`;
  $('matchInfo').textContent = `${state.venue} • Toss: ${state.toss} chose to ${state.decision.toLowerCase()}`;
  $('teamAIcon').textContent = a.short; $('teamBIcon').textContent = b.short;
  $('teamAName').textContent = state.teamA; $('teamBName').textContent = state.teamB;
  $('teamAScore').textContent = `${aS.runs}/${aS.wickets}`; $('teamBScore').textContent = `${bS.runs}/${bS.wickets}`;
  $('teamAOvers').textContent = `${ballsToOvers(aS.balls)} overs`; $('teamBOvers').textContent = `${ballsToOvers(bS.balls)} overs`;
  $('teamAScoreCard').classList.toggle('active', state.batting === state.teamA);
  $('teamBScoreCard').classList.toggle('active', state.batting === state.teamB);
  $('battingNow').textContent = state.batting;
  $('runRate').textContent = rate(batS.runs, batS.balls);
  if (state.target && state.innings === 2) {
    const remain = Math.max(0, state.target - batS.runs);
    const ballsLeft = Math.max(0, 120 - batS.balls);
    $('reqRate').textContent = ballsLeft ? ((remain / ballsLeft) * 6).toFixed(2) : '-';
  } else $('reqRate').textContent = '-';
  if (!state.liveTimer && $('liveStatus').textContent === 'LIVE') $('liveStatus').textContent = 'Paused';
  $('winTeamAName').textContent = a.short; $('winTeamBName').textContent = b.short;
}

function renderPrediction() {
  const w = calculateWin();
  $('winProbA').textContent = `${w.a}%`; $('winProbB').textContent = `${w.b}%`;
  $('winBarA').style.width = `${w.a}%`; $('winBarB').style.width = `${w.b}%`;
  const leader = w.a >= w.b ? state.teamA : state.teamB;
  const diff = Math.abs(w.a - w.b);
  $('predictionResult').innerHTML = `<strong>${teams[leader].short} advantage:</strong> ${leader} is ahead by ${diff}% based on team ratings, pitch condition, current score, wickets, run rate and chasing pressure.`;
  $('battingEdge').textContent = w.aM.bat === w.bM.bat ? 'Even' : (w.aM.bat > w.bM.bat ? teams[state.teamA].short : teams[state.teamB].short);
  $('bowlingEdge').textContent = w.aM.bowl === w.bM.bowl ? 'Even' : (w.aM.bowl > w.bM.bowl ? teams[state.teamA].short : teams[state.teamB].short);
  $('fieldingEdge').textContent = w.aM.field === w.bM.field ? 'Even' : (w.aM.field > w.bM.field ? teams[state.teamA].short : teams[state.teamB].short);
}

function renderPlayers() {
  const search = $('playerSearch')?.value?.toLowerCase() || '';
  const role = $('roleFilter')?.value || 'All';
  const list = [...teams[state.teamA].players.map(x => ({ ...x, team: state.teamA })), ...teams[state.teamB].players.map(x => ({ ...x, team: state.teamB }))]
    .filter(x => role === 'All' || x.role === role)
    .filter(x => `${x.name} ${x.role} ${x.team}`.toLowerCase().includes(search));
  $('playerGrid').innerHTML = list.map(player => `
    <article class="player-card hologram-card" style="--player-color:${teams[player.team].color}">
      <div class="player-head">
        <div class="avatar">${player.name.split(' ').map(n => n[0]).slice(0,2).join('')}</div>
        <div><h3>${player.name}</h3><small>${teams[player.team].short} • ${player.role}</small></div>
      </div>
      ${rating('Batting', player.bat)}${rating('Bowling', player.bowl)}${rating('Fielding', player.field)}${rating('Form', player.form)}
      <span class="form-tag">Overall ${player.overall}</span>
    </article>`).join('');
}
function rating(label, value) { return `<div class="rating-row"><span>${label}</span><div><i style="width:${value}%"></i></div><b>${value}</b></div>`; }

function renderCommentary() {
  $('commentaryFeed').innerHTML = state.commentary.length ? state.commentary.map(c => `<div class="commentary-item"><strong>${c.title}</strong><br><small>${c.time}</small><p>${c.text}</p></div>`).join('') : '<div class="commentary-item">No live events yet. Add a ball or start auto live.</div>';
}
function renderLastBalls() {
  $('lastBalls').innerHTML = state.lastBalls.map(x => `<span class="ball-pill ${x === 'W' ? 'wicket' : Number(x) === 4 ? 'four' : Number(x) >= 6 ? 'six' : ''}">${x}</span>`).join('') || '<span class="ball-pill">-</span>';
  $('lastBallLabel').textContent = state.lastBalls[0] ? `Last ball: ${state.lastBalls[0]}` : 'Waiting for first ball';
}
function animateBall(label) {
  const dot = $('ballDot');
  const power = label === '6' ? 72 : label === '4' ? 58 : label === 'W' ? 25 : 38;
  const x = (Math.random() - .5) * power * 2;
  const y = (Math.random() - .5) * power;
  dot.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  setTimeout(() => dot.style.transform = 'translate(-50%, -50%)', 700);
}

function drawComparison() {
  const canvas = $('comparisonCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = 'rgba(255,255,255,0.04)'; ctx.fillRect(0,0,w,h);
  const cats = ['bat','bowl','field','form','overall'];
  const labels = ['Batting','Bowling','Fielding','Form','Overall'];
  const aM = teamMetrics(state.teamA), bM = teamMetrics(state.teamB);
  const baseX = 150, baseY = 54, rowGap = 56, maxWidth = w - 300;
  ctx.font = '700 22px system-ui'; ctx.fillStyle = '#f8fbff'; ctx.fillText(`${teams[state.teamA].short} vs ${teams[state.teamB].short}`, 28, 34);
  cats.forEach((cat, i) => {
    const y = baseY + i * rowGap;
    ctx.font = '800 15px system-ui'; ctx.fillStyle = '#aeb9d7'; ctx.fillText(labels[i], 28, y + 22);
    ctx.fillStyle = 'rgba(255,255,255,.12)'; roundRect(ctx, baseX, y, maxWidth, 18, 9); ctx.fill();
    ctx.fillStyle = 'rgba(71,217,255,.88)'; roundRect(ctx, baseX, y, maxWidth * (aM[cat]/100), 18, 9); ctx.fill();
    ctx.fillStyle = 'rgba(77,255,172,.88)'; roundRect(ctx, baseX, y + 24, maxWidth * (bM[cat]/100), 18, 9); ctx.fill();
    ctx.fillStyle = '#f8fbff'; ctx.font = '800 13px system-ui'; ctx.fillText(`${aM[cat]}`, baseX + maxWidth + 14, y + 15); ctx.fillText(`${bM[cat]}`, baseX + maxWidth + 14, y + 39);
  });
  $('comparisonText').innerHTML = `${state.teamA} has ${aM.bat} batting, ${aM.bowl} bowling, ${aM.field} fielding average. ${state.teamB} has ${bM.bat} batting, ${bM.bowl} bowling, ${bM.field} fielding average. The prediction updates live when you add score or ball events.`;
}
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function saveHistory(result) {
  const aS = scoreOf(state.teamA), bS = scoreOf(state.teamB);
  state.history.unshift({ date: new Date().toLocaleString(), match: `${state.teamA} vs ${state.teamB}`, score: `${teams[state.teamA].short} ${aS.runs}/${aS.wickets} (${ballsToOvers(aS.balls)}) • ${teams[state.teamB].short} ${bS.runs}/${bS.wickets} (${ballsToOvers(bS.balls)})`, result });
  state.history = state.history.slice(0, 12);
  localStorage.setItem('pitchpilotHistory', JSON.stringify(state.history));
}
function renderHistory() {
  $('historyList').innerHTML = state.history.length ? state.history.map(h => `<div class="history-item"><strong>${h.match}</strong><br><small>${h.date}</small><p>${h.score}</p><b>${h.result}</b></div>`).join('') : '<div class="history-item">No completed match yet. Finish a match to save history.</div>';
}

function exportReport() {
  const aS = scoreOf(state.teamA), bS = scoreOf(state.teamB), w = calculateWin();
  const text = `PitchPilot AI Match Report\n\nMatch: ${state.teamA} vs ${state.teamB}\nTournament: ${state.tournament}\nVenue: ${state.venue}\nPitch: ${state.pitch}\nToss: ${state.toss} chose ${state.decision}\n\nScore:\n${state.teamA}: ${aS.runs}/${aS.wickets} (${ballsToOvers(aS.balls)})\n${state.teamB}: ${bS.runs}/${bS.wickets} (${ballsToOvers(bS.balls)})\n\nAI Prediction:\n${state.teamA}: ${w.a}%\n${state.teamB}: ${w.b}%\n\nRecent Commentary:\n${state.commentary.slice(0,20).map(c => `[${c.time}] ${c.title}: ${c.text}`).join('\n')}`;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'pitchpilot-match-report.txt'; a.click();
  URL.revokeObjectURL(url);
}

function loadDemo() {
  $('tournamentSelect').value = 'IPL 2026'; refreshTeamOptions();
  $('teamASelect').value = 'Mumbai Indians'; $('teamBSelect').value = 'Chennai Super Kings'; updateTossBattingOptions();
  $('venueSelect').value = 'Wankhede Stadium, Mumbai'; $('pitchSelect').value = 'Balanced'; $('tossSelect').value = 'Mumbai Indians'; $('decisionSelect').value = 'Bat First';
  createMatch(true);
  [[4,0,0,'Rohit starts with a classic cover drive.'], [1,0,0,'Quick single, good running.'], [6,0,0,'SKY launches the first maximum.'], [0,1,0,'Big wicket! Slower ball does the job.'], [2,0,0,'Two runs behind square.'], [4,0,0,'Boundary to finish the over.']].forEach(x => addBall(x[0], Boolean(x[1]), x[2], x[3]));
}

function setDemoMatch({ tournament, teamA, teamB, venue, pitch, toss, decision, batting, innings, target, scores, balls, commentary }) {
  stopAuto();
  $('tournamentSelect').value = tournament;
  state.tournament = tournament;
  refreshTeamOptions();
  $('teamASelect').value = teamA;
  $('teamBSelect').value = teamB;
  $('venueSelect').value = venue;
  $('pitchSelect').value = pitch;
  updateTossBattingOptions();
  $('tossSelect').value = toss;
  $('decisionSelect').value = decision;
  createMatch(true);
  state.innings = innings;
  state.target = target;
  $('targetInput').value = target || '';
  state.batting = batting;
  $('battingTeamSelect').value = batting;
  state.score = {
    [teamA]: { runs: scores[teamA].runs, wickets: scores[teamA].wickets, balls: scores[teamA].balls },
    [teamB]: { runs: scores[teamB].runs, wickets: scores[teamB].wickets, balls: scores[teamB].balls }
  };
  state.lastBalls = balls.slice(0, 12);
  state.commentary = commentary.map((item, index) => ({
    time: new Date(Date.now() - index * 45000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    title: item.title,
    text: item.text
  }));
  $('manualRuns').value = scoreOf(batting).runs;
  $('manualWickets').value = scoreOf(batting).wickets;
  $('manualOvers').value = ballsToOvers(scoreOf(batting).balls);
  $('liveStatus').textContent = 'Demo Loaded';
  updateAll();
}

function loadDemoOne() {
  setDemoMatch({
    tournament: 'IPL 2026',
    teamA: 'Royal Challengers Bengaluru',
    teamB: 'Kolkata Knight Riders',
    venue: 'M. Chinnaswamy Stadium, Bengaluru',
    pitch: 'Batting Paradise',
    toss: 'Kolkata Knight Riders',
    decision: 'Bat First',
    batting: 'Royal Challengers Bengaluru',
    innings: 2,
    target: 199,
    scores: {
      'Royal Challengers Bengaluru': { runs: 164, wickets: 4, balls: 103 },
      'Kolkata Knight Riders': { runs: 198, wickets: 7, balls: 120 }
    },
    balls: ['6','4','1','W','2','4','1','0','6','2','1','4'],
    commentary: [
      { title: 'Demo 1 loaded', text: 'IPL death-over chase mode is ready. RCB need 35 from 17 balls with 6 wickets in hand.' },
      { title: 'Pressure moment', text: 'The AI model gives RCB a strong batting edge but KKR still have wicket-taking options.' },
      { title: 'Manual demo tip', text: 'Use Add Ball to continue the chase or Start Auto Live to simulate the final overs.' },
      { title: 'First innings summary', text: 'KKR posted 198/7 with aggressive middle-over hitting and a strong finish.' }
    ]
  });
}

function loadDemoTwo() {
  setDemoMatch({
    tournament: 'World Cup',
    teamA: 'India',
    teamB: 'Australia',
    venue: 'Melbourne Cricket Ground',
    pitch: 'Pace Friendly',
    toss: 'Australia',
    decision: 'Bat First',
    batting: 'India',
    innings: 2,
    target: 173,
    scores: {
      'India': { runs: 149, wickets: 5, balls: 103 },
      'Australia': { runs: 172, wickets: 8, balls: 120 }
    },
    balls: ['1','4','W','0','6','1','2','1','4','0','1','W'],
    commentary: [
      { title: 'Demo 2 loaded', text: 'World Cup pressure chase mode is ready. India need 24 from 17 balls.' },
      { title: 'AI pressure alert', text: 'Australia have bowling advantage on a pace-friendly surface, but India still have finishing power.' },
      { title: 'Live view ready', text: 'Continue manually with ball-by-ball events or start auto live for a presentation-style simulation.' },
      { title: 'Match context', text: 'Australia defended hard after setting 172/8. The required rate is climbing but wickets are available.' }
    ]
  });
}

function applyPreset() {
  const value = $('presetMatchSelect').value;
  if (value === 'custom') return;
  const [tour, a, b, venue] = fixtures[Number(value)];
  $('tournamentSelect').value = tour;
  state.tournament = tour;
  refreshTeamOptions();
  $('teamASelect').value = a; $('teamBSelect').value = b; $('venueSelect').value = venue;
  updateTossBattingOptions();
}

function resetMatch() {
  stopAuto();
  state.score = { [state.teamA]: blankScore(), [state.teamB]: blankScore() };
  state.commentary = [];
  state.lastBalls = [];
  state.target = 0;
  state.innings = 1;
  state.matchStarted = false;
  $('targetInput').value = '';
  $('manualRuns').value = ''; $('manualWickets').value = ''; $('manualOvers').value = '';
  $('liveStatus').textContent = 'Ready';
  addCommentary('Reset complete', 'Scoreboard cleared. Create a match or start entering score manually.');
  updateAll();
}

function setupEvents() {
  $('tournamentSelect').addEventListener('change', () => { state.tournament = $('tournamentSelect').value; refreshTeamOptions(); });
  $('presetMatchSelect').addEventListener('change', applyPreset);
  $('teamASelect').addEventListener('change', () => { updateTossBattingOptions(); previewSelectedMatch(); });
  $('teamBSelect').addEventListener('change', () => { updateTossBattingOptions(); previewSelectedMatch(); });
  ['venueSelect','pitchSelect','decisionSelect','tossSelect'].forEach(id => $(id).addEventListener('change', previewSelectedMatch));
  $('createMatchBtn').addEventListener('click', () => createMatch(true));
  $('setScoreBtn').addEventListener('click', setManualScore);
  $('addBallBtn').addEventListener('click', addManualBall);
  $('autoLiveBtn').addEventListener('click', startAuto);
  $('endInningsBtn').addEventListener('click', endInnings);
  $('loadDemoBtn').addEventListener('click', loadDemo);
  $('demoOneBtn').addEventListener('click', loadDemoOne);
  $('demoTwoBtn').addEventListener('click', loadDemoTwo);
  $('demoOneTopBtn').addEventListener('click', loadDemoOne);
  $('demoTwoTopBtn').addEventListener('click', loadDemoTwo);
  $('resetBtn').addEventListener('click', resetMatch);
  $('exportReportBtn').addEventListener('click', exportReport);
  $('clearCommentaryBtn').addEventListener('click', () => { state.commentary = []; renderCommentary(); });
  $('playerSearch').addEventListener('input', renderPlayers);
  $('roleFilter').addEventListener('change', renderPlayers);
  document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    $(`${btn.dataset.tab}Tab`).classList.add('active');
    if (btn.dataset.tab === 'comparison') drawComparison();
    if (btn.dataset.tab === 'matchroom') renderMatchRoom();
  }));
}


/* =========================
   Stadium 3D Pro Upgrade JS
   ========================= */
function hexToRgb(hex) {
  const clean = String(hex || '#47d9ff').replace('#', '');
  const full = clean.length === 3 ? clean.split('').map(ch => ch + ch).join('') : clean;
  const int = parseInt(full, 16);
  return `${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}`;
}

function initials(name) {
  return String(name || '')
    .split(' ')
    .filter(Boolean)
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function topPlayer(teamName, mode) {
  const list = teams[teamName]?.players || [];
  const keyScore = (pl) => {
    if (mode === 'bat') return pl.bat * 1.15 + pl.form * .35 + pl.field * .08;
    if (mode === 'bowl') return pl.bowl * 1.18 + pl.form * .28 + pl.field * .08;
    if (mode === 'finish') return pl.bat * .7 + pl.form * .65 + pl.field * .15;
    return pl.overall + pl.form * .25;
  };
  return [...list].sort((a, b) => keyScore(b) - keyScore(a))[0] || p('Unknown Player', 'Batter', 50, 50, 50, 50);
}

function pitchSlug() {
  return String(state.pitch || 'balanced').toLowerCase().replace(/\s+/g, '-');
}

function pressureIndex() {
  const s = scoreOf(state.batting);
  let pressure = 34 + s.wickets * 5 + Math.min(30, s.balls / 4);
  if (state.target && state.innings === 2) {
    const remain = Math.max(0, state.target - s.runs);
    const ballsLeft = Math.max(1, 120 - s.balls);
    pressure += clamp(((remain / ballsLeft) * 6 - 8) * 4, -18, 28);
  }
  if (state.liveTimer) pressure += 8;
  return clamp(Math.round(pressure), 18, 98);
}

function tacticalLabel() {
  if (state.pitch === 'Batting Paradise') return 'High scoring pitch: top-order and finishers get extra impact.';
  if (state.pitch === 'Pace Friendly') return 'Pace-friendly surface: powerplay bowling and death-over yorkers matter more.';
  if (state.pitch === 'Spin Friendly') return 'Spin-friendly pitch: middle-over matchups can flip the prediction fast.';
  if (state.pitch === 'Slow Wicket') return 'Slow wicket: cutters, spin and strike rotation become important.';
  return 'Balanced pitch: team depth, wickets in hand and run rate decide the advantage.';
}

function previewSelectedMatch() {
  const a = $('teamASelect')?.value;
  const b = $('teamBSelect')?.value;
  if (!a || !b || a === b || !teams[a] || !teams[b]) return;
  const previous = { ...state };
  state.tournament = $('tournamentSelect')?.value || state.tournament;
  state.teamA = a;
  state.teamB = b;
  state.venue = $('venueSelect')?.value || state.venue;
  state.pitch = $('pitchSelect')?.value || state.pitch;
  state.toss = $('tossSelect')?.value || a;
  state.decision = $('decisionSelect')?.value || state.decision;
  state.batting = state.batting && [a, b].includes(state.batting) ? state.batting : a;
  renderAdvancedStadium();
  renderPlayers();
  renderPrediction();
  renderMatchRoom();
  drawComparison();
  // keep current score data safe while giving instant visual preview
  if (previous.teamA !== a || previous.teamB !== b) {
    scoreOf(a); scoreOf(b);
  }
}

function setDynamicTheme() {
  const a = teams[state.teamA] || teams['Mumbai Indians'];
  const b = teams[state.teamB] || teams['Chennai Super Kings'];
  document.documentElement.style.setProperty('--teamA-color', a.color);
  document.documentElement.style.setProperty('--teamB-color', b.color);
  document.documentElement.style.setProperty('--teamA-rgb', hexToRgb(a.color));
  document.documentElement.style.setProperty('--teamB-rgb', hexToRgb(b.color));
  document.body.setAttribute('data-pitch', pitchSlug());
}

function teamTower(teamName, side) {
  const t = teams[teamName];
  const metrics = teamMetrics(teamName);
  const batter = topPlayer(teamName, 'bat');
  const bowler = topPlayer(teamName, 'bowl');
  return `
    <div class="team-emblem">${t.short}</div>
    <h3>${teamName}</h3>
    <p>${side === 'left' ? 'Home kit' : 'Away kit'} theme active. Key batter: <b>${batter.name}</b>. Strike bowler: <b>${bowler.name}</b>.</p>
    <div class="team-power-row">
      <span>Bat <b>${metrics.bat}</b></span>
      <span>Bowl <b>${metrics.bowl}</b></span>
      <span>Form <b>${metrics.form}</b></span>
    </div>`;
}

function renderAdvancedStadium() {
  if (!$('teamA3D') || !teams[state.teamA] || !teams[state.teamB]) return;
  setDynamicTheme();
  const batting = teams[state.batting] ? state.batting : state.teamA;
  const bowling = batting === state.teamA ? state.teamB : state.teamA;
  const striker = topPlayer(batting, 'bat');
  const bowler = topPlayer(bowling, 'bowl');
  const finisher = topPlayer(batting, 'finish');
  const pressure = pressureIndex();
  $('teamA3D').innerHTML = teamTower(state.teamA, 'left');
  $('teamB3D').innerHTML = teamTower(state.teamB, 'right');
  $('stadiumLabel').textContent = `${state.venue} is now rendered with ${teams[state.teamA].short} vs ${teams[state.teamB].short} colors, ${state.pitch.toLowerCase()} surface, and ${pressure}% crowd pressure.`;
  $('strikerFocus').textContent = `${striker.name} (${teams[batting].short})`;
  $('bowlerThreat').textContent = `${bowler.name} (${teams[bowling].short})`;
  $('pitchMood').textContent = state.pitch;
  $('crowdMeter').style.width = `${pressure}%`;
  $('pitch3D').setAttribute('data-pitch', pitchSlug());
  $('playerSpotlight3D').innerHTML = `
    <div class="spotlight-player">
      <div class="spotlight-avatar">${initials(finisher.name)}</div>
      <div>
        <h3>${finisher.name}</h3>
        <p><b>${teams[batting].short} ${finisher.role}</b> • Bat ${finisher.bat}, Bowl ${finisher.bowl}, Form ${finisher.form}. AI says this player can change the match if ${teams[batting].short} keep wickets in hand.</p>
      </div>
    </div>`;
  renderImpactXI();
}

function impactScore(player, teamName) {
  const battingBonus = state.batting === teamName ? 8 : 0;
  const pitchBonus = state.pitch === 'Batting Paradise' ? player.bat * .13 : (state.pitch === 'Balanced' ? player.overall * .08 : player.bowl * .13);
  const pressureBonus = pressureIndex() * (player.form / 100) * .08;
  return Math.round(player.overall + player.form * .18 + battingBonus + pitchBonus + pressureBonus);
}

function renderImpactXI() {
  if (!$('impactXI')) return;
  const players = [
    ...teams[state.teamA].players.map(pl => ({ ...pl, team: state.teamA })),
    ...teams[state.teamB].players.map(pl => ({ ...pl, team: state.teamB }))
  ].map(pl => ({ ...pl, impact: impactScore(pl, pl.team) }))
   .sort((a, b) => b.impact - a.impact)
   .slice(0, 7);
  $('impactXI').innerHTML = players.map((pl, index) => `
    <div class="impact-row" style="--player-color:${teams[pl.team].color}">
      <div class="impact-rank">${index + 1}</div>
      <div><h4>${pl.name}</h4><small>${teams[pl.team].short} • ${pl.role} • Overall ${pl.overall}</small></div>
      <div class="impact-score">${pl.impact}</div>
    </div>`).join('');
}

function renderMatchRoom() {
  if (!$('matchSceneText')) return;
  const w = calculateWin();
  const a = teams[state.teamA], b = teams[state.teamB];
  const leader = w.a >= w.b ? state.teamA : state.teamB;
  const batting = teams[state.batting] ? state.batting : state.teamA;
  const bowling = batting === state.teamA ? state.teamB : state.teamA;
  const striker = topPlayer(batting, 'bat');
  const bowler = topPlayer(bowling, 'bowl');
  const batScore = scoreOf(batting);
  $('matchSceneText').innerHTML = `<b>${a.short} vs ${b.short}</b> at ${state.venue}. The full website background, 3D stadium lights, player cards and pitch style are now synced to this match.`;
  $('tacticalReadText').innerHTML = `${tacticalLabel()} Current batting side: <b>${teams[batting].short}</b> at ${batScore.runs}/${batScore.wickets} in ${ballsToOvers(batScore.balls)} overs.`;
  $('topBattleText').innerHTML = `<b>${striker.name}</b> vs <b>${bowler.name}</b>. AI leader: <b>${teams[leader].short}</b> with ${leader === state.teamA ? w.a : w.b}% win chance.`;
}

function enableTiltCards() {
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rx = ((y / rect.height) - .5) * -5;
      const ry = ((x / rect.width) - .5) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

populate();
setupEvents();
enableTiltCards();
createMatch(true);
updateAll();
