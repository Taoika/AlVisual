import React from 'react'
import './index.css'
import logoWithShadow from '../../assets/images/logoWithShadow.png'

export default function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-title"><img src={logoWithShadow} alt="Mas & Dp"/></div>
        <div className="home-content">
          <p><strong>Abstract</strong> - With the development of artificial intelligence and the advancement of Internet technology, technologies such as Distributed artificial intelligence have emerged and achieved rapid development. As an important field of Distributed artificial intelligence (DAI), multi-agent systems (MASs) have attracted the attention of extensive research scholars. Consensus as an important issue in MAS, good progress has been made in studying the consensus control of MAS recently. In our system,we test and demonstration the experiments of five consensus algorithms named DSG ( connectivity maintenance algorithm with a d-subgraph ), HSB (Hierarchical Switching-Backbone), RSRSP (representative selection with rotating-segmentation perception) , MWMS-J and MWMS-S ( Motif-Aware Weighted Multi-agent System)</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Considering that in practical applications, the information transmitted by multi-agents may involve privacy. Combined with the increasing recognition of the privacy protection model based on differential privacy (DP) in recent years, this system innovatively proposes the consistency control of MAS+DP model, and apply the concept of differential privacy to the consensus algorithms of this system </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An application system is developed for demonstration purposes which is available online at <a>http://qgailab.com/algorithmVisualization/#/home</a> The experiment of five consensus algorithms on ten network topologies show that different algorithm models are suitable for different situations on MAS. In addition,compared with the simulation which is no differential privacy, the experiment which apply DP show the feasibilities of protecting the privacy in consensus algorithms</p>
        </div>
      </div>
    </div>
  )
}
