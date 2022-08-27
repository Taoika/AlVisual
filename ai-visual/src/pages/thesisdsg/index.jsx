import React from 'react'
import './index.css'

export default function ThesisDSG() {

  // 跳转
  function handleJump(e){
    e.preventDefault();
    // 在react中想要跳转并且打开新页面得这样
    const w=window.open('about:blank');
    w.location.href="http://qgailab.com/algorithmVisualization/static/DSG.pdf"
  }

  return (
    <div className="thesisDSG-container">
        <div className='thesisDSG'>
        <div className="thesisDSG-title">Fast distributed consensus seeking in large-scale and high-density multi-agent systems with connectivity maintenance</div>
        <div className="thesisDSG-author">by Guangqiang Xie , Haoran Xu , Yang Li ,Xianbiao Hu , Chang-Dong Wang</div>
        <div className="thesisDSG-original"><a href='#' onClick={(Event)=>{handleJump(Event)}}>Click to see original&gt;&gt;</a></div>
        <div className="thesisDSG-abstract-title">Abstract</div>
        <div className="thesisDSG-abstract">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the rapid development of wireless communication and localization technologies, multi-agent systems (MASs) have emerged as a powerful distributed artificial intelligence for consensus control. However, the connectivity of an MAS with a limited sensing range is vulnerable to the evolution of agents with high mobility, so converging to one common equilibrium rapidly while maintaining connectivity under a large-scale and high-density topology has been a research challenge. To address this problem, we develop a heuristic combinatorial algorithm that combines a distributed sector-division-based (SDB) consensus algorithm and a d-subgraph (DSG) connectivity maintenance algorithm. First, the communication region is heuristically divided into multiple sectors, and agents select representative neighbors to calculate control inputs by simultaneously considering the number and the distribution of perceived neighbors. Second, the d-subgraph is designed to update agents in accordance with constraint set constructed from the nearest neighbors in their locally perceived connected components. Thus, sequentially combining the SDB and the DSG algorithms affords a heuristic combinatorial (SDB&DSG) algorithm that can effectively accelerate convergence to a common equilibrium and retain global connectivity. The theoretical proofs of connectivity and convergence are given geometrically. Extensive simulations demonstrate the superiority of our algorithm, especially in large-scale and high-density topologies.</div>
        <div className="thesisDSG-keyWord-title">Keyword</div>
        <div className="thesisDSG-keyWord">Multi-agent system , Consensus seeking , Distributed control , Constraint set , Connectivity maintenance</div>
        <div className="thesisDSG-publication-title">Article</div>
        <div className="thesisDSG-publication">Information Sciences</div>
        <div className="thesisDSG-date-title">Data</div>
        <div className="thesisDSG-date">27 June 2022</div>
      </div>
    </div>

  )
}
