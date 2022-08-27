import React from 'react'
import './index.css'

export default function ThesisMWMS() {

    // 跳转
    function handleJump(e){
      e.preventDefault();
      // 在react中想要跳转并且打开新页面得这样
      const w=window.open('about:blank');
      w.location.href="http://qgailab.com/algorithmVisualization/static/MWMS.pdf"
    }

  return (
    <div className="thesisMWMS-container">
        <div className='thesisMWMS'>
        <div className="thesisMWMS-title">Hybrid-Order Network Consensus for Distributed Multi-agent Systems</div>
        <div className="thesisMWMS-author">by Guangqiang Xie , Junyu Chen , Yang Li</div>
        <div className="thesisMWMS-original"><a href='#' onClick={(Event)=>{handleJump(Event)}}>Click to see original&gt;&gt;</a></div>
        <div className="thesisMWMS-abstract-title">Abstract</div>
        <div className="thesisMWMS-abstract">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As an important field of Distributed artificial intelligence (DAI), multi-agent systems (MASs) have attracted the attention of extensive research scholars. Consensus as an important issue in MAS, good progress has been made in studying the consensus control of MAS, but there are some problems remained largely unaddressed which cause the MAS to lose some useful network structure information. First, multi-agent consensus protocol usually proceeds over the low-order structure by only considering the direct edges between agents, but ignores the higher-order structure of the whole topology network. Second, the existing work assumes all the edges in a topology network have the same weight without exploring the potential diversity of the connections. In this way, multi-agent systems fail to enforce consensus, resulting in fragmentation into multiple clusters. To address the above issues, this paper proposes a Motif-Aware Weighted Multi-agent System (MWMS) method for consensus control. We focus more on triangle motif in the network, but it can be extended to other kinds of motifs as well. First, a novel weighted network is used which is the combination of the edge-based lower-order structure and the motif-based higher-order structure, i.e., hybrid-order structure. Subsequently, by simultaneously considering the quantity and the quality of the connections in the network, a novel consensus framework for MAS is designed to update agents. Then, two baseline consensus algorithms are used in MWMS. In our experiments, we use ten topologies of different shapes, densities and ranges to comprehensively analyze the performance of our proposed algorithms. The simulation results show that the hybrid higher-order network can effectively enhance the consensus of the multi-agent system in different network topologies.</div>
        <div className="thesisMWMS-keyWord-title">Keyword</div>
        <div className="thesisMWMS-keyWord">Hybrid-Order Network , Multi-agent Systems , Consensus control , Motif</div>
        <div className="thesisMWMS-publication-title">Article</div>
        <div className="thesisMWMS-publication">Journal Of Artificial Intelligence Research</div>
        <div className="thesisMWMS-date-title">Data</div>
        <div className="thesisMWMS-date">Jan 2021</div>
      </div>
    </div>

  )
}
