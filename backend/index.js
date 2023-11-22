import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "Minal",
  password: "Minal@7284559",
  database: "call Center",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

app.get("/center", (req, res) => {
  // db.connect(function (err) {
  //   if (err) {
  //     console.error("error connecting: " + err.errno);
  //     return;
  //   }

  //   console.log("connected as id " + db.threadId);
  // });
  const q = "SELECT * FROM call_center";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/opsliceop", (req, res) => {
  const q = `SELECT *
  FROM call_center
  WHERE YEAR(call_timestamp) = 2020
    AND state = 'Texas';`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/opdice", (req, res) => {
  const q = `SELECT *
  FROM call_center
  WHERE YEAR(call_timestamp) = 2020
    AND state IN ('Florida', 'Texas')
    AND reason IN ('Payments')
    AND sentiment IN('Positive' );`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/oppivot", (req, res) => {
  const q = `SELECT
  SUM(CASE WHEN state = 'Florida' THEN 1 ELSE 0 END) AS FloridaCalls,
  SUM(CASE WHEN state = 'Texas' THEN 1 ELSE 0 END) AS TexasCalls,
  SUM(CASE WHEN state = 'Michigan' THEN 1 ELSE 0 END) AS MichiganCalls
FROM call_center
WHERE YEAR(call_timestamp) = 2020;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/oprollup", (req, res) => {
  const q = `SELECT
  YEAR(call_timestamp) AS Year,
  MONTH(call_timestamp) AS Month,
  COUNT(id) AS MonthlyCalls
FROM call_center
WHERE YEAR(call_timestamp) = 2020
GROUP BY Year, Month;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/opdrilldown", (req, res) => {
  const q = `SELECT
  YEAR(call_timestamp) AS Year,
  MONTH(call_timestamp) AS Month,
  DAY(call_timestamp) AS Day,
  COUNT(id) AS DailyCalls
FROM call_center
WHERE YEAR(call_timestamp) = 2020 AND MONTH(call_timestamp) = 10
GROUP BY Year, Month, Day;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/kpis/cdh", async (req, res) => {
  const q = "select sum(call_duration_in_minutes)/60 as cdh from call_center;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/kpis/cdm", async (req, res) => {
  const q = "select sum(call_duration_in_minutes) as cdm from call_center;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/kpis/adm", async (req, res) => {
  const q = "select avg(call_duration_in_minutes) as adm from call_center;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/kpis/rtp", async (req, res) => {
  const q = `SELECT (SUM(CASE WHEN response_time = 'Within SLA' OR 
    response_time = 'Above SLA' THEN 1 ELSE 0 END) / COUNT(*))*100 
    AS rtp FROM call_center;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/kpis/tc", async (req, res) => {
  const q = "select count(id) as tc from call_center;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/operations/state", async (req, res) => {
  const q = `SELECT distinct(state) AS state, COUNT(id) AS totalCalls
        FROM call_center WHERE YEAR(call_timestamp) = 2020
        GROUP BY
            state
        ORDER BY
            state;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/operations/day", async (req, res) => {
  const q = `SELECT
    DAYOFWEEK(call_timestamp) AS dayOfWeek,
    COUNT(id) AS totalCalls
FROM
    call_center
WHERE
    call_timestamp BETWEEN '2020-01-10' AND '2020-12-10'
GROUP BY
    dayOfWeek
ORDER BY
    dayOfWeek;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/operations/reason", async (req, res) => {
  const q = `
    SELECT
        distinct(Reason) AS reason,
        COUNT(id) AS totalCalls
    FROM
        call_center
    WHERE
        YEAR(call_timestamp) = 2020
    GROUP BY
        reason
    ORDER BY
        reason;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/operations/channel", async (req, res) => {
  const q = `
  SELECT
  distinct(Channel) AS channel,
  COUNT(id) AS totalCalls
FROM
  call_center
WHERE
  YEAR(call_timestamp) = 2020
GROUP BY
  channel
ORDER BY
  channel;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/operations/sentiment", async (req, res) => {
  const q = `
  SELECT
  distinct(Sentiment) AS sentiment,
  COUNT(id) AS totalCalls
FROM
  call_center
WHERE
  YEAR(call_timestamp) = 2020
GROUP BY
  sentiment
ORDER BY
  sentiment;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8802, () => {
  console.log("Connected to backend!");
});
