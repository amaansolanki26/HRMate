import { Card, Dropdown } from "react-bootstrap";

/* progress ring */
function Circle({ value }) {
  const deg = value * 3.6;

  return (
    <div className="task-circle">
      <div
        className="task-circle-fill"
        style={{ transform: `rotate(${deg}deg)` }}
      />
      <span>{value}%</span>
    </div>
  );
}

export default function TasksCard() {
  const tasks = [
    {
      title: "Update Employee Handbook",
      dept: "Policy Development",
      date: "Jun 15, 2027",
      progress: 45,
    },
    {
      title: "Finalize Quarterly Budget Review",
      dept: "Financial Analysis",
      date: "May 30, 2027",
      progress: 68,
    },
    {
      title: "Launch New Product Line",
      dept: "Product Launch",
      date: "Jul 1, 2027",
      progress: 0,
    },
    {
      title: "Upgrade Server Infrastructure",
      dept: "Technical Infrastructure",
      date: "Aug 20, 2027",
      progress: 12,
    },
  ];

  return (
    <Card className="dash-card h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="mb-0">Tasks</Card.Title>

          <Dropdown align="end">
            <Dropdown.Toggle size="sm" variant="light">
              •••
            </Dropdown.Toggle>
          </Dropdown>
        </div>

        {tasks.map((t, i) => (
          <div key={i} className="task-item">
            <div>
              <div className="task-title">{t.title}</div>
              <div className="task-sub">
                {t.dept} • {t.date}
              </div>
            </div>
            <Circle value={t.progress} />
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}