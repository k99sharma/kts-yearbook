// card component
export default function Card({ student }) {
  return (
    <div className="card bg-red-200 mb-4">
      <div className="card__header">{student.name}</div>

      <div className="card__details">
        <div className="card__details__branch">{student.branch}</div>

        <div className="card__details__section">{student.section}</div>
      </div>
    </div>
  );
}
