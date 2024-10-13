const partners = ['STAC', 'SEC', 'DIG', 'Barchart'];

export default function Collaborations() {
  return (
    <div>
      <h1>Collaborations</h1>
      <p>We collaborate with the following organizations and sponsors:</p>
      <ul>
        {partners.map((partner, index) => (
          <li key={index}>{partner}</li>
        ))}
      </ul>
    </div>
  );
}
