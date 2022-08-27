import React from 'react'
import './index.css'

export default function ThesisHSB() {

  // 跳转
  function handleJump(e){
    e.preventDefault();
    // 在react中想要跳转并且打开新页面得这样
    const w=window.open('about:blank');
    w.location.href="http://qgailab.com/algorithmVisualization/static/HSB.pdf"
  }

  return (
    <div className="thesisHSB-container">
        <div className='thesisHSB'>
        <div className="thesisHSB-title">Consensus Seeking in Large-Scale Multi-agent Systems with Hierarchical Switching-Backbone Topology</div>
        <div className="thesisHSB-author">by Guangqiang Xie, Haoran Xu, Yang Li, Changdong Wang, Biwei Zhong, Xianbiao Hu</div>
        <div className="thesisHSB-original"><a href='#' onClick={(Event)=>{handleJump(Event)}}>Click to see original&gt;&gt;</a></div>
        <div className="thesisHSB-abstract-title">Abstract</div>
        <div className="thesisHSB-abstract">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Multi-agent System (MAS) is one of the most significant innovations in Distributed Artificial Intelligence (DAI), which has received tremendous attention from both academia and industry. On the other hand, recent developments in multi-agent consensus problems have heightened the role of network topology when the agent number increases largely. The existing work assumes that the convergence evolution typically proceeds over a peer-to-peer architecture where agents are treated equally and communicate directly with perceived one-hop neighbors, but fails to explore the hierarchical nature of the network topology. Topology control offers a promising approach to designing a large-scale and connectivity-preserved MAS. In this paper, we first present a fully decentralized framework named Hierarchical Switching-Backbone Multi-agent System (HSBMAS) for consensus seeking under an undirected and time-varying topology. First, the backbone network topology is extracted which provides a hierarchical organization of the original multi-agent system. Second, by periodically extract the switching-backbone topology, a novel consensus framework is designed to conduct agents converge to a common stable equilibrium with connectivity constraints. Connectivity and convergence analyses of the framework are provided when the initial topology is connected. Extensive simulation results on different-types and varying-densities topologies have shown the superiority of the proposed method. This work will generate fresh insight into consensus problems for networked multi-agent system with hierarchical switching-backbone topology, with provable connectivity and convergence guarantees.</div>
        <div className="thesisHSB-keyWord-title">Keyword</div>
        <div className="thesisHSB-keyWord">Multi-agent systems, Hierarchical topology control, Backbone network, Connectivity preservation, Large scale</div>
        <div className="thesisHSB-publication-title">Article</div>
        <div className="thesisHSB-publication">IEEE Transactions on Neural Networks and Learning Systems</div>
        <div className="thesisHSB-date-title">Data</div>
        <div className="thesisHSB-date">23 Oct 2021</div>
      </div>
    </div>

  )
}
