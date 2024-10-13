const alumniCompanies = ['Goldman Sachs', 'JP Morgan', 'Morgan Stanley', 'Citadel'];

export default function Alumni() {
  return (
    <div>
      <h1>Alumni</h1>
      <p>Our alumni have gone on to work at the following prestigious companies:</p>
      <ul>
        {alumniCompanies.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
    </div>
  );
}
