import React from 'react'
import './index.css'

export default function ThesisRSRSP() {

  // 跳转
  function handleJump(e){
    e.preventDefault();
    // 在react中想要跳转并且打开新页面得这样
    const w=window.open('about:blank');
    w.location.href="http://qgailab.com/algorithmVisualization/static/RSRSP.pdf"
  }

  return (
    <div className="thesisRSRSP-container">
        <div className='thesisRSRSP'>
        <div className="thesisRSRSP-title">Consensus enhancement for multi-agent systems with rotating-segmentation perception</div>
        <div className="thesisRSRSP-author">by Guangqiang Xie , Haoran Xu , Yang Li , Xianbiao Hu , Chang-Dong Wang</div>
        <div className="thesisRSRSP-original"><a href='#'  onClick={(Event)=>{handleJump(Event)}}>Click to see original&gt;&gt;</a></div>
        <div className="thesisRSRSP-abstract-title">Abstract</div>
        <div className="thesisRSRSP-abstract">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this paper, we investigate the consensus problem of multi-agent systems (MASs) with a limited sensing range using two kinds of distributed neighbor selection strategies. Because each agent’s convergence evolution is typically based on the “select all perceived neighbors” (SAN) framework, fragmentation into multiple clusters is likely to occur, and data storage and computational load can grow exponentially as the number of agents increases. To address this challenge, we propose a new distributed consensus framework composed of two strategies that can effectively enhance the consensus of the MAS. First, a novel representative selection with rotating-segmentation perception (RSRSP) strategy is provided for agents to intelligently select representative neighbors in each sector of the communication region for convergence evolution. Second, a distributed switching strategy is designed for each agent to synchronously switch from RSRSP to SAN when the system reaches full connectivity. We analyze the stability of the proposed consensus protocol with the common Lyapunov function and verify the superiority of the two proposed strategies through comparisons with a baseline SAN algorithm.</div>
        <div className="thesisRSRSP-keyWord-title">Keyword</div>
        <div className="thesisRSRSP-keyWord">Multi-agent systems , Distributed consensus , Neighbor selection strategy , Lyapunov function</div>
        <div className="thesisRSRSP-publication-title">Article</div>
        <div className="thesisRSRSP-publication">Applied Intelligence</div>
        <div className="thesisRSRSP-date-title">Data</div>
        <div className="thesisRSRSP-date">25 April 2022</div>
      </div>
    </div>

  )
}
