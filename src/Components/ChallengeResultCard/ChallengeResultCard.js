import { useState } from "react";

const ChallengeResultCard=(props)=>{
    const result=JSON.parse(props.result)
    console.log(result);
    

    
return (
    <>
    <div  className="card w-100">
  <div className="card-body">
    <h5 className="card-title text-danger text-center">Result</h5>
    <div className="d-flex gap-3 mb-3">
  <div className="badge bg-success">Grammar: 100%</div>
  <div className="badge bg-warning text-dark">Vocabulary: 10%</div>
  <div className="badge bg-primary">Relevance: 20%</div>
</div>

 <h5 className="mt-3">🛠️ Mistakes & Suggestions</h5>
<ul className="list-group list-group-flush">
  {result.mistakes.map((m, i) => (
    <li key={i} className="list-group-item">
      <strong>Issue:</strong> {m.issue} <br />
      <strong>Suggestion:</strong> {m.suggestion}
    </li>
  ))}
</ul>
<h5 className="mt-4">✅ Improved Description</h5>
<p className="bg-light p-3 rounded">
  {result.corrections}
</p>
<p className="mt-3">
  <strong>Learning Level:</strong> <span className="badge bg-info">{result.learning_level}</span>
</p>
<h5 className="mt-4">💡 Tips</h5>
<ul>
  {result.tips.map((tip, i) => (
    <li key={i}>{tip}</li>
  ))}
</ul>
<h5 className="mt-4">🌟 What You Did Well</h5>
<p className="text-success">{result.highlight}</p>
<h5 className="mt-4">💬 Motivational Comment</h5>
<p className="fst-italic">{result.motivational_comment}</p>

  </div>
</div>
    </>
)
}

export default ChallengeResultCard;