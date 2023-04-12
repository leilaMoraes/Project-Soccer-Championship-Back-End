const home = `SELECT t.team_name AS name,
SUM(CASE WHEN m.home_team_goals > m.away_team_goals THEN 3
WHEN m.home_team_goals < m.away_team_goals THEN 0 ELSE 1 END) AS totalPoints,
COUNT(*) AS totalGames,
COUNT(CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE NULL END) AS totalVictories,
COUNT(CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE NULL END) AS totalDraws,
COUNT(CASE WHEN m.home_team_goals < m.away_team_goals THEN 1 ELSE NULL END) AS totalLosses,
SUM(home_team_goals) AS goalsFavor,
SUM(away_team_goals) AS goalsOwn
FROM TRYBE_FUTEBOL_CLUBE.teams AS t
INNER JOIN TRYBE_FUTEBOL_CLUBE.matches AS m
ON m.home_team_id = t.id
WHERE m.in_progress IS false
GROUP BY name
ORDER BY totalPoints DESC, totalVictories DESC`;

export default home;
