import { Card, Dropdown } from "react-bootstrap";
import { tasks } from "../data/Task";


function Circle({ value }) {
  return (
    <div className="task-circle">
      <div
        className="task-circle-progress"
        style={{ "--value": value }}
      />
      <span>{value}%</span>
    </div>
  );
}

export default function TasksCard() {

  return (
    <Card className="dash-card border-0 rounded-4 h-100">
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