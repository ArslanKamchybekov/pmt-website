const eboardMembers = [
    { name: 'John Doe', position: 'President' },
    { name: 'Jane Smith', position: 'Vice President' }
  ];
  
  const sectorLeaders = [
    { name: 'Alex Johnson', sector: 'Tech' },
    { name: 'Emily Davis', sector: 'Healthcare' }
  ];
  
  const analysts = {
    Tech: ['Analyst 1', 'Analyst 2'],
    Healthcare: ['Analyst 3', 'Analyst 4']
  };
  
  export default function People() {
    return (
      <div>
        <h1>Who We Are</h1>
        
        <h2>Eboard</h2>
        <ul>
          {eboardMembers.map((member, index) => (
            <li key={index}>
              {member.name} - {member.position}
            </li>
          ))}
        </ul>
  
        <h2>Sector Leaders & Analysts</h2>
        {sectorLeaders.map((leader, index) => (
          <div key={index}>
            <h3>{leader.name} - {leader.sector}</h3>
            <ul>
              {analysts[leader.sector].map((analyst, i) => (
                <li key={i}>{analyst}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  